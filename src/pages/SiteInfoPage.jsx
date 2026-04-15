import { Link } from "react-router-dom";
import { siteInfo } from "../data/siteInfo";

export const SiteInfoPage = ({ pageKey }) => {
  const page = siteInfo[pageKey];

  if (!page) {
    return (
      <div className="container" style={{ padding: "4rem 2rem" }}>
        <h1>Page not found</h1>
      </div>
    );
  }

  return (
    <div className="container" style={{ maxWidth: "980px", paddingTop: "3rem", paddingBottom: "4rem" }}>
      <div
        style={{
          background: "var(--panel)",
          border: "1px solid var(--border)",
          borderRadius: "24px",
          padding: "2.5rem",
          marginBottom: "2rem",
          boxShadow: "var(--shadow)",
        }}
      >
        <p style={{ margin: "0 0 0.75rem 0", color: "var(--brand)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "0.78rem" }}>
          {page.eyebrow}
        </p>
        <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", lineHeight: 1.1, margin: "0 0 1rem 0" }}>
          {page.title}
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "760px", margin: 0 }}>
          {page.intro}
        </p>
      </div>

      <div style={{ display: "grid", gap: "1rem" }}>
        {page.sections.map((section) => (
          <section
            key={section.heading}
            id={section.id}
            style={{
              background: "var(--panel)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              padding: "1.75rem 2rem",
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: "0.75rem", fontSize: "1.35rem" }}>{section.heading}</h2>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.7 }}>{section.body}</p>
          </section>
        ))}
      </div>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Link to="/category" className="btn" style={{ background: "var(--brand)", color: "white", borderColor: "var(--brand)" }}>
          Explore the Shop
        </Link>
        <Link to="/faq" className="btn">
          Read FAQ
        </Link>
      </div>
    </div>
  );
};
