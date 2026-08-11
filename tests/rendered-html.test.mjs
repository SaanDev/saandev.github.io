import assert from "node:assert/strict";
import { access } from "node:fs/promises";
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
  assert.match(html, /Field &amp; Creative Practice/);
  assert.match(html, /Contact Me/i);
  const primaryNavigation = html.match(/<nav id="primary-navigation"[\s\S]*?<\/nav>/)?.[0] ?? "";
  assert.match(primaryNavigation, /href="\/photography"[^>]*>Photography<\/a>/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("server-renders every requested primary page", async () => {
  const routes = [
    ["/research", /Research and development in detail/],
    ["/publications", /Browse scientific outputs/],
    ["/outreach", /Outreach and participation/],
    ["/beyond", /Ways of seeing and making/],
    ["/photography", /Three ways of seeing\./],
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
  assert.match(research, /Inside the monitoring workspace/);
  assert.match(research, /space-weather-dashboard\/monitoring-overview\.webp/);
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

test("space-weather dashboard showcase includes every supplied view", async () => {
  const dashboardImages = [
    "alerts.webp",
    "cme-forecast.webp",
    "event-timeline.webp",
    "monitoring-overview.webp",
    "radio-burst-analysis.webp",
    "sdo-analysis.webp",
  ];

  await Promise.all(
    dashboardImages.map((image) =>
      access(new URL(`../public/images/research/space-weather-dashboard/${image}`, import.meta.url)),
    ),
  );
});

test("personal stories and photography are organized into their dedicated pages", async () => {
  const [beyondResponse, photographyResponse, outreachResponse, homeResponse] = await Promise.all([
    render("/beyond"),
    render("/photography"),
    render("/outreach"),
    render("/"),
  ]);

  const beyond = await beyondResponse.text();
  assert.match(beyond, /wildlife-photographer-telephoto\.webp/);
  assert.match(beyond, /music-stage-performance\.webp/);
  assert.match(beyond, /they are not presented as photographs from my wildlife portfolio/i);
  assert.doesNotMatch(beyond, /astronom/i);

  const photography = await photographyResponse.text();
  assert.match(photography, /lunar-eclipse-sequence\.webp/);
  assert.match(photography, /black-winged-stilt\.webp/);
  assert.match(photography, /airport-light-trails\.webp/);
  assert.match(photography, /galactic-centre\.webp/);
  assert.match(photography, /elephants-greeting\.webp/);
  assert.match(photography, /48(?:<!-- -->)? photographs/);
  assert.match(photography, /48(?:<!-- -->)? frames/);
  assert.doesNotMatch(photography, /\[ADD /);

  const outreach = await outreachResponse.text();
  assert.match(outreach, /Camps, observation, and public engagement/);
  assert.match(outreach, /astronomy-public-telescope\.webp/);
  assert.match(outreach, /astronomy-solar-instrument\.webp/);

  const home = await homeResponse.text();
  assert.match(home, /Field &amp; Creative Practice/);
  assert.match(home, /music-percussion-performance\.webp/);
  assert.match(home, /astronomy-solar-telescope-setup\.webp/);
  assert.doesNotMatch(home, /Preparing an instrument for daytime observation\./);
});

test("rendered images do not show visible captions", async () => {
  const routes = ["/", "/research", "/beyond", "/photography", "/outreach"];

  for (const path of routes) {
    const response = await render(path);
    assert.equal(response.status, 200, path);

    const html = await response.text();
    assert.doesNotMatch(html, /<figcaption\b/i, path);
  }
});
