import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the academic homepage with complete primary navigation", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Sahan S Liyanage/);
  assert.match(html, /Experimental &amp; Computational Physicist/);
  assert.match(html, /Featured Research/);
  assert.match(html, /Scientific Software/);
  assert.match(html, /Photography/);
  assert.match(html, /Contact Me/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("server-renders every requested primary page", async () => {
  const routes = [
    ["/research", /Research and development in detail/],
    ["/publications", /Browse scientific outputs/],
    ["/outreach", /Outreach and participation/],
    ["/beyond", /Beyond academic work/],
    ["/photography", /Selected photographs/],
    ["/cv", /Academic experience and research practice/],
    ["/contact", /What would you like to explore/],
  ];

  for (const [path, expected] of routes) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    assert.match(await response.text(), expected, path);
  }
});

test("research and CV pages contain verified supplied details without private contact data", async () => {
  const [researchResponse, cvResponse, homeResponse] = await Promise.all([
    render("/research"),
    render("/cv"),
    render("/"),
  ]);

  const research = await researchResponse.text();
  assert.match(research, /343 to 1032 km\/s/);
  assert.match(research, /Raman Spectroscopic Analysis of Common Minerals in Sri Lanka/);
  assert.match(research, /Arecibo Observatory Type II event of 2 March 2022/);
  assert.match(research, /Space Weather Monitoring Dashboard/);
  assert.match(research, /ecallistolib/);

  const cv = await cvResponse.text();
  assert.match(cv, /May 2026 - Present/);
  assert.match(cv, /3\.57 \/ 4\.00/);
  assert.match(cv, /COSPAR Capacity Building Workshop 2024/);
  assert.match(cv, /Dean.s List/);
  assert.match(cv, /University of Colombo School of Computing/);
  assert.doesNotMatch(cv, /Gunananda Mawatha|\+94 71 409 0587|adassuriya@phys\.cmb\.ac\.lk/);

  const home = await homeResponse.text();
  assert.match(home, /\/images\/sahan-liyanage-portrait\.jpg/);
  assert.doesNotMatch(home, /paper-cover|report-cover/);
});
