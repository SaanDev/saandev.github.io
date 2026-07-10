export const siteConfig = {
  name: "Sahan S Liyanage",
  title: "Solar and Space Physics Researcher | Scientific Software Developer",
  shortTitle: "Solar and Space Physics Researcher",
  description:
    "Personal academic website of Sahan S Liyanage, a physics researcher working in solar physics, space physics, solar radio astronomy, space weather, and scientific software development.",
  email: "",
  cvUrl: "",
  eCallistoUrl: "",
  softwareUrl: "",
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
  { label: "Email", short: "@", url: "", placeholder: "[ADD EMAIL]" },
  { label: "LinkedIn", short: "in", url: "", placeholder: "[ADD LINKEDIN URL]" },
  { label: "ResearchGate", short: "RG", url: "", placeholder: "[ADD RESEARCHGATE URL]" },
  { label: "ORCID", short: "iD", url: "", placeholder: "[ADD ORCID URL]" },
  { label: "Google Scholar", short: "GS", url: "", placeholder: "[ADD GOOGLE SCHOLAR URL]" },
  { label: "GitHub", short: "GH", url: "", placeholder: "[ADD GITHUB URL]" },
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
  imageLabel: string;
  background: string;
  questions: string[];
  dataMethods: string[];
  analysisMethods: string[];
};

export const projects: Project[] = [
  {
    id: "ecallisto-fits-analyzer",
    title: "e-CALLISTO FITS Analyzer",
    eyebrow: "Scientific software",
    summary:
      "The e-CALLISTO FITS Analyzer is a cross-platform scientific application developed to process, visualize, and analyse solar radio dynamic spectra. Its tools support data preparation, interference reduction, event isolation, spectral-drift analysis, and the estimation of physical parameters associated with Type II solar radio bursts. The software is being expanded to support complementary solar imaging and space-weather data.",
    keywords: [
      "Python",
      "PySide6",
      "FITS",
      "Solar Radio Astronomy",
      "Dynamic Spectra",
      "Scientific Software",
    ],
    imageLabel: "[UPLOAD E-CALLISTO FITS ANALYZER IMAGE]",
    background:
      "Solar radio dynamic spectra make the time-frequency structure of radio emission visible. The project provides an integrated environment for preparing these observations and extracting measurements relevant to burst morphology and coronal-shock analysis.",
    questions: [
      "How can common solar-radio analysis steps be made consistent, transparent, and reproducible?",
      "How can interactive tools support careful Type II burst isolation and drift measurement?",
      "How can radio analysis be connected with complementary solar-imaging and space-weather observations?",
    ],
    dataMethods: [
      "e-CALLISTO solar-radio FITS observations",
      "Time and frequency merging",
      "Radio-frequency interference reduction",
      "Background subtraction and burst isolation",
    ],
    analysisMethods: [
      "Interactive dynamic-spectrum visualization",
      "Frequency-drift fitting",
      "Shock-speed and source-height estimation",
      "Scientific data export for reproducible workflows",
    ],
  },
  {
    id: "coronal-shock-waves",
    title: "Coronal Shock Waves from Type II Solar Radio Bursts",
    eyebrow: "Solar and space physics",
    summary:
      "This research investigates the speed and source height of coronal shock waves using the frequency drift of metric Type II solar radio bursts. The work combines e-CALLISTO observations, plasma-emission theory, coronal density models, and computational fitting methods to infer the physical properties of shock propagation in the solar corona.",
    keywords: [
      "Type II Radio Bursts",
      "Coronal Shocks",
      "Plasma Emission",
      "Newkirk Density Model",
      "Space Weather",
    ],
    imageLabel: "[UPLOAD CORONAL SHOCK RESEARCH IMAGE]",
    background:
      "Metric Type II solar radio bursts are commonly associated with shock waves moving through the solar corona. Their slowly drifting emission lanes provide an observational route to studying the height and speed of shock propagation through a model of coronal electron density.",
    questions: [
      "What coronal source heights are consistent with the observed radio-emission frequencies?",
      "What shock speeds are implied by the measured frequency drift?",
      "How sensitive are inferred physical parameters to the selected density model and fitting choices?",
    ],
    dataMethods: [
      "e-CALLISTO metric radio observations",
      "Type II burst identification and event isolation",
      "Plasma-emission theory",
      "Coronal electron-density models",
    ],
    analysisMethods: [
      "Frequency-drift measurement",
      "Computational curve fitting",
      "Source-height estimation",
      "Shock-speed inference",
    ],
  },
  {
    id: "raman-spectroscopy",
    title: "[ADD OFFICIAL RAMAN SPECTROSCOPY PROJECT TITLE]",
    eyebrow: "Raman spectroscopy",
    summary:
      "This project used Raman spectroscopy to investigate the spectral properties of selected materials. Replace this text with the verified project objectives, experimental setup, analysis methods, and main findings from Sahan’s CV.",
    keywords: [
      "Raman Spectroscopy",
      "[ADD MATERIAL]",
      "[ADD ANALYSIS METHOD]",
      "[ADD VERIFIED KEYWORDS]",
    ],
    imageLabel: "[UPLOAD RAMAN SPECTROSCOPY PROJECT IMAGE]",
    background: "[ADD VERIFIED SCIENTIFIC BACKGROUND FROM CV]",
    questions: ["[ADD VERIFIED RESEARCH QUESTION]"],
    dataMethods: [
      "[ADD VERIFIED SAMPLE OR MATERIAL]",
      "[ADD VERIFIED EXPERIMENTAL SETUP]",
      "[ADD VERIFIED INSTRUMENT DETAILS]",
    ],
    analysisMethods: [
      "[ADD VERIFIED SPECTRAL ANALYSIS METHOD]",
      "[ADD VERIFIED CALIBRATION OR PROCESSING METHOD]",
    ],
  },
];

export const softwareCapabilities = [
  "Solar radio FITS visualization",
  "Time and frequency merging",
  "Radio-frequency interference reduction",
  "Background subtraction",
  "Interactive burst isolation",
  "Frequency-drift fitting",
  "Shock speed and source-height estimation",
  "SDO/AIA image and video analysis",
  "Scientific data export",
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
