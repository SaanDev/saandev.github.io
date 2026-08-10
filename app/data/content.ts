export const siteConfig = {
  name: "Sahan S Liyanage",
  title: "Experimental & Computational Physicist | Researcher | Scientific Software Developer",
  shortTitle: "Experimental and Computational Physicist",
  description:
    "Personal academic website of Sahan S Liyanage, an experimental and computational physicist working across solar and space physics, spectroscopy, instrumentation, scientific programming, and research-led teaching.",
  email: "sahanslst@gmail.com",
  cvUrl: "/documents/sahan-liyanage-cv-web.pdf",
  eCallistoUrl: "https://www.e-callisto.org/Software/Callisto-Software.html",
  softwareUrl: "https://github.com/SaanDev/e-Callisto_FITS_Analyzer",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://sahan-s-liyanage.example",
};

export type NavigationItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Research",
    href: "/research",
    children: [
      { label: "Projects", href: "/research#projects" },
      { label: "Workshops and Trainings", href: "/research#workshops-training" },
    ],
  },
  { label: "Publications", href: "/publications" },
  { label: "Outreach", href: "/outreach" },
  { label: "Beyond", href: "/beyond" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

export const socialProfiles = [
  { label: "Email", short: "@", url: "mailto:sahanslst@gmail.com", placeholder: "" },
  { label: "LinkedIn", short: "in", url: "https://www.linkedin.com/in/saanliyanage/", placeholder: "" },
  { label: "ResearchGate", short: "RG", url: "https://www.researchgate.net/profile/Sahan-Liyanage", placeholder: "" },
  { label: "ORCID", short: "iD", url: "https://orcid.org/0000-0002-0849-6739", placeholder: "" },
  { label: "Google Scholar", short: "GS", url: "https://scholar.google.com/citations?user=bOW7eCAAAAAJ&hl=en", placeholder: "" },
  { label: "GitHub", short: "GH", url: "https://github.com/SaanDev", placeholder: "" },
];

export const researchInterests = [
  { code: "SP", label: "Space and Solar Physics" },
  { code: "P", label: "Plasma Physics" },
  { code: "A", label: "Astrophysics" },
  { code: "AMO", label: "Atomic, Molecular and Optical Physics" },
  { code: "N", label: "Nuclear Physics" },
  { code: "HEP", label: "High-Energy and Particle Physics" },
  { code: "CM", label: "Condensed Matter Physics" },
  { code: "E", label: "Experimental Physics" },
  { code: "C", label: "Computational Physics" },
  { code: "</>", label: "Scientific Software Development" },
  { code: "D", label: "Data Analysis and Modelling" },
  { code: "I", label: "Instrumentation and Measurement" },
];

export type Project = {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  keywords: string[];
  duration: string;
  image?: string;
  imageAlt?: string;
  background: string;
  questions: string[];
  dataMethods: string[];
  analysisMethods: string[];
  findings: string[];
  status: string;
  people: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "space-weather-dashboard",
    title: "Space Weather Monitoring Dashboard",
    eyebrow: "Full-stack research software",
    summary:
      "A full-stack dashboard that combines solar-radio spectra, X-ray and proton flux, solar imagery, geomagnetic indices, and solar-wind measurements in one event-monitoring and archive-search environment.",
    keywords: [
      "Next.js",
      "FastAPI",
      "PyTorch",
      "TimescaleDB",
      "Space Weather",
      "Machine Learning",
    ],
    duration: "2026 - Present",
    background:
      "Space-weather interpretation often requires evidence from several instruments and data services. This project brings those streams together with alerts, a combined event timeline, and archive search so solar activity can be reviewed as a connected sequence rather than as isolated plots.",
    questions: [
      "How can complementary solar and geospace measurements be monitored in a coherent event timeline?",
      "Can machine-learning models detect and classify radio bursts reliably enough to assist expert review?",
      "How can current observations and historical data be made accessible through the same interface?",
    ],
    dataMethods: [
      "e-CALLISTO dynamic spectra",
      "GOES XRS and proton-flux measurements",
      "SDO/AIA and HMI imagery",
      "SOHO/LASCO C2 and C3 coronagraph frames",
      "Kp, Dst, solar-wind, and interplanetary magnetic-field parameters",
    ],
    analysisMethods: [
      "ResNet-18 burst-detection and three-class burst-typing models",
      "Next.js 14, TypeScript, Tailwind CSS, Plotly.js, and ShadCN UI",
      "FastAPI, Python 3.11, Pydantic, Astropy, NumPy, SciPy, and Pandas",
      "PostgreSQL with TimescaleDB, Redis, PyTorch, and Docker Compose",
    ],
    findings: [
      "The burst-detection classifier achieved a test F1 score of 0.932.",
      "The Type II, Type III, and Other classifier achieved 0.966 validation accuracy with a macro F1 score of 0.889.",
      "The dashboard integrates event alerts, a combined timeline, and archive search across the monitored data streams.",
    ],
    status: "Active development.",
    people: "Developer: Sahan S Liyanage.",
    links: [
      { label: "Source code", href: "https://github.com/SaanDev/Solar_Monitoring_Dashboard" },
    ],
  },
  {
    id: "ecallistolib",
    title: "ecallistolib",
    eyebrow: "Open-source Python library",
    summary:
      "An MIT-licensed Python library for downloading, reading, processing, combining, and plotting e-CALLISTO FITS dynamic spectra, with a command-line interface and a tested scientific-processing workflow.",
    keywords: ["Python", "Astropy", "NumPy", "SciPy", "FITS", "Open Source"],
    duration: "2025 - Present",
    background:
      "Reusable programmatic access is essential for large or repeatable e-CALLISTO analyses. The library packages archive retrieval, metadata-preserving parsing, spectrum preparation, RFI mitigation, segment combination, and plotting into a documented Python interface.",
    questions: [
      "How can e-CALLISTO data preparation be made reusable outside a desktop GUI?",
      "How can processing preserve observation metadata while supporting reproducible analysis?",
      "How can common download and plotting tasks be exposed through both Python and the command line?",
    ],
    dataMethods: [
      "e-CALLISTO archive downloads and local FITS files",
      "Metadata-preserving FITS parsing",
      "Time and frequency cropping and segment combination",
      "Background subtraction and publication-quality plotting",
    ],
    analysisMethods: [
      "Median filtering and MAD-based radio-frequency-interference mitigation",
      "NumPy, SciPy, Astropy, and Matplotlib",
      "Command-line download and plotting workflows",
      "Optional dependency groups and a pytest test suite",
    ],
    findings: [
      "The current CV records version 1.3.1 with support for Python 3.10 through 3.14.",
      "The library covers archive download through processed, publication-quality dynamic-spectrum plots.",
      "The project is distributed under the MIT licence.",
    ],
    status: "Active development and maintenance.",
    people: "Author and maintainer: Sahan S Liyanage.",
    links: [
      { label: "Source code", href: "https://github.com/SaanDev/ecallistolib" },
    ],
  },
  {
    id: "ecallisto-fits-analyzer",
    title: "e-CALLISTO FITS Analyzer",
    eyebrow: "Scientific software",
    summary:
      "An open-source, cross-platform Python desktop application for event-level analysis of e-CALLISTO dynamic spectra, published as a peer-reviewed software framework in RAS Techniques and Instruments.",
    keywords: [
      "Python",
      "PySide6",
      "FITS",
      "Solar Radio Astronomy",
      "Dynamic Spectra",
      "Scientific Software",
    ],
    duration: "2024 - Present",
    image: "/images/research/Analyzer/main_window.png",
    imageAlt: "Main window of the e-CALLISTO FITS Analyzer software",
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
      "The application provides a continuous workflow from archive acquisition and deterministic RFI cleaning to quantitative Type II burst analysis.",
      "For the Arecibo Observatory Type II event of 2 March 2022, the analyzer measured an average drift rate of -0.0400 +/- 0.0003 MHz/s.",
      "Using the one-fold Newkirk model, the same event produced an average shock speed of 449 +/- 1 km/s at 1.715 +/- 0.002 solar radii.",
    ],
    status: "Active development; peer-reviewed article published in RAS Techniques and Instruments in 2026.",
    people: "Co-authors: J. Adassuriya, K. P. S. C. Jayaratne, C. Monstein, and P. K. Manoharan.",
    links: [
      { label: "Read published article", href: "https://doi.org/10.1093/rasti/rzag056" },
      { label: "Author manuscript", href: "/publications/ecallisto-fits-analyzer-manuscript.pdf" },
      { label: "Official e-CALLISTO software", href: "https://www.e-callisto.org/Software/Callisto-Software.html" },
      { label: "Source code", href: "https://github.com/SaanDev/e-Callisto_FITS_Analyzer" },
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
      "The fitted power-law index agreed with Aguilar-Rodríguez et al. (2005) to 99.4%, and no correlation was found between shock speed and associated CME speed.",
    ],
    status: "Completed BSc Honours thesis in April 2024; results published in the 2025 Proceedings of the Technical Sessions, Institute of Physics, Sri Lanka.",
    people: "Supervisors: Dr. Janaka Adassuriya and Prof. K. P. S. C. Jayaratne. Publication co-author: C. Monstein.",
    links: [
      { label: "Read published paper", href: "/publications/coronal-shock-waves-type-ii-radio-bursts.pdf" },
      { label: "DOI", href: "https://doi.org/10.48550/arXiv.2504.00622" },
      { label: "Read BSc thesis", href: "/publications/sahan-liyanage-bsc-thesis.pdf" },
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
  },
  {
    id: "spectral-analysis-fluids",
    title: "Spectral Analysis of Fluids to Determine the Effects of Temperature",
    eyebrow: "Experimental physics",
    summary:
      "A group laboratory project that used a home-made spectrometer and image-based absorbance measurements to estimate liquid temperature and the effective power of an unknown heat source.",
    keywords: [
      "Optical Spectroscopy",
      "Absorbance",
      "Instrumentation",
      "Image Analysis",
      "Error Analysis",
    ],
    duration: "2021",
    background:
      "The project tested whether a simple, home-made optical spectrometer could use temperature-dependent absorbance as a practical thermometric signal for common fluids.",
    questions: [
      "Which tested liquid and wavelength provide the clearest temperature-dependent absorbance response?",
      "Can a fitted absorbance relation estimate liquid temperature with useful accuracy?",
      "Can the calibrated method be extended to estimate an unknown heat-source power?",
    ],
    dataMethods: [
      "Home-made spectrometer, DSLR camera, white-light source, and induction cooker",
      "Kerosene, coconut oil, battery acid, and distilled-water samples",
      "Image-based optical spectra and absorbance measurements",
    ],
    analysisMethods: [
      "Spectral extraction and absorbance analysis",
      "Linear calibration of temperature against absorbance",
      "Experimental uncertainty and model-error analysis",
    ],
    findings: [
      "Distilled water at 462 nm produced the best thermometric response.",
      "The fitted relation was T = 73A + 230, with a gradient of 73 +/- 3 K and an intercept of (2.3 +/- 0.1) x 10^2 K.",
      "Model errors ranged from 4% to 12%, and the method was extended to estimate the effective power of an unknown heat source.",
    ],
    status: "Completed group project for General Physics Laboratory II.",
    people: "Department of Physics, University of Colombo.",
    links: [],
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
  "Space, solar, and plasma phenomena",
  "Observational astrophysics and energetic processes",
  "Atomic, molecular, and optical interactions",
  "Nuclear, particle, and high-energy phenomena",
  "Condensed matter and material properties",
  "Experimental measurement and instrumentation",
  "Physical modelling across scales",
  "Scientific software and reproducible data analysis",
  "Signal, spectral, and image analysis",
  "Data-informed methods grounded in physics",
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
  {
    id: "accimt-public-outreach",
    title: "Space Physics and Astronomy Workshops",
    role: "Research Assistant and outreach support",
    institution: "Arthur C. Clarke Institute for Modern Technologies",
    date: "May 2026 - Present",
    description:
      "Support public workshops and observation sessions in space physics and astronomy alongside research duties in the Astronomy and Space Applications Division.",
  },
  {
    id: "technical-sessions-2025",
    title: "Coronal Shock Waves from Type II Solar Radio Bursts",
    role: "Oral presenter",
    institution: "41st Technical Sessions, Institute of Physics, Sri Lanka",
    date: "22 March 2025",
    description:
      "Presented undergraduate research findings on the speed and source height of coronal shock waves to Sri Lanka's national physics research community at the University of Colombo.",
  },
  {
    id: "star-quest",
    title: "Star Quest - All-Island Astronomical Quiz",
    role: "Organising team member",
    institution: "Astronomical Society, University of Colombo",
    date: "2022 - 2025",
    description:
      "Contributed to question creation, participant coordination, event-day operations, and grading for an astronomy quiz serving school students across Sri Lanka.",
  },
  {
    id: "solar-radio-talk",
    title: "Solar Radio Bursts and Space Weather",
    role: "Oral presenter",
    institution: "Physics Society, University of Colombo",
    date: "20 November 2024",
    description:
      "Delivered an on-site presentation to physics undergraduates on solar radio bursts and their implications for space weather.",
  },
  {
    id: "solar-physics-introduction",
    title: "Introduction to Solar Physics",
    role: "Online lecturer",
    institution: "Astronomical Society, Rajarata University of Sri Lanka",
    date: "18 July 2024",
    description:
      "Delivered an online introductory lecture on solar physics for university students.",
  },
  {
    id: "science-bus",
    title: "Science Bus - Phases I, II, and III",
    role: "Volunteer",
    institution: "Physics Society, University of Colombo",
    date: "2021 - 2023",
    description:
      "Contributed to an SPIE-funded travelling outreach project that brought hands-on science activities to school students in rural areas of Sri Lanka.",
  },
  {
    id: "naada-nu-23",
    title: "Naada Nu 23 - Annual Musical Concert",
    role: "Music Director, organiser, and performer",
    institution: "Music Society, University of Colombo",
    date: "2023",
    description:
      "Directed music for the society's annual concert, contributed to event organisation, and performed on stage.",
  },
];

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
  links: { label: string; href: string }[];
  bibtex: string;
};

export const publicationCategories = [
  "Journal Articles",
  "Conference Papers",
];

export const publications: Publication[] = [
  {
    id: "ecallisto-fits-analyzer-2026",
    type: "Journal Articles",
    topic: "Solar radio astronomy",
    year: "2026",
    authors: "G. L. S. S. Liyanage, J. Adassuriya, K. P. S. C. Jayaratne, C. Monstein, and P. K. Manoharan",
    title: "e-CALLISTO FITS Analyzer: A software framework for CALLISTO solar radio data",
    venue: "RAS Techniques and Instruments",
    details: "rzag056 · DOI 10.1093/rasti/rzag056",
    abstract:
      "A peer-reviewed description of an open-source, cross-platform desktop framework for retrieving, cleaning, combining, visualising, and analysing e-CALLISTO dynamic spectra at event level.",
    links: [
      { label: "DOI", href: "https://doi.org/10.1093/rasti/rzag056" },
      { label: "PDF", href: "/publications/ecallisto-fits-analyzer-manuscript.pdf" },
      { label: "Code", href: "https://github.com/SaanDev/e-Callisto_FITS_Analyzer" },
    ],
    bibtex: "@article{liyanage2026ecallisto,\n  author = {Liyanage, G. L. S. S. and Adassuriya, J. and Jayaratne, K. P. S. C. and Monstein, C. and Manoharan, P. K.},\n  title = {e-CALLISTO FITS Analyzer: A software framework for CALLISTO solar radio data},\n  journal = {RAS Techniques and Instruments},\n  year = {2026},\n  doi = {10.1093/rasti/rzag056}\n}",
  },
  {
    id: "coronal-shock-waves-2025",
    type: "Conference Papers",
    topic: "Solar and space physics",
    year: "2025",
    authors: "G. L. S. S. Liyanage, J. Adassuriya, K. P. S. C. Jayaratne, and C. Monstein",
    title: "Determination of speed and source height of coronal shock waves using Type II solar radio bursts",
    venue: "Proceedings of the Technical Sessions, Institute of Physics, Sri Lanka",
    details: "Volume 41 · Pages 59-67 · DOI 10.48550/arXiv.2504.00622",
    abstract:
      "An analysis of 25 metric Type II solar radio bursts that derived coronal shock speeds and source heights from frequency drift, plasma-emission theory, and the Newkirk density model.",
    links: [
      { label: "DOI", href: "https://doi.org/10.48550/arXiv.2504.00622" },
      { label: "PDF", href: "/publications/coronal-shock-waves-type-ii-radio-bursts.pdf" },
      { label: "Thesis", href: "/publications/sahan-liyanage-bsc-thesis.pdf" },
    ],
    bibtex: "@inproceedings{liyanage2025coronal,\n  author = {Liyanage, G. L. S. S. and Adassuriya, J. and Jayaratne, K. P. S. C. and Monstein, C.},\n  title = {Determination of speed and source height of coronal shock waves using Type II solar radio bursts},\n  booktitle = {Proceedings of the Technical Sessions, Institute of Physics, Sri Lanka},\n  volume = {41},\n  pages = {59--67},\n  year = {2025},\n  doi = {10.48550/arXiv.2504.00622}\n}",
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
