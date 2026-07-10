type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
  children?: React.ReactNode;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  dark = false,
  children,
}: PageIntroProps) {
  return (
    <header className={`page-intro ${dark ? "page-intro-dark" : ""}`}>
      <div className="container page-intro-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="page-intro-copy">
          <p>{description}</p>
          {children}
        </div>
      </div>
    </header>
  );
}
