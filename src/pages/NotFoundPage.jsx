import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="container" style={{ textAlign: "center", padding: "6rem 2rem" }}>
      <div
        style={{
          background: "rgba(255,248,246,0.82)",
          border: "1px solid var(--border)",
          borderRadius: "28px",
          padding: "3rem",
          boxShadow: "var(--shadow)",
        }}
      >
        <h1 style={{ fontSize: "4rem", margin: "0 0 1rem 0", color: "var(--brand)" }}>404</h1>
        <h2 style={{ fontSize: "2rem", margin: "0 0 1rem 0", color: "var(--text)", fontFamily: "Georgia, serif" }}>
          Page Not Found
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: "2rem", fontSize: "1.1rem" }}>
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/" className="btn" style={{ background: "var(--brand)", color: "white", borderColor: "var(--brand)" }}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
};
