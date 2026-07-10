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
  assert.match(html, /Solar and Space Physics Researcher/);
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
