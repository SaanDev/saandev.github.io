export const siteConfig = {
  name: "Sahan S Liyanage",
  title: "Solar and Space Physics Researcher | Scientific Software Developer",
  shortTitle: "Solar and Space Physics Researcher",
  description:
    "Personal academic website of Sahan S Liyanage, a physics researcher working in solar physics, space physics, solar radio astronomy, space weather, and scientific software development.",
  email: "sahanslst@gmail.com",
  cvUrl: "/documents/sahan-liyanage-cv-web.pdf",
  eCallistoUrl: "https://www.e-callisto.org/Software/Callisto-Software.html",
  softwareUrl: "https://github.com/SaanDev/e-Callisto_FITS_Analyzer",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://sahan-s-liyanage.example",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Photography", href: "/photography" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

export const socialProfiles = [
  { label: "Email", short: "@", url: "mailto:sahanslst@gmail.com", placeholder: "" },
  { label: "LinkedIn", short: "in", url: "https://linkedin.com/in/saanliyanage", placeholder: "" },
  { label: "ResearchGate", short: "RG", url: "https://www.researchgate.net/profile/Sahan-Liyanage", placeholder: "" },
  { label: "ORCID", short: "iD", url: "https://orcid.org/0000-0002-0849-6739", placeholder: "" },
  { label: "Google Scholar", short: "GS", url: "", placeholder: "[ADD GOOGLE SCHOLAR URL]" },
  { label: "GitHub", short: "GH", url: "https://github.com/SaanDev", placeholder: "" },
  { label: "Facebook", short: "f", url: "", placeholder: "[ADD FACEBOOK URL]" },
  { label: "YouTube", short: "YT", url: "", placeholder: "[ADD YOUTUBE URL]" },
];

export const researchInterests = [
  { code: "S", label: "Solar Physics" },
  { code: "SP", label: "Space Physics" },
  { code: "MHD", label: "Plasma Physics and Magnetohydrodynamics" },
  { code: "R", label: "Solar Radio Astronomy" },
  { code: "II", label: "Type II Solar Radio Bursts" },
  { code: "CS", label: "Coronal Shock Waves" },
  { code: "SW", label: "Space Weather" },
  { code: "EUV", label: "Solar EUV Imaging" },
  { code: "B", label: "Solar Magnetic-Field Analysis" },
  { code: "</>", label: "Scientific Software Development" },
  { code: "ML", label: "Machine Learning for Solar-Event Prediction" },
  { code: "OA", label: "Observational Astrophysics" },
];

export type Project = {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  keywords: string[];
  duration: string;
  image: string;
  imageAlt: string;
  imageLabel: string;
  background: string;
  questions: string[];
  dataMethods: string[];
  analysisMethods: string[];
  findings: string[];
  status: string;
  people: string;
  links: { label: string; href: string }[];
  gallery: { src: string; alt: string; caption: string }[];
};

export const projects: Project[] = [
  {
    id: "ecallisto-fits-analyzer",
    title: "e-CALLISTO FITS Analyzer",
    eyebrow: "Scientific software",
    summary:
      "The e-CALLISTO FITS Analyzer is a unified, interactive, cross-platform application for processing and analysing e-CALLISTO dynamic spectra on Windows, macOS, and Linux. It combines archive access, FITS handling, event-level merging, background subtraction, burst isolation, drift-rate fitting, shock-parameter estimation, and scientific export within one graphical workflow.",
    keywords: [
      "Python",
      "PySide6",
      "FITS",
      "Solar Radio Astronomy",
      "Dynamic Spectra",
      "Scientific Software",
    ],
    duration: "March 2025 - Present",
    image: "/images/research/ecallisto-paper-cover.jpg",
    imageAlt: "First page of the e-CALLISTO FITS Analyzer manuscript",
    imageLabel: "[UPLOAD E-CALLISTO FITS ANALYZER IMAGE]",
    background:
      "The e-CALLISTO network contains observations from more than 150 stations, but raw spectra can be affected by radio-frequency interference, background noise, irregular station frequency coverage, and the division of events into 15-minute files. The software addresses these practical barriers while preserving interactive scientific control.",
    questions: [
      "How can common solar-radio analysis steps be made consistent, transparent, and reproducible?",
      "How can fragmented observations be merged across time and frequency for event-level analysis?",
      "How can interactive tools support Type II burst isolation, drift measurement, and physically meaningful shock estimates?",
    ],
    dataMethods: [
      "Local and archive-downloaded e-CALLISTO FITS and FITS.GZ observations",
      "Validated time and frequency combination of compatible files",
      "Per-frequency mean background subtraction and threshold clipping",
      "Interactive polygon masking in the time-frequency plane",
    ],
    analysisMethods: [
      "Maximum-intensity backbone extraction and interactive outlier removal",
      "Power-law fitting and mean drift-rate calculation",
      "One-fold or scaled Newkirk shock-speed and source-height estimation",
      "GOES X-ray visualization, SOHO/LASCO CME browsing, and publication-ready export",
    ],
    findings: [
      "The application provides a continuous workflow from archive acquisition and FITS merging to quantitative Type II burst analysis.",
      "For the Arecibo Observatory Type II event of 2 March 2022, the analyzer measured an average drift rate of -0.0400 +/- 0.0003 MHz/s.",
      "Using the one-fold Newkirk model, the same event produced an average shock speed of 449 +/- 1 km/s at 1.715 +/- 0.002 solar radii.",
    ],
    status: "Active development; manuscript submitted for publication in 2026.",
    people: "Co-authors: J. Adassuriya, K. P. S. C. Jayaratne, C. Monstein, and P. K. Manoharan.",
    links: [
      { label: "Read manuscript", href: "/publications/ecallisto-fits-analyzer-manuscript.pdf" },
      { label: "Official e-CALLISTO software", href: "https://www.e-callisto.org/Software/Callisto-Software.html" },
      { label: "Source code", href: "https://github.com/SaanDev/e-Callisto_FITS_Analyzer" },
    ],
    gallery: [
      { src: "/images/research/ecallisto-workflow.png", alt: "Workflow diagrams from the e-CALLISTO FITS Analyzer manuscript", caption: "Overall and data-acquisition workflows." },
      { src: "/images/research/ecallisto-interface.png", alt: "e-CALLISTO FITS Analyzer interface showing a processed Type II burst", caption: "Analyzer interface and Type II drift-rate method." },
      { src: "/images/research/ecallisto-processing.png", alt: "Processing stages for an Arecibo Type II solar radio burst", caption: "Raw, background-subtracted, isolated, and fitted processing stages." },
    ],
  },
  {
    id: "coronal-shock-waves",
    title: "Coronal Shock Waves from Type II Solar Radio Bursts",
    eyebrow: "Solar and space physics",
    summary:
      "This BSc Honours research determined the speed and formation height of coronal shock waves from the frequency drift of 25 metric Type II solar radio bursts observed by the e-CALLISTO network between January 2022 and October 2023.",
    keywords: [
      "Type II Radio Bursts",
      "Coronal Shocks",
      "Plasma Emission",
      "Newkirk Density Model",
      "Space Weather",
    ],
    duration: "May 2023 - April 2024",
    image: "/images/research/coronal-paper-cover.jpg",
    imageAlt: "First page of the published coronal shock wave study",
    imageLabel: "[UPLOAD CORONAL SHOCK RESEARCH IMAGE]",
    background:
      "Metric Type II solar radio bursts are commonly associated with shock waves moving through the solar corona. Their slowly drifting emission lanes provide an observational route to studying the height and speed of shock propagation through a model of coronal electron density.",
    questions: [
      "What coronal source heights are consistent with the observed radio-emission frequencies?",
      "What shock speeds are implied by the measured frequency drift?",
      "How sensitive are inferred physical parameters to the selected density model and fitting choices?",
    ],
    dataMethods: [
      "25 well-defined e-CALLISTO metric Type II radio-burst observations",
      "Type II burst identification and event isolation",
      "Plasma-emission theory",
      "Coronal electron-density models",
    ],
    analysisMethods: [
      "Frequency-drift measurement",
      "Python 3.10 with Astropy and Matplotlib",
      "Power-law curve fitting and drift-rate measurement",
      "Source-height estimation",
      "Shock-speed inference",
    ],
    findings: [
      "Calculated shock speeds ranged from 343 to 1032 km/s, with an average of 650 +/- 226 km/s.",
      "Estimated shock-formation heights ranged from 1.317 to 1.724 solar radii.",
      "The source-height fit Rs = 7.7 fs^-0.59 + 0.73 achieved R-squared = 0.999 and RMSE = 0.003 within the metric-burst sample.",
      "Maximum-intensity burst isolation produced more reliable estimates than the second-maximum-intensity method.",
    ],
    status: "Completed BSc Honours thesis in April 2024; results published in the 2025 Proceedings of the Technical Sessions, Institute of Physics, Sri Lanka.",
    people: "Supervisors: Dr. Janaka Adassuriya and Prof. K. P. S. C. Jayaratne. Publication co-author: C. Monstein.",
    links: [
      { label: "Read published paper", href: "/publications/coronal-shock-waves-type-ii-radio-bursts.pdf" },
      { label: "Read BSc thesis", href: "/publications/sahan-liyanage-bsc-thesis.pdf" },
    ],
    gallery: [
      { src: "/images/research/coronal-results.png", alt: "Graphs of coronal shock speed against frequency drift rate and starting frequency", caption: "Shock-speed relationships for the selected Type II bursts." },
      { src: "/images/research/coronal-height-fit.png", alt: "Source-height fit and conclusion page from the coronal shock study", caption: "Source-height fit for the metric Type II burst sample." },
    ],
  },
  {
    id: "raman-spectroscopy",
    title: "Raman Spectroscopic Analysis of Common Minerals in Sri Lanka",
    eyebrow: "Raman spectroscopy",
    summary:
      "This mini-research project analysed the Raman spectra of calcite, dolomite, apatite, four quartz varieties, feldspar, graphite, and mica to assess characteristic vibrational signatures for mineral identification.",
    keywords: [
      "Raman Spectroscopy",
      "Mineral Identification",
      "532 nm Laser",
      "Baseline Correction",
      "Python",
    ],
    duration: "November 2022 - March 2023",
    image: "/images/research/raman-report-cover.jpg",
    imageAlt: "Cover of the Raman spectroscopy mineral analysis report",
    imageLabel: "[UPLOAD RAMAN SPECTROSCOPY PROJECT IMAGE]",
    background: "Sri Lanka contains many high-purity mineral varieties, but the project report identified a lack of a dedicated Raman-spectroscopy database for Sri Lankan minerals. The work examined commonly found samples individually and in chemically or structurally related groups.",
    questions: [
      "Which Raman peaks characterize the selected common Sri Lankan minerals?",
      "Can related mineral groups and quartz varieties be distinguished through their vibrational signatures?",
      "How effective is Raman spectroscopy as a non-destructive mineral-identification method?",
    ],
    dataMethods: [
      "Calcite, dolomite, apatite, crystal/milky/rose/smokey quartz, feldspar, amazonite, graphite, and phlogopite mica samples",
      "Cutting and polishing of solid sample surfaces",
      "Andor Kymera 328i-A adaptive-focus imaging spectrograph with a 532 nm laser",
      "Sulphur reference measurements for Raman-shift calibration",
    ],
    analysisMethods: [
      "Python-based asymmetric least-squares background reduction",
      "BaselineRemoval Zhangfit baseline correction",
      "Savitzky-Golay smoothing and Matplotlib visualization",
      "Peak assignment using chemical structure and published Raman modes",
    ],
    findings: [
      "Prominent peaks were observed at 1075 cm^-1 for calcite, 1099 cm^-1 for dolomite, and 962 cm^-1 for apatite.",
      "The quartz varieties shared strong peaks near 465 cm^-1, while feldspar samples showed characteristic peaks between 450 and 515 cm^-1.",
      "Graphite showed a G-band peak near 1088 cm^-1; phlogopite mica showed prominent peaks near 187 and 688 cm^-1.",
      "The study concluded that Raman spectroscopy is useful for non-destructive mineral identification.",
    ],
    status: "Completed mini-research project; report dated May 2023.",
    people: "Researchers: Sahan Liyanage, Nethmi Nawarathna, and Janitha Dissanayaka. Supervisor: H. H. E. Jayaweera.",
    links: [
      { label: "Read project report", href: "/publications/raman-spectroscopy-common-minerals-sri-lanka.pdf" },
    ],
    gallery: [
      { src: "/images/research/raman-experimental-setup.png", alt: "Raman spectroscopy experimental setup and prepared mineral samples", caption: "Experimental setup and sample preparation." },
      { src: "/images/research/raman-results.png", alt: "Raman spectra and peak tables for the selected minerals", caption: "Representative mineral spectra and peak analysis." },
    ],
  },
];

export const softwareCapabilities = [
  "Local and archive solar-radio FITS acquisition",
  "Time and frequency merging",
  "Mean background subtraction and threshold clipping",
  "Interactive polygon burst isolation",
  "Maximum-intensity backbone extraction",
  "Power-law frequency-drift fitting",
  "Newkirk shock-speed and source-height estimation",
  "GOES X-ray visualization and SOHO/LASCO CME browsing",
  "Publication-ready plots and spreadsheet export",
];

export const researchThemes = [
  "Solar radio bursts and plasma emission",
  "Coronal shock-wave propagation",
  "Solar flares and coronal mass ejections",
  "Solar extreme-ultraviolet observations",
  "Photospheric magnetic fields",
  "Space-weather analysis",
  "Plasma physics and MHD",
  "Machine learning for solar-event prediction",
  "Scientific software and reproducible data analysis",
  "Raman spectroscopy",
];

export const researchMethods = [
  {
    number: "01",
    title: "Observation",
    text: "Solar radio dynamic spectra, solar EUV imagery, photospheric magnetic-field data, and complementary space-weather observations.",
  },
  {
    number: "02",
    title: "Physical modelling",
    text: "Plasma-emission theory, coronal density models, shock-wave interpretation, and links between observable signatures and solar-atmospheric processes.",
  },
  {
    number: "03",
    title: "Computation",
    text: "Scientific Python, interactive software, signal and image processing, curve fitting, data export, and reproducible analysis workflows.",
  },
  {
    number: "04",
    title: "Synthesis",
    text: "Cross-comparison of radio, EUV, magnetic-field, and white-light evidence to develop a coherent physical interpretation.",
  },
];

export const outreachEntries = [
  "Astronomy and solar-physics outreach",
  "Invited scientific talks",
  "Public observing programmes",
  "Astronomical society activities",
  "Physics teaching and student support",
  "Scientific workshops",
  "Conference presentations",
  "Research training programmes",
  "Science communication",
  "Instrumentation and observational activities",
].map((title, index) => ({
  id: `outreach-${index + 1}`,
  title,
  role: "[ADD ROLE]",
  institution: "[ADD INSTITUTION OR EVENT]",
  date: "[ADD DATE]",
  description: "[ADD VERIFIED ONE-PARAGRAPH DESCRIPTION]",
  image: "[UPLOAD OPTIONAL PHOTOGRAPH]",
  link: "[ADD OPTIONAL EXTERNAL LINK]",
}));

export type Publication = {
  id: string;
  type: string;
  topic: string;
  year: string;
  authors: string;
  title: string;
  venue: string;
  details: string;
  abstract: string;
};

export const publicationCategories = [
  "Journal Articles",
  "Conference Papers",
  "Conference Abstracts and Presentations",
  "Software Publications",
  "Manuscripts Under Review",
  "Other Scientific Outputs",
];

export const publications: Publication[] = [
  {
    id: "publication-placeholder-1",
    type: "Journal Articles",
    topic: "Solar radio astronomy",
    year: "[ADD YEAR]",
    authors: "[ADD VERIFIED FULL AUTHOR LIST]",
    title: "[ADD VERIFIED JOURNAL ARTICLE TITLE]",
    venue: "[ADD VERIFIED JOURNAL]",
    details: "[ADD VOLUME, ISSUE, AND PAGES]",
    abstract: "[ADD VERIFIED ABSTRACT]",
  },
  {
    id: "publication-placeholder-2",
    type: "Conference Abstracts and Presentations",
    topic: "Solar and space physics",
    year: "[ADD YEAR]",
    authors: "[ADD VERIFIED FULL AUTHOR LIST]",
    title: "[ADD VERIFIED CONFERENCE CONTRIBUTION TITLE]",
    venue: "[ADD VERIFIED CONFERENCE]",
    details: "[ADD VERIFIED PRESENTATION OR ABSTRACT DETAILS]",
    abstract: "[ADD VERIFIED ABSTRACT]",
  },
  {
    id: "publication-placeholder-3",
    type: "Software Publications",
    topic: "Scientific software",
    year: "[ADD YEAR]",
    authors: "[ADD VERIFIED FULL AUTHOR LIST]",
    title: "[ADD VERIFIED SOFTWARE OUTPUT TITLE]",
    venue: "[ADD VERIFIED REPOSITORY OR PUBLICATION VENUE]",
    details: "[ADD VERSION OR CITATION DETAILS]",
    abstract: "[ADD VERIFIED SOFTWARE ABSTRACT OR DESCRIPTION]",
  },
];

export type GalleryItem = {
  id: string;
  category: "Astrophotography" | "Wildlife Photography";
  subcategory: string;
  title: string;
  image: string;
  alt: string;
  date: string;
  location: string;
  subject: string;
  camera: string;
  lens: string;
  mount: string;
  filter: string;
  exposure: string;
  frames: string;
  software: string;
  note: string;
};

const blankGalleryDetails = {
  image: "",
  date: "[ADD DATE]",
  location: "[ADD LOCATION]",
  camera: "[ADD CAMERA]",
  lens: "[ADD LENS OR TELESCOPE]",
  mount: "[ADD MOUNT, IF APPLICABLE]",
  filter: "[ADD FILTER, IF APPLICABLE]",
  exposure: "[ADD EXPOSURE SETTINGS]",
  frames: "[ADD NUMBER OF FRAMES]",
  software: "[ADD PROCESSING SOFTWARE]",
  note: "[ADD SHORT SCIENTIFIC OR OBSERVATIONAL NOTE]",
};

export const galleryItems: GalleryItem[] = [
  {
    ...blankGalleryDetails,
    id: "solar-photography",
    category: "Astrophotography",
    subcategory: "Solar Photography",
    title: "[ADD SOLAR PHOTOGRAPH TITLE]",
    subject: "[ADD SOLAR FEATURE OR EVENT]",
    alt: "Placeholder for a user-supplied solar photograph",
  },
  {
    ...blankGalleryDetails,
    id: "milky-way",
    category: "Astrophotography",
    subcategory: "Milky Way",
    title: "[ADD MILKY WAY PHOTOGRAPH TITLE]",
    subject: "[ADD ASTRONOMICAL OBJECT OR REGION]",
    alt: "Placeholder for a user-supplied Milky Way photograph",
  },
  {
    ...blankGalleryDetails,
    id: "moon",
    category: "Astrophotography",
    subcategory: "Moon",
    title: "[ADD LUNAR PHOTOGRAPH TITLE]",
    subject: "[ADD LUNAR FEATURE OR PHASE]",
    alt: "Placeholder for a user-supplied lunar photograph",
  },
  {
    ...blankGalleryDetails,
    id: "astronomical-event",
    category: "Astrophotography",
    subcategory: "Astronomical Events",
    title: "[ADD ASTRONOMICAL EVENT TITLE]",
    subject: "[ADD EVENT OR OBJECT]",
    alt: "Placeholder for a user-supplied astronomical-event photograph",
  },
  {
    ...blankGalleryDetails,
    id: "birds",
    category: "Wildlife Photography",
    subcategory: "Birds",
    title: "[ADD BIRD PHOTOGRAPH TITLE]",
    subject: "[ADD SPECIES]",
    alt: "Placeholder for a user-supplied bird photograph",
  },
  {
    ...blankGalleryDetails,
    id: "mammals",
    category: "Wildlife Photography",
    subcategory: "Mammals",
    title: "[ADD MAMMAL PHOTOGRAPH TITLE]",
    subject: "[ADD SPECIES]",
    alt: "Placeholder for a user-supplied mammal photograph",
  },
  {
    ...blankGalleryDetails,
    id: "insects",
    category: "Wildlife Photography",
    subcategory: "Insects",
    title: "[ADD INSECT PHOTOGRAPH TITLE]",
    subject: "[ADD SPECIES]",
    alt: "Placeholder for a user-supplied insect photograph",
  },
  {
    ...blankGalleryDetails,
    id: "animal-behaviour",
    category: "Wildlife Photography",
    subcategory: "Animal Behaviour",
    title: "[ADD ANIMAL BEHAVIOUR PHOTOGRAPH TITLE]",
    subject: "[ADD SPECIES AND BEHAVIOUR]",
    alt: "Placeholder for a user-supplied animal-behaviour photograph",
  },
];
