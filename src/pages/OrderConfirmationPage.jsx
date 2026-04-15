import { useParams, Link } from "react-router-dom";

export const OrderConfirmationPage = () => {
  const { orderid } = useParams();

  return (
    <div className="container" style={{ textAlign: "center", padding: "4rem 2rem" }}>
      <div
        style={{
          background: "linear-gradient(180deg, rgba(255,248,246,0.94) 0%, rgba(243,227,222,0.9) 100%)",
          padding: "3rem",
          borderRadius: "28px",
          maxWidth: "700px",
          margin: "0 auto",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow)",
        }}
      >
        <div style={{ fontSize: "4rem", color: "var(--brand)", marginBottom: "1rem" }}>✓</div>

        <h1 style={{ fontSize: "2.3rem", margin: "0 0 1rem 0", color: "var(--text)", fontFamily: "Georgia, serif" }}>
          Order Confirmed
        </h1>

        <p style={{ color: "var(--muted)", marginBottom: "2rem", fontSize: "1.08rem" }}>
          Thank you for your purchase. Your Move order has been placed successfully.
        </p>

        <div
          style={{
            background: "rgba(255,255,255,0.52)",
            padding: "2rem",
            borderRadius: "22px",
            marginBottom: "2rem",
            textAlign: "left",
            border: "1px solid var(--border)",
          }}
        >
          <p style={{ margin: "0 0 0.6rem 0" }}>
            <strong>Order ID:</strong> <span style={{ color: "var(--brand)" }}>{orderid}</span>
          </p>
          <p style={{ margin: "0 0 0.6rem 0" }}>
            <strong>Status:</strong> <span style={{ color: "var(--brand)" }}>Processing</span>
          </p>
          <p style={{ margin: "0" }}>
            <strong>Expected Delivery:</strong> 3-5 business days
          </p>
        </div>

        <p style={{ color: "var(--muted)", marginBottom: "2rem" }}>
          A confirmation email has been sent to your email address.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/category" className="btn">
            Continue Shopping
          </Link>
          <Link to="/" className="btn" style={{ background: "var(--brand)", color: "white", borderColor: "var(--brand)" }}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
