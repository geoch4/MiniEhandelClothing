import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ToastContext } from "../context/ToastContext";
import { Loading } from "../components/ui/Loading";
import { formatPrice } from "../utils/formatPrice";

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const { addToast } = useContext(ToastContext);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: ""
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  if (cart.length === 0) {
    return (
      <div className="container" style={{ textAlign: "center", padding: "4rem 2rem" }}>
        <div style={{ background: "rgba(255,248,246,0.82)", border: "1px solid var(--border)", borderRadius: "28px", padding: "3rem", boxShadow: "var(--shadow)" }}>
          <h1 style={{ marginTop: 0, color: "var(--text)", fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>Checkout</h1>
          <p style={{ color: "var(--muted)", marginBottom: "2rem" }}>Your cart is empty</p>
          <Link to="/category" className="btn" style={{ background: "var(--brand)", color: "white", borderColor: "var(--brand)" }}>Continue Shopping</Link>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.zip) newErrors.zip = "ZIP code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      addToast("Please fill in all required fields", "error");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const orderId = Math.random().toString(36).substr(2, 9).toUpperCase();
      clearCart();
      addToast("Order placed successfully!", "success");
      navigate(`/order/${orderId}`);
      setLoading(false);
    }, 2000);
  };

  const inputStyle = (hasError = false) => ({
    width: "100%",
    padding: "0.85rem",
    borderRadius: "16px",
    border: hasError ? "2px solid var(--brand)" : "1px solid var(--border)",
    background: "var(--panel)",
    color: "var(--text)"
  });

  return (
    <div className="container" style={{ maxWidth: "1040px", margin: "2.5rem auto 4rem auto" }}>
      <div style={{ background: "linear-gradient(180deg, rgba(255,248,246,0.94) 0%, rgba(243,227,222,0.9) 100%)", border: "1px solid var(--border)", borderRadius: "26px", padding: "2rem", marginBottom: "2rem", boxShadow: "var(--shadow)" }}>
        <h1 style={{ margin: "0 0 0.5rem 0", color: "var(--text)", fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>Checkout</h1>
        <p style={{ margin: 0, color: "var(--muted)" }}>Complete your details and we will prepare your Move order.</p>
      </div>

      <div className="checkout-layout" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "2rem" }}>
        <form onSubmit={handleSubmit}>
          <div style={{ background: "rgba(255,248,246,0.82)", padding: "2rem", borderRadius: "24px", marginBottom: "2rem", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <h2 style={{ fontSize: "1.4rem", margin: "0 0 1.5rem 0", color: "var(--text)", fontFamily: "Georgia, serif" }}>Shipping Information</h2>

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700" }}>Full Name *</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} style={inputStyle(!!errors.fullName)} />
              {errors.fullName && <p style={{ color: "var(--brand)", margin: "0.25rem 0 0 0", fontSize: "0.9rem" }}>{errors.fullName}</p>}
            </div>

            <div className="checkout-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700" }}>Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle(!!errors.email)} />
                {errors.email && <p style={{ color: "var(--brand)", margin: "0.25rem 0 0 0", fontSize: "0.9rem" }}>{errors.email}</p>}
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700" }}>Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle()} />
              </div>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700" }}>Address *</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} style={inputStyle(!!errors.address)} />
              {errors.address && <p style={{ color: "var(--brand)", margin: "0.25rem 0 0 0", fontSize: "0.9rem" }}>{errors.address}</p>}
            </div>

            <div className="checkout-form-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700" }}>City *</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} style={inputStyle(!!errors.city)} />
                {errors.city && <p style={{ color: "var(--brand)", margin: "0.25rem 0 0 0", fontSize: "0.9rem" }}>{errors.city}</p>}
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700" }}>ZIP *</label>
                <input type="text" name="zip" value={formData.zip} onChange={handleChange} style={inputStyle(!!errors.zip)} />
                {errors.zip && <p style={{ color: "var(--brand)", margin: "0.25rem 0 0 0", fontSize: "0.9rem" }}>{errors.zip}</p>}
              </div>
            </div>
          </div>

          <div style={{ background: "rgba(255,248,246,0.82)", padding: "2rem", borderRadius: "24px", marginBottom: "2rem", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <h2 style={{ fontSize: "1.4rem", margin: "0 0 1.5rem 0", color: "var(--text)", fontFamily: "Georgia, serif" }}>Payment</h2>

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700" }}>Card Number</label>
              <input type="text" placeholder="1234 5678 9012 3456" value={formData.cardNumber} onChange={(e) => setFormData((prev) => ({ ...prev, cardNumber: e.target.value }))} style={inputStyle()} />
            </div>

            <div className="checkout-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <input type="text" placeholder="MM/YY" value={formData.cardExpiry} onChange={(e) => setFormData((prev) => ({ ...prev, cardExpiry: e.target.value }))} style={inputStyle()} />
              <input type="text" placeholder="CVC" value={formData.cardCVC} onChange={(e) => setFormData((prev) => ({ ...prev, cardCVC: e.target.value }))} style={inputStyle()} />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "1rem",
              fontSize: "1.05rem",
              background: loading ? "var(--muted)" : "var(--brand)",
              color: "white",
              border: "none",
              borderRadius: "18px",
              cursor: loading ? "not-allowed" : "pointer",
              fontWeight: "700",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.6rem",
              boxShadow: loading ? "none" : "0 14px 28px rgba(137,75,76,0.16)",
            }}
          >
            {loading && <Loading />}
            {loading ? "Processing..." : `Place Order (${formatPrice(getTotalPrice())})`}
          </button>
        </form>

        <div className="checkout-summary" style={{ position: "sticky", top: "100px", height: "fit-content" }}>
          <div style={{ background: "rgba(255,248,246,0.82)", padding: "2rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <h3 style={{ marginTop: 0, color: "var(--text)", fontFamily: "Georgia, serif", fontSize: "1.5rem" }}>Order Summary</h3>
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem", marginTop: "1rem" }}>
              {cart.map((item) => (
                <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.85rem", gap: "1rem" }}>
                  <span style={{ color: "var(--text)" }}>{item.name} x{item.quantity}</span>
                  <span style={{ color: "var(--text)", whiteSpace: "nowrap" }}>{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem", marginTop: "1rem", display: "flex", justifyContent: "space-between", fontWeight: "700", fontSize: "1.2rem", color: "var(--brand)" }}>
                <span>Total</span>
                <span>{formatPrice(getTotalPrice())}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
