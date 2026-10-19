import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
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
  assert.match(html, /Physics Graduate/i);
  assert.match(html, /Selected projects/);
  assert.match(html, /Scientific software/i);
  assert.match(html, /Beyond the classroom/);
  assert.match(html, /Let’s connect/);
  const primaryNavigation = html.match(/<nav id="primary-navigation"[\s\S]*?<\/nav>/)?.[0] ?? "";
  assert.match(primaryNavigation, /href="\/beyond"[^>]*>Beyond<\/a>/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("server-renders every requested primary page", async () => {
  const routes = [
    ["/research", /Research and development in detail/],
    ["/publications", /Browse scientific outputs/],
    ["/beyond/outreach", /Outreach and participation/],
    ["/beyond", /Curiosity beyond the classroom/],
    ["/beyond/music", /Music in rehearsal and on stage/],
    ["/beyond/nature", /Wildlife photography in the field/],
    ["/beyond/photography", /Three ways of seeing\./],
    ["/cv", /Academic experience and research practice/],
    ["/contact", /Graduate study &amp; research opportunities/],
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
  assert.match(research, /raman-spectroscopy\/active-laser-setup\.webp/);
  assert.match(research, /raman-spectroscopy\/spectrograph-instrument\.webp/);
  assert.match(research, /raman-spectroscopy\/laboratory-workstation\.webp/);
  assert.match(research, /raman-spectroscopy\/optical-setup\.webp/);
  const cosparWorkshopImages = [
    "workshop-group.webp",
    "analysis-session-group.webp",
    "certificate-presentation.webp",
    "computational-session.webp",
    "workshop-instructor-portrait.webp",
    "international-participants.webp",
    "solar-physics-instructor.webp",
  ];
  for (const image of cosparWorkshopImages) {
    assert.match(research, new RegExp(`cospar-2024/${image.replace(".", "\\.")}`));
  }

  const cv = await cvResponse.text();
  assert.match(cv, /May 2026 - Present/);
  assert.match(cv, /3\.57 \/ 4\.00/);
  assert.match(cv, /COSPAR Capacity Building Workshop 2024/);
  assert.match(cv, /Visiting Lecturer/);
  assert.match(cv, /COSPAR Capacity Building Workshop 2026/);
  assert.doesNotMatch(cv, /id="referees"/);
  assert.match(cv, /University of Colombo School of Computing/);
  assert.doesNotMatch(cv, /Gunananda Mawatha|\+94 71 409 0587|adassuriya@phys\.cmb\.ac\.lk/);

  const home = await homeResponse.text();
  assert.match(home, /\/images\/sahan-liyanage-portrait\.webp/);
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
    render("/beyond/music"),
    render("/beyond/photography"),
    render("/beyond/outreach"),
    render("/"),
  ]);

  const beyond = await beyondResponse.text();

  assert.match(beyond, /music-stage-performance\.webp/);
  assert.match(beyond, /music-naada-nu-vocal-performance\.webp/);
  assert.match(beyond, /music-naada-nu-vocal-monochrome\.webp/);
  assert.match(beyond, /music-naada-nu-percussion\.webp/);
  assert.match(beyond, /music-naada-nu-ensemble\.webp/);
  const nature = await (await render("/beyond/nature")).text();
  assert.match(nature, /wildlife-photographer-telephoto\.webp/);
  assert.match(nature, /they are not presented as photographs from my wildlife portfolio/i);


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
  assert.match(home, /Beyond the classroom/);
  assert.match(home, /milky-way-road\.webp/);
  assert.match(home, /music-naada-nu-vocal-performance\.webp/);
  assert.match(home, /https:\/\/ecallistoanalyzer\.org\//);
  assert.doesNotMatch(home.replace(/<(svg|script|style)\b[\s\S]*?<\/\1>/g, "").replace(/<[^>]*>/g, ""), /GPA|3\.57|Second Class|referee/);
  const nav = home.match(/<nav id="primary-navigation"[\s\S]*?<\/nav>/)?.[0] ?? "";
  assert.doesNotMatch(nav, /href="\/(outreach|photography)"/);

});

test("rendered images do not show visible captions", async () => {
  const routes = ["/", "/research", "/beyond", "/beyond/photography", "/beyond/music", "/beyond/nature", "/beyond/outreach"];

  for (const path of routes) {
    const response = await render(path);
    assert.equal(response.status, 200, path);

    const html = await response.text();
    assert.doesNotMatch(html, /<figcaption\b/i, path);
  }
});

test("pages serve responsive WebP images with dimensions and valid static candidates", async () => {
  for (const route of ["/", "/research", "/beyond", "/beyond/photography", "/beyond/music", "/beyond/nature", "/beyond/outreach"]) {
    const html = await (await render(route)).text();
    const images = html.match(/<img\b[^>]*>/g) ?? [];
    assert.ok(images.length, `${route}: images rendered`);
    for (const image of images) {
      assert.match(image, /src="[^"]+\.webp"/, route);
      assert.match(image, /width="[1-9]\d*"/, route);
      assert.match(image, /height="[1-9]\d*"/, route);
      assert.match(image, /sizes="[^"]+"/, route);
      assert.match(image, /decoding="async"/, route);
      const candidates = image.match(/srcSet="([^"]+)"/i)?.[1];
      assert.ok(candidates, `${route}: responsive candidates`);
      for (const candidate of candidates.split(",")) {
        const [path, width] = candidate.trim().split(/\s+/);
        assert.match(width, /^[1-9]\d*w$/);
        await access(new URL(`../public${path}`, import.meta.url));
      }
      if (image.includes('class="intro-portrait"')) {
        assert.match(image, /loading="eager"/);
        assert.match(image, /fetchPriority="high"/i);
      } else {
        assert.match(image, /loading="lazy"/, route);
      }
    }
  }
});


test("Beyond links to each dedicated subpage and old routes redirect", async () => {
  const html = await (await render("/beyond")).text();
  for (const slug of ["photography", "music", "nature", "outreach"]) {
    assert.ok(html.includes(`href="/beyond/${slug}"`));
    const subpage = await (await render(`/beyond/${slug}`)).text();
    assert.match(subpage, /aria-label="Beyond navigation"/);
    assert.ok(subpage.includes(`href="/beyond/${slug}" aria-current="page"`));
    assert.ok(subpage.includes(`rel="canonical" href="https://saandev.github.io/beyond/${slug}"`));
  }
  for (const slug of ["photography", "outreach"]) {
    const response = await render(`/${slug}`);
    assert.equal(response.status, 308);
    assert.equal(new URL(response.headers.get("location"), "http://localhost").pathname, `/beyond/${slug}`);
  }
});


test("download and print use the unchanged original CV", async () => {
  const pdf = await readFile(new URL("../public/documents/GLSS_Liyanage_CV.pdf", import.meta.url));
  assert.equal(createHash("sha256").update(pdf).digest("hex"), "258d78c44dc1e8836b8b6612d8c2165cc44e541199c9f0a2968712d81404574c");
  const html = await (await render("/cv")).text();
  assert.match(html, /href="\/documents\/GLSS_Liyanage_CV\.pdf" download="GLSS_Liyanage_CV\.pdf"/);
  assert.match(html, /href="\/documents\/GLSS_Liyanage_CV\.pdf#toolbar=1" target="_blank"/);
  assert.doesNotMatch(html, /sahan-liyanage-cv-web/);
});

test("profiles have vector icons and pages contain no emoji-style arrow glyphs", async () => {
  for (const route of ["/", "/contact"]) {
    const html = await (await render(route)).text();
    for (const label of ["Email", "LinkedIn", "ResearchGate", "Google Scholar", "ORCID", "GitHub"]) {
      const profile = html.match(new RegExp(`<a[^>]*aria-label="${label}"[^>]*>[\\s\\S]*?<\\/a>`))?.[0];
      assert.ok(profile, `${route}: ${label} accessible link`);
      assert.match(profile, /<svg/);
    }
  }
  for (const route of ["/", "/research", "/publications", "/cv", "/contact", "/beyond", "/beyond/photography"]) {
    const html = await (await render(route)).text();
    assert.doesNotMatch(html, /[↗→←⌄]/, route);
  }
});
