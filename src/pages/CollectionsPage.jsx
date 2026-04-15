import { Link } from "react-router-dom";

const collections = [
  {
    title: "Studio Essentials",
    description:
      "Clean, reliable staples for weekly training: supportive tops, flexible leggings, and soft warm-up layers that work across multiple dance styles.",
  },
  {
    title: "Performance Edit",
    description:
      "Pieces selected for a sharper silhouette and stage-ready confidence, with breathable fabrics and elegant structure for long rehearsals and show days.",
  },
  {
    title: "Warm-Up Layers",
    description:
      "Comfort-first hoodies, jackets, and transitional pieces designed for early mornings, cooldowns, and time between classes.",
  },
  {
    title: "Outlet Selection",
    description:
      "A rotating curation of reduced-price favorites and limited sizes, ideal for dancers who want signature Move style at a lower price point.",
  },
];

export const CollectionsPage = () => {
  return (
    <div className="container" style={{ maxWidth: "1050px", paddingTop: "3rem", paddingBottom: "4rem" }}>
      <div
        style={{
          background: "var(--panel)",
          border: "1px solid var(--border)",
          borderRadius: "24px",
          padding: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        <p style={{ margin: "0 0 0.75rem 0", color: "var(--brand)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "0.78rem" }}>
          Collections
        </p>
        <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", lineHeight: 1.1, margin: "0 0 1rem 0" }}>
          Curated edits for studio days, performance prep, and everyday movement.
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "760px", margin: 0 }}>
          Explore the way we organize Move: by feeling, use, and the rhythm of a dancer&apos;s week.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
        {collections.map((collection) => (
          <section
            key={collection.title}
            style={{
              background: "var(--panel)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              padding: "1.75rem",
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: "0.75rem", fontSize: "1.35rem" }}>{collection.title}</h2>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.7 }}>{collection.description}</p>
          </section>
        ))}
      </div>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Link to="/category" className="btn" style={{ background: "var(--brand)", color: "white", borderColor: "var(--brand)" }}>
          Shop All Products
        </Link>
        <Link to="/category?view=outlet" className="btn">
          Visit Outlet
        </Link>
      </div>
    </div>
  );
};
