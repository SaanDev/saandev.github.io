from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    KeepTogether,
    ListFlowable,
    ListItem,
    Paragraph,
    PageBreak,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "sahan-liyanage-cv-web.pdf"
PUBLIC_OUTPUT = ROOT / "public" / "documents" / "sahan-liyanage-cv-web.pdf"

NAVY = colors.HexColor("#0C2846")
GOLD = colors.HexColor("#C8891C")
CHARCOAL = colors.HexColor("#26323B")
MUTED = colors.HexColor("#66747F")
PALE = colors.HexColor("#EAF0F3")
LINE = colors.HexColor("#D4DCE0")


styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="Name",
        parent=styles["Title"],
        fontName="Times-Bold",
        fontSize=24,
        leading=27,
        textColor=NAVY,
        alignment=TA_CENTER,
        spaceAfter=4,
    )
)
styles.add(
    ParagraphStyle(
        name="ProfessionalTitle",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=9.5,
        leading=13,
        textColor=GOLD,
        alignment=TA_CENTER,
        spaceAfter=7,
    )
)
styles.add(
    ParagraphStyle(
        name="Contact",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8,
        leading=12,
        textColor=MUTED,
        alignment=TA_CENTER,
        spaceAfter=11,
    )
)
styles.add(
    ParagraphStyle(
        name="Section",
        parent=styles["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=9.5,
        leading=12,
        textColor=NAVY,
        spaceBefore=6,
        spaceAfter=5,
        borderWidth=0,
    )
)
styles.add(
    ParagraphStyle(
        name="Role",
        parent=styles["Normal"],
        fontName="Times-Bold",
        fontSize=10.2,
        leading=12.5,
        textColor=NAVY,
    )
)
styles.add(
    ParagraphStyle(
        name="Organisation",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=8.2,
        leading=11,
        textColor=CHARCOAL,
        spaceBefore=1,
    )
)
styles.add(
    ParagraphStyle(
        name="Date",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=8.1,
        leading=10.5,
        textColor=NAVY,
        alignment=2,
    )
)
styles.add(
    ParagraphStyle(
        name="BodySmall",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=8,
        leading=10.6,
        textColor=CHARCOAL,
        spaceAfter=3,
    )
)
styles.add(
    ParagraphStyle(
        name="BodySmallBold",
        parent=styles["BodyText"],
        fontName="Helvetica-Bold",
        fontSize=8,
        leading=10.6,
        textColor=CHARCOAL,
        spaceAfter=3,
    )
)
styles.add(
    ParagraphStyle(
        name="Citation",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=7.9,
        leading=10.6,
        textColor=CHARCOAL,
        leftIndent=0,
        firstLineIndent=0,
        spaceAfter=6,
    )
)
styles.add(
    ParagraphStyle(
        name="Footer",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=7,
        leading=9,
        textColor=MUTED,
        alignment=TA_CENTER,
    )
)


def section(title):
    return [
        Spacer(1, 2),
        Table(
            [[Paragraph(title.upper(), styles["Section"])]],
            colWidths=[None],
            style=TableStyle(
                [
                    ("LINEBELOW", (0, 0), (-1, -1), 0.7, NAVY),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
                    ("TOPPADDING", (0, 0), (-1, -1), 0),
                    ("LEFTPADDING", (0, 0), (-1, -1), 0),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ]
            ),
        ),
        Spacer(1, 3),
    ]


def bullets(items):
    return ListFlowable(
        [
            ListItem(
                Paragraph(item, styles["BodySmall"]),
                leftIndent=10,
            )
            for item in items
        ],
        bulletType="bullet",
        start="circle",
        leftIndent=12,
        bulletFontName="Helvetica",
        bulletFontSize=5.5,
        bulletColor=GOLD,
        spaceAfter=2,
    )


def role(title, organisation, dates, items=None, subtitle=None):
    left = [Paragraph(title, styles["Role"])]
    if organisation:
        left.append(Paragraph(organisation, styles["Organisation"]))
    if subtitle:
        left.append(Paragraph(subtitle, styles["BodySmallBold"]))
    rows = [[left, Paragraph(dates, styles["Date"])]]
    table = Table(
        rows,
        colWidths=[143 * mm, 35 * mm],
        style=TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
            ]
        ),
    )
    content = [table]
    if items:
        content.append(bullets(items))
    content.append(Spacer(1, 2))
    return KeepTogether(content)


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.4)
    canvas.line(doc.leftMargin, 14 * mm, A4[0] - doc.rightMargin, 14 * mm)
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 9 * mm, "Sahan S Liyanage - privacy-safe web CV")
    canvas.drawRightString(A4[0] - doc.rightMargin, 9 * mm, f"Page {doc.page}")
    canvas.restoreState()


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC_OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=16 * mm,
        leftMargin=16 * mm,
        topMargin=12 * mm,
        bottomMargin=18 * mm,
        title="Sahan S Liyanage - Curriculum Vitae",
        author="Sahan S Liyanage",
        subject="Academic curriculum vitae",
    )

    story = [
        Paragraph("Sahan S Liyanage", styles["Name"]),
        Paragraph(
            "Physics Graduate | Seeking Graduate Study Opportunities",
            styles["ProfessionalTitle"],
        ),
        Paragraph(
            '<link href="mailto:sahanslst@gmail.com">sahanslst@gmail.com</link> &nbsp; | &nbsp; '
            '<link href="https://www.linkedin.com/in/saanliyanage/">LinkedIn</link> &nbsp; | &nbsp; '
            '<link href="https://orcid.org/0000-0002-0849-6739">ORCID</link> &nbsp; | &nbsp; '
            '<link href="https://github.com/SaanDev">GitHub</link> &nbsp; | &nbsp; '
            '<link href="https://scholar.google.com/citations?user=bOW7eCAAAAAJ&amp;hl=en">Google Scholar</link>',
            styles["Contact"],
        ),
        Table(
            [[Paragraph(
                "Physics graduate from the University of Colombo seeking graduate study opportunities in physics. Experience in solar-radio research, optical spectroscopy, scientific software development, university teaching, and research mentoring.",
                styles["BodySmall"],
            )]],
            colWidths=[178 * mm],
            style=TableStyle(
                [
                    ("BACKGROUND", (0, 0), (-1, -1), PALE),
                    ("BOX", (0, 0), (-1, -1), 0.5, LINE),
                    ("LEFTPADDING", (0, 0), (-1, -1), 9),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 9),
                    ("TOPPADDING", (0, 0), (-1, -1), 7),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
                ]
            ),
        ),
    ]

    story += section("Education")
    story.append(
        role(
            "Bachelor of Science Honours in Physics - Second Class (Upper Division)",
            "University of Colombo, Sri Lanka",
            "Jan 2020 - May 2024",
            [
                "Cumulative GPA: 3.57/4.00 (126 credit hours).",
                "Relevant coursework included quantum mechanics, classical mechanics, electromagnetic fields, statistical physics, advanced optics, solid-state physics, nuclear and particle physics, computational physics, electronics, data acquisition, signal processing, and advanced physics laboratories.",
            ],
        )
    )
    story.append(
        role(
            "Secondary Education",
            "Central College, Anuradhapura, Sri Lanka",
            "2015 - 2017",
            [
                "GCE Advanced Level (2018), Physical Sciences: Combined Mathematics - B, Physics - B, Chemistry - B.",
            ],
        )
    )

    story += section("Professional Experience")
    story.append(
        role(
            "Research Assistant - Astronomy and Space Applications Division",
            "Arthur C. Clarke Institute for Modern Technologies, Katubedda, Moratuwa, Sri Lanka",
            "May 2026 - Present",
            [
                "Conduct solar-radio observations with the e-CALLISTO antenna system, including calibration, performance checks, and hardware maintenance.",
                "Carry out H-alpha solar observations and record, process, and interpret the resulting images.",
                "Perform astronomical spectroscopy with optical telescopes and reduce and interpret the resulting spectra.",
                "Develop software and automated pipelines for observational data acquisition, processing, and archiving.",
                "Support public workshops and observation sessions in space physics and astronomy.",
            ],
        )
    )

    story += section("Research Experience")
    story.append(
        role(
            "Undergraduate Research Project",
            "Department of Physics, University of Colombo",
            "May 2023 - Apr 2024",
            [
                "Analyzed 25 metric Type II solar-radio-burst datasets from the e-CALLISTO network.",
                "Developed a Python workflow for FITS reading, background-noise reduction, burst isolation, and dynamic-spectrum analysis.",
                "Derived shock-speed and source-height expressions using plasma-oscillation theory and the Newkirk coronal-density model.",
                "Estimated shock speeds of 343-1032 km/s and source heights of 1.317-1.724 solar radii.",
                "Supervisors: Dr. Janaka Adassuriya and Prof. K. P. S. C. Jayaratne.",
            ],
            "Determination of the Speed and Source Height of Coronal Shock Waves Using Type II Solar Radio Bursts",
        )
    )
    story.append(
        role(
            "Raman Spectroscopy Project",
            "Department of Physics, University of Colombo",
            "Nov 2022 - Mar 2023",
            [
                "Analyzed calcite, dolomite, apatite, quartz, feldspar, graphite, and mica using a 532 nm Raman system.",
                "Prepared samples and processed spectra in Python using calibration, baseline correction, smoothing, and plotting.",
                "Supervisor: Prof. H. H. E. Jayaweera.",
            ],
            "Raman Spectroscopic Analysis of Common Minerals in Sri Lanka",
        )
    )
    story.append(
        role(
            "Undergraduate Research Mentor",
            "Final-year project mentoring",
            "May 2025 - Apr 2026",
            None,
            "Estimating Coronal Magnetic Field Strength from Band Splitting in Type II Solar Radio Bursts",
        )
    )

    story.append(PageBreak())
    story += section("Projects and Scientific Software")
    story.append(
        role(
            "Space Weather Monitoring Dashboard",
            "Full-stack solar and geospace monitoring application",
            "2026 - Present",
            [
                "Combines e-CALLISTO spectra, GOES flux, SDO and SOHO imagery, Kp and Dst indices, and solar-wind and interplanetary magnetic-field data with alerts, a combined timeline, and archive search.",
                "ResNet-18 models achieved a test F1 score of 0.932 for burst detection and 0.966 validation accuracy with macro F1 0.889 for three-class burst typing.",
                '<link href="https://github.com/SaanDev/Solar_Monitoring_Dashboard">github.com/SaanDev/Solar_Monitoring_Dashboard</link>',
            ],
        )
    )
    story.append(
        role(
            "ecallistolib",
            "MIT-licensed Python library, version 1.3.1",
            "2025 - Present",
            [
                "Downloads, reads, processes, combines, and plots e-CALLISTO FITS dynamic spectra with metadata-preserving parsing, RFI mitigation, background subtraction, and publication-quality output.",
                "Supports Python 3.10 through 3.14, a command-line interface, optional accelerated dependencies, and a pytest test suite.",
                '<link href="https://github.com/SaanDev/ecallistolib">github.com/SaanDev/ecallistolib</link>',
            ],
        )
    )
    story.append(
        role(
            "e-CALLISTO FITS Analyzer",
            "Peer-reviewed, open-source Python desktop application",
            "2024 - Present",
            [
                "Cross-platform framework for retrieving, cleaning, combining, visualizing, and analyzing e-CALLISTO dynamic spectra at event level.",
                "Uses Python, PySide6, NumPy, SciPy, Astropy, SunPy, Matplotlib, PyQtGraph, netCDF4, OpenPyXL, Requests, and BeautifulSoup.",
                '<link href="https://github.com/SaanDev/e-Callisto_FITS_Analyzer">github.com/SaanDev/e-Callisto_FITS_Analyzer</link>',
                '<link href="https://ecallistoanalyzer.org/">ecallistoanalyzer.org</link>',
            ],
        )
    )
    story.append(
        role(
            "Spectral Analysis of Fluids to Determine the Effects of Temperature",
            "General Physics Laboratory II, University of Colombo",
            "2021",
            [
                "Used a home-made spectrometer and image-based absorbance measurements to estimate liquid temperature.",
                "Distilled water at 462 nm produced the best response: T = 73A + 230, with model errors of 4-12%.",
            ],
        )
    )

    story += section("Publications")
    story.append(
        Paragraph(
            'Liyanage, G. L. S. S., Adassuriya, J., Jayaratne, K. P. S. C., Monstein, C., &amp; Manoharan, P. K. (2026). e-CALLISTO FITS Analyzer: A software framework for CALLISTO solar radio data. <i>RAS Techniques and Instruments</i>, rzag056. <link href="https://doi.org/10.1093/rasti/rzag056">doi:10.1093/rasti/rzag056</link>',
            styles["Citation"],
        )
    )
    story.append(
        Paragraph(
            'Liyanage, G. L. S. S., Adassuriya, J., Jayaratne, K. P. S. C., &amp; Monstein, C. (2025). Determination of speed and source height of coronal shock waves using Type II solar radio bursts. <i>Proceedings of the Technical Sessions</i>, 41, 59-67. Institute of Physics, Sri Lanka. <link href="https://doi.org/10.48550/arXiv.2504.00622">doi:10.48550/arXiv.2504.00622</link>',
            styles["Citation"],
        )
    )

    story += section("Scientific Presentations")
    story.append(
        role(
            "Determination of Speed and Source Height of Coronal Shock Waves Using Type II Solar Radio Bursts",
            "41st Technical Sessions, Institute of Physics, Sri Lanka - University of Colombo",
            "22 Mar 2025",
            ["On-site oral presentation of undergraduate research findings."],
        )
    )
    story.append(
        role(
            "Solar Radio Bursts and Space Weather",
            "Physics Society, University of Colombo",
            "20 Nov 2024",
            ["On-site oral presentation for physics undergraduates."],
        )
    )
    story.append(
        role(
            "Introduction to Solar Physics",
            "Astronomical Society, Rajarata University of Sri Lanka",
            "18 Jul 2024",
            ["Online introductory lecture for university students."],
        )
    )

    story += section("Teaching Experience")
    story.append(role("Visiting Lecturer", "Department of Physics, University of Colombo", "Oct 2026 - Present", ["Visiting lecturer for the Certificate in Astronomy course."]))
    story.append(
        role(
            "Teaching Assistant",
            "University of Colombo School of Computing",
            "Aug 2025 - Mar 2026",
            [
                "Probability and Statistics for first-year Computer Science majors.",
                "Digital Signal Processing for second-year Computer Science majors.",
                "Cryptography and Information Security for second-year Computer Science majors.",
            ],
        )
    )
    story.append(
        role(
            "Teaching Assistant",
            "Department of Physics, University of Colombo",
            "May 2024 - May 2025",
            [
                "Instructor in charge of Computational Electrodynamics and Advanced Physics Laboratory I.",
                "Instructor for Analogue and Digital Electronic Principles Laboratory.",
                "Instructor for General Physics Laboratory I and II.",
            ],
        )
    )

    story += section("Academic Engagements")
    story.append(role("Instructor - COSPAR Capacity Building Workshop 2026", "National Research Institute of Astronomy and Geophysics, Cairo, Egypt", "31 Aug - 11 Sep 2026", ["Taught solar-radio data analysis using Python at the workshop on Earth-Affecting Solar Transients."]))
    story.append(
        role(
            "Participant - COSPAR Capacity Building Workshop 2024",
            "Samarkand State University, Samarkand, Uzbekistan",
            "19-30 Aug 2024",
            [
                "Practical training on coronal and interplanetary shocks using SOHO, SDO, STEREO, ground-based observations, SolarSoft, SunPy, AstroPy, and Python.",
            ],
        )
    )
    story.append(
        role(
            "Designing Physics Laboratory Experiments",
            "General Physics Laboratory II, Department of Physics, University of Colombo",
            "",
            [
                "Designed the first-year optical-spectrometer laboratory sheet, including theory, pre-lab questions, prisms, refractive index, diffraction gratings, and atomic emission spectra.",
            ],
        )
    )

    story += section("Skills and Techniques")
    story.append(
        Paragraph(
            "<b>Programming and scientific computing:</b> Python, C/C++, MATLAB, SunPy, AstroPy, NumPy, SciPy, Matplotlib, FITS handling, signal processing, and Qt GUI development.",
            styles["BodySmall"],
        )
    )
    story.append(
        Paragraph(
            "<b>Software and tools:</b> OriginPro, SolidWorks, Microsoft Office, Adobe Photoshop, LaTeX, Arduino, Linux, and web development.",
            styles["BodySmall"],
        )
    )
    story.append(
        Paragraph(
            "<b>Laboratory and instrumentation:</b> Raman and UV-Vis spectroscopy, astronomical spectroscopy, e-CALLISTO radio spectrometry, analogue and digital electronics, data acquisition, signal processing, and microcontroller programming.",
            styles["BodySmall"],
        )
    )
    story.append(
        Paragraph(
            "<b>Management and leadership:</b> Communication, project planning and execution, teaching, mentoring, and team coordination.",
            styles["BodySmall"],
        )
    )

    story += section("Awards and Honours")
    story.append(role("Dean's List", "University of Colombo", "Academic Year 2019/2020"))

    story += section("Leadership and Extracurricular Activities")
    story.append(role("Vice President", "Astronomical Society, University of Colombo", "2022 - 2023"))
    story.append(role("Coordinator", "Astronomical Society, University of Colombo", "2020 - 2022"))
    story.append(role("Music Director", "Music Society, University of Colombo", "2022 - 2023"))
    story.append(role("Marketing Director", "Leo Club, University of Colombo", "2020 - 2021"))

    story += section("Volunteering Experience")
    story.append(
        role(
            "Science Bus - Phases I, II, and III",
            "Physics Society, University of Colombo",
            "2021 - 2023",
            ["Contributed to an SPIE-funded travelling science project for school students in rural Sri Lanka."],
        )
    )
    story.append(
        role(
            "Star Quest - All-Island Astronomical Quiz",
            "Astronomical Society, University of Colombo",
            "2022 - 2025",
            ["Helped create questions, coordinate participants, run the event, and grade entries from school students across Sri Lanka."],
        )
    )
    story.append(
        role(
            "Naada Nu 23 - Annual Musical Concert",
            "Music Society, University of Colombo",
            "2023",
            ["Served as music director, contributed to event organization, and performed on stage."],
        )
    )

    # Keep section headings and their spacing with the following entry.
    for item in story:
        if isinstance(item, Spacer) or (isinstance(item, Table) and len(item._cellvalues[0]) == 1):
            item.keepWithNext = True
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    PUBLIC_OUTPUT.write_bytes(OUTPUT.read_bytes())
    print(OUTPUT)
    print(PUBLIC_OUTPUT)


if __name__ == "__main__":
    build()
