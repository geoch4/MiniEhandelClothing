import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";

export const ProductCard = ({ product }) => {
  const discountPercentage =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
      <div
        className="product-card"
        style={{
          background: "linear-gradient(180deg, rgba(255,248,246,0.98) 0%, rgba(250,239,235,0.98) 100%)",
          boxShadow: "0 16px 34px rgba(137, 75, 76, 0.08)",
        }}
      >
        <div className="product-image">
          {product.isOutlet && (
            <span
              style={{
                position: "absolute",
                top: "0.75rem",
                left: "0.75rem",
                zIndex: 1,
                background: "#894b4c",
                color: "white",
                padding: "0.35rem 0.6rem",
                borderRadius: "999px",
                fontSize: "0.7rem",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase"
              }}
            >
              Outlet
            </span>
          )}
          {discountPercentage && (
            <span
              style={{
                position: "absolute",
                top: "0.75rem",
                right: "0.75rem",
                zIndex: 1,
                background: "rgba(255,248,246,0.95)",
                color: "#894b4c",
                padding: "0.35rem 0.6rem",
                borderRadius: "999px",
                fontSize: "0.7rem",
                fontWeight: "700",
                letterSpacing: "0.04em"
              }}
            >
              -{discountPercentage}%
            </span>
          )}
          {product.image ? (
            <img src={product.image} alt={product.name} />
          ) : (
            <span style={{ color: "var(--muted)" }}>No Image</span>
          )}
        </div>
        <div className="product-info">
          <p
            style={{
              margin: "0 0 0.5rem 0",
              color: "var(--brand)",
              fontSize: "0.72rem",
              fontWeight: "700",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            {product.audience}
          </p>
          <h3 style={{ color: "var(--text)", fontFamily: "Georgia, serif", fontSize: "1.2rem" }}>{product.name}</h3>
          <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{product.description}</p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
            <p className="price" style={{ margin: 0 }}>
              {formatPrice(product.price)}
            </p>
            {product.originalPrice && (
              <p
                style={{
                  margin: 0,
                  color: "var(--muted)",
                  textDecoration: "line-through",
                  fontSize: "0.95rem"
                }}
              >
                {formatPrice(product.originalPrice)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
