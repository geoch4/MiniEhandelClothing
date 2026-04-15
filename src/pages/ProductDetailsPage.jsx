import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ToastContext } from "../context/ToastContext";
import { ErrorContext, ERROR_MESSAGES } from "../context/ErrorContext";
import { products } from "../data/products";
import { productQuestions } from "../data/productQuestions";
import { productReviews } from "../data/productReviews";
import { ProductQA } from "../components/product/ProductQA";
import { ReviewSystem } from "../components/product/ReviewSystem";
import { StockWarning } from "../components/product/StockWarning";
import { formatPrice } from "../utils/formatPrice";

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { addToast } = useContext(ToastContext);
  const { addError } = useContext(ErrorContext);
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="container"><p>Product not found</p></div>;
  }

  const handleAddToCart = () => {
    if (!product.stock || product.stock === 0) {
      addError("OUT_OF_STOCK", ERROR_MESSAGES.OUT_OF_STOCK.message, ERROR_MESSAGES.OUT_OF_STOCK.details);
      return;
    }

    if (quantity < 1) {
      addError("INVALID_QUANTITY", ERROR_MESSAGES.INVALID_QUANTITY.message, ERROR_MESSAGES.INVALID_QUANTITY.details);
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    addToast(`Added ${quantity} ${product.name}${quantity > 1 ? "s" : ""} to cart!`, "success");
    setQuantity(1);
  };

  const discountPercentage =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  return (
    <div className="product-details-page">
      <div className="container" style={{ maxWidth: "1100px", margin: "2.5rem auto 4rem auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(320px, 1fr) minmax(320px, 1fr)",
            gap: "2rem",
            marginBottom: "3rem",
            alignItems: "start",
          }}
        >
          <div
            style={{
              background: "linear-gradient(180deg, rgba(255,248,246,0.96) 0%, rgba(243,227,222,0.94) 100%)",
              borderRadius: "28px",
              overflow: "hidden",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow)",
            }}
          >
            <div style={{ position: "relative", minHeight: "520px", background: "#ead7d1" }}>
              {product.isOutlet && (
                <span
                  style={{
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                    zIndex: 1,
                    background: "var(--brand)",
                    color: "white",
                    padding: "0.45rem 0.8rem",
                    borderRadius: "999px",
                    fontSize: "0.72rem",
                    fontWeight: "700",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Outlet
                </span>
              )}
              {discountPercentage && (
                <span
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    zIndex: 1,
                    background: "rgba(255,248,246,0.94)",
                    color: "var(--brand)",
                    padding: "0.45rem 0.8rem",
                    borderRadius: "999px",
                    fontSize: "0.72rem",
                    fontWeight: "700",
                    letterSpacing: "0.05em",
                  }}
                >
                  -{discountPercentage}%
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "100%", minHeight: "520px", objectFit: "cover" }}
              />
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,248,246,0.78)",
              borderRadius: "28px",
              padding: "2rem",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow)",
            }}
          >
            <p style={{ margin: "0 0 0.75rem 0", color: "var(--brand)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "0.75rem" }}>
              Move Selection
            </p>
            <h1 style={{ margin: "0 0 1rem 0", color: "var(--text)", fontFamily: "Georgia, serif", fontSize: "clamp(2.1rem, 4vw, 3.4rem)", lineHeight: 1.08 }}>
              {product.name}
            </h1>
            <p style={{ margin: "0 0 1.5rem 0", color: "var(--muted)", fontSize: "1.02rem", lineHeight: 1.75 }}>
              {product.description}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              <p style={{ margin: 0, color: "var(--brand)", fontSize: "1.9rem", fontWeight: 700 }}>
                {formatPrice(product.price)}
              </p>
              {product.originalPrice && (
                <p style={{ margin: 0, color: "var(--muted)", textDecoration: "line-through", fontSize: "1rem" }}>
                  {formatPrice(product.originalPrice)}
                </p>
              )}
            </div>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginBottom: "1.5rem",
                flexWrap: "wrap",
                color: "var(--muted)",
                fontSize: "0.95rem",
              }}
            >
              <span>Rating {product.rating}/5</span>
              <span>Category {product.category}</span>
            </div>

            <StockWarning product={product} />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1.5rem",
                padding: "1rem 1.1rem",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.52)",
                border: "1px solid var(--border)",
              }}
            >
              <label style={{ color: "var(--text)", fontWeight: 700 }}>Quantity</label>
              <input
                type="number"
                min="1"
                max={product.stock || 1}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                style={{
                  padding: "0.7rem 0.9rem",
                  borderRadius: "14px",
                  border: "1px solid var(--border)",
                  background: "var(--panel)",
                  color: "var(--text)",
                  width: "90px",
                  fontSize: "1rem",
                }}
              />
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.stock || product.stock === 0}
              style={{
                width: "100%",
                padding: "1rem 1.2rem",
                fontSize: "1rem",
                background: product.stock && product.stock > 0 ? "linear-gradient(135deg, var(--brand), #6f3637)" : "#c1a8a8",
                color: "white",
                border: "none",
                borderRadius: "18px",
                cursor: product.stock && product.stock > 0 ? "pointer" : "not-allowed",
                fontWeight: "700",
                letterSpacing: "0.05em",
                boxShadow: product.stock && product.stock > 0 ? "0 14px 28px rgba(137, 75, 76, 0.2)" : "none",
              }}
            >
              {product.stock && product.stock > 0 ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>

        <ReviewSystem productId={product.id} reviews={productReviews[product.id] || []} />
        <ProductQA productId={product.id} questions={productQuestions[product.id] || []} />
      </div>
    </div>
  );
};
