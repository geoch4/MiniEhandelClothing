export const BrandSection = () => {
  return (
    <section className="px-8 py-24">
      <div className="container">
        <h2 className="section-title" style={{ color: "var(--text)", marginBottom: "1rem" }}>
          Why Dancers Choose Move
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--muted)",
            maxWidth: "680px",
            margin: "0 auto 2.5rem auto",
            fontSize: "1.05rem",
          }}
        >
          A softer palette, premium feel, and pieces selected to move beautifully through studio hours, rehearsals, and performance days.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
            marginTop: "2rem",
          }}
        >
          {[
            {
              title: "Free Shipping",
              copy: "On orders over 500 SEK across the curated Move selection.",
            },
            {
              title: "Premium Quality",
              copy: "Refined fabrics, flattering fits, and studio-ready comfort.",
            },
            {
              title: "Easy Returns",
              copy: "Thoughtful customer care with a simple return process.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                textAlign: "center",
                padding: "2rem 1.5rem",
                background: "rgba(255,255,255,0.45)",
                border: "1px solid var(--border)",
                borderRadius: "22px",
                boxShadow: "var(--shadow)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  color: "var(--brand)",
                  marginBottom: "0.75rem",
                  fontFamily: "Georgia, serif",
                  letterSpacing: "0.02em",
                }}
              >
                {item.title}
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.7 }}>{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
