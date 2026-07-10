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
        spaceBefore=8,
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
        fontSize=8.25,
        leading=11.5,
        textColor=CHARCOAL,
        spaceAfter=3,
    )
)
styles.add(
    ParagraphStyle(
        name="BodySmallBold",
        parent=styles["BodyText"],
        fontName="Helvetica-Bold",
        fontSize=8.25,
        leading=11.5,
        textColor=CHARCOAL,
        spaceAfter=3,
    )
)
styles.add(
    ParagraphStyle(
        name="Citation",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=8.1,
        leading=11.2,
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
        Spacer(1, 4),
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
        spaceAfter=4,
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
    content.append(Spacer(1, 3))
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
        topMargin=14 * mm,
        bottomMargin=20 * mm,
        title="Sahan S Liyanage - Curriculum Vitae",
        author="Sahan S Liyanage",
        subject="Academic curriculum vitae",
    )

    story = [
        Paragraph("Sahan S Liyanage", styles["Name"]),
        Paragraph(
            "Solar and Space Physics Researcher | Scientific Software Developer",
            styles["ProfessionalTitle"],
        ),
        Paragraph(
            '<link href="mailto:sahanslst@gmail.com">sahanslst@gmail.com</link> &nbsp; | &nbsp; '
            '<link href="https://linkedin.com/in/saanliyanage">LinkedIn</link> &nbsp; | &nbsp; '
            '<link href="https://www.researchgate.net/profile/Sahan-Liyanage">ResearchGate</link> &nbsp; | &nbsp; '
            '<link href="https://orcid.org/0000-0002-0849-6739">ORCID</link>',
            styles["Contact"],
        ),
        Table(
            [[Paragraph(
                "Physics researcher working across solar radio astronomy, coronal shock waves, space weather, observational solar physics, and scientific software. Current work connects automated observations, physical models, and reproducible computation.",
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
                "Cumulative GPA: 3.57/4.00 (126 credits; 252 ECTS). Physics GPA: 3.65/4.00 (66 credits; 132 ECTS).",
                "Relevant coursework included quantum mechanics, classical mechanics, electromagnetic fields, statistical physics, advanced optics, solid-state physics, nuclear and particle physics, computational physics, electronics, data acquisition, signal processing, and advanced physics laboratories.",
            ],
        )
    )

    story += section("Professional Experience")
    story.append(
        role(
            "Research Assistant (Contract)",
            "Arthur C. Clarke Institute for Modern Technologies, Sri Lanka",
            "May 2026 - Present",
            [
                "Project: Spectropolarimetric observations of band-split Type II solar radio bursts using a long-wave antenna.",
                "Contribute to an integrated CALLISTO and H-alpha solar-observation system.",
                "Work on automated acquisition, archiving, monitoring, and visualization of solar-radio and optical observations.",
                "Support a real-time monitoring dashboard for CALLISTO dynamic spectra and H-alpha imaging data.",
            ],
        )
    )

    story += section("Research Experience")
    story.append(
        role(
            "Research Assistant",
            "Astronomy and Space Science Unit, University of Colombo",
            "Mar 2025 - Present",
            [
                "Study metric Type II solar-radio-burst drift rates and links with CMEs, solar flares, solar energetic-particle events, and geomagnetic storms.",
                "Analyze e-CALLISTO dynamic spectra and develop a Python GUI for FITS reading, processing, merging, visualization, and physical analysis.",
                "Supervisor: Dr. Janaka Adassuriya.",
            ],
            "Analysis of Metric Type II Solar Radio Burst Drift Rates and Their Space-Weather Connections Using a GUI Tool for e-CALLISTO",
        )
    )
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

    story += section("Scientific Software")
    story.append(
        role(
            "e-CALLISTO FITS Analyzer",
            "Open-source, cross-platform scientific application",
            "Active",
            [
                "Python and PySide6 application for Windows, macOS, and Linux.",
                "Supports archive acquisition, time/frequency merging, background subtraction, polygon burst isolation, drift-rate fitting, shock-parameter estimation, GOES X-ray visualization, SOHO/LASCO CME browsing, and scientific export.",
                '<link href="https://github.com/SaanDev/e-Callisto_FITS_Analyzer">github.com/SaanDev/e-Callisto_FITS_Analyzer</link>',
            ],
        )
    )

    story += section("Publications")
    story.append(
        Paragraph(
            "Liyanage, G. L. S. S., Adassuriya, J., Jayaratne, K. P. S. C., &amp; Monstein, C. (2025). Determination of speed and source height of coronal shock waves using Type II solar radio bursts. <i>Proceedings of the Technical Sessions</i>, 41, 59-67. Institute of Physics, Sri Lanka.",
            styles["Citation"],
        )
    )
    story.append(
        Paragraph(
            "Liyanage, G. L. S. S., Adassuriya, J., Jayaratne, K. P. S. C., Monstein, C., &amp; Manoharan, P. K. (2026). e-CALLISTO FITS Analyzer: A Software Framework for CALLISTO Solar Radio Data. Manuscript submitted for publication.",
            styles["Citation"],
        )
    )

    story += section("Scientific Presentations")
    story.append(
        role(
            "Determination of Speed and Source Height of Coronal Shock Waves Using Type II Solar Radio Bursts",
            "41st Technical Sessions, Institute of Physics, Sri Lanka - University of Colombo",
            "22 Mar 2025",
            ["On-site oral presentation."],
        )
    )
    story.append(
        role(
            "Solar Radio Bursts and Space Weather",
            "Physics Society, University of Colombo",
            "20 Nov 2024",
            ["On-site invited presentation to physics students."],
        )
    )

    story += section("Teaching Experience")
    story.append(
        role(
            "Teaching Assistant",
            "University of Colombo School of Computing",
            "Aug 2025 - Mar 2026",
            [
                "Probability and Statistics for first-year computer-science majors.",
                "Digital Signal Processing for second-year students.",
                "Cryptography and Information Security for second-year students.",
            ],
        )
    )
    story.append(
        role(
            "Teaching Assistant",
            "Department of Physics, University of Colombo",
            "May 2024 - May 2025",
            [
                "Computational Electrodynamics and Advanced Physics Laboratory I.",
                "Analogue and Digital Electronic Principles Laboratory.",
                "General Physics Laboratory I and II.",
            ],
        )
    )

    story.append(
        KeepTogether(
            section("Workshop and Training")
            + [
                role(
                    "Participant - COSPAR Capacity Building Workshop 2024",
                    "Samarkand State University, Samarkand City, Uzbekistan",
                    "19-30 Aug 2024",
                    [
                        "Training on coronal and interplanetary shocks using SOHO, SDO, STEREO, and ground-based observations with SolarSoft, SunPy, AstroPy, and Python.",
                    ],
                )
            ]
        )
    )

    story += section("Technical Skills")
    story.append(
        Paragraph(
            "<b>Programming and computation:</b> Python, MATLAB, C/C++, machine learning, OriginPro, LaTeX, web development, Linux, Microsoft Office.",
            styles["BodySmall"],
        )
    )
    story.append(
        Paragraph(
            "<b>Scientific and technical:</b> FITS data, solar-radio dynamic spectra, Raman spectral processing, Arduino, Adobe Photoshop, data acquisition, signal processing, scientific visualization, and interactive desktop software.",
            styles["BodySmall"],
        )
    )

    story += section("Leadership")
    story.append(
        role(
            "Vice President",
            "Astronomical Society, University of Colombo",
            "2022-2023",
        )
    )
    story.append(
        role(
            "Coordinator",
            "Astronomical Society, University of Colombo",
            "2020-2022",
        )
    )

    story += section("References")
    story.append(
        Paragraph(
            "Professional references are available on request. Referee contact details are intentionally omitted from this public web edition.",
            styles["BodySmall"],
        )
    )

    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    PUBLIC_OUTPUT.write_bytes(OUTPUT.read_bytes())
    print(OUTPUT)
    print(PUBLIC_OUTPUT)


if __name__ == "__main__":
    build()
