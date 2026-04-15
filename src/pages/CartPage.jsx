import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";

export const CartPage = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (cart.length === 0) {
    return (
      <div className="container" style={{ textAlign: "center", padding: "4rem 2rem" }}>
        <div
          style={{
            background: "rgba(255,248,246,0.82)",
            border: "1px solid var(--border)",
            borderRadius: "28px",
            padding: "3rem",
            boxShadow: "var(--shadow)",
          }}
        >
          <h1 style={{ marginTop: 0, color: "var(--text)", fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Shopping Cart
          </h1>
          <p style={{ color: "var(--muted)", marginBottom: "2rem", fontSize: "1.05rem" }}>Your cart is empty</p>
          <Link to="/" className="btn" style={{ background: "var(--brand)", color: "white", borderColor: "var(--brand)" }}>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ maxWidth: "1040px", margin: "2.5rem auto 4rem auto" }}>
      <div
        style={{
          background: "linear-gradient(180deg, rgba(255,248,246,0.94) 0%, rgba(243,227,222,0.9) 100%)",
          border: "1px solid var(--border)",
          borderRadius: "26px",
          padding: "2rem",
          marginBottom: "2rem",
          boxShadow: "var(--shadow)",
        }}
      >
        <h1 style={{ margin: "0 0 0.5rem 0", color: "var(--text)", fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
          Shopping Cart
        </h1>
        <p style={{ margin: 0, color: "var(--muted)" }}>{cart.length} item{cart.length > 1 ? "s" : ""} ready for checkout</p>
      </div>

      <div style={{ marginBottom: "2rem", display: "grid", gap: "1rem" }}>
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "grid",
              gridTemplateColumns: "110px 1fr 110px 120px 90px",
              gap: "1rem",
              alignItems: "center",
              padding: "1.5rem",
              background: "rgba(255,248,246,0.78)",
              border: "1px solid var(--border)",
              borderRadius: "22px",
              boxShadow: "0 12px 24px rgba(137, 75, 76, 0.05)",
            }}
          >
            <img src={item.image} alt={item.name} style={{ borderRadius: "16px", width: "100%", height: "110px", objectFit: "cover" }} />
            <div>
              <h3 style={{ margin: "0 0 0.5rem 0", color: "var(--text)", fontFamily: "Georgia, serif", fontSize: "1.25rem" }}>{item.name}</h3>
              <p style={{ color: "var(--muted)", margin: 0 }}>{formatPrice(item.price)} each</p>
            </div>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
              style={{
                padding: "0.75rem",
                borderRadius: "14px",
                border: "1px solid var(--border)",
                background: "var(--panel)",
                color: "var(--text)",
                textAlign: "center",
              }}
            />
            <div style={{ textAlign: "right", fontWeight: "700", color: "var(--text)" }}>
              {formatPrice(item.price * item.quantity)}
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                padding: "0.75rem 1rem",
                background: "rgba(137,75,76,0.12)",
                color: "var(--brand)",
                border: "1px solid rgba(137,75,76,0.12)",
                borderRadius: "14px",
                cursor: "pointer",
                fontWeight: "700",
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          background: "rgba(255,248,246,0.82)",
          border: "1px solid var(--border)",
          borderRadius: "24px",
          padding: "2rem",
          textAlign: "right",
          boxShadow: "var(--shadow)",
        }}
      >
        <h2 style={{ fontSize: "1.9rem", margin: "0 0 1rem 0", color: "var(--text)", fontFamily: "Georgia, serif" }}>
          Total: <span style={{ color: "var(--brand)" }}>{formatPrice(getTotalPrice())}</span>
        </h2>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end", flexWrap: "wrap" }}>
          <button onClick={clearCart} className="btn">
            Clear Cart
          </button>
          <button
            onClick={handleCheckout}
            style={{
              padding: "0.9rem 2rem",
              fontSize: "1rem",
              background: "var(--brand)",
              color: "white",
              border: "none",
              borderRadius: "18px",
              cursor: "pointer",
              fontWeight: "700",
              boxShadow: "0 14px 28px rgba(137,75,76,0.16)",
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      <Link to="/" className="btn" style={{ display: "inline-block", marginTop: "2rem" }}>
        ← Continue Shopping
      </Link>
    </div>
  );
};
