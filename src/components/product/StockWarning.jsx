export const StockWarning = ({ product }) => {
  if (!product || product.stock === undefined) return null;

  const isLowStock = product.stock > 0 && product.stock <= 5;
  const isOutOfStock = product.stock === 0;

  if (isOutOfStock) {
    return (
      <div
        style={{
          background: "rgba(191, 129, 129, 0.16)",
          border: "1px solid rgba(137, 75, 76, 0.22)",
          borderRadius: "18px",
          padding: "1rem 1.1rem",
          marginBottom: "1.5rem",
          color: "#7a3d40",
          fontWeight: "700",
        }}
      >
        This product is currently out of stock.
      </div>
    );
  }

  if (isLowStock) {
    return (
      <div
        style={{
          background: "rgba(214, 177, 175, 0.26)",
          border: "1px solid rgba(137, 75, 76, 0.18)",
          borderRadius: "18px",
          padding: "1rem 1.1rem",
          marginBottom: "1.5rem",
          color: "#7a4f31",
          fontWeight: "700",
        }}
      >
        Only {product.stock} left in stock. A favorite is almost gone.
      </div>
    );
  }

  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.52)",
        border: "1px solid var(--border)",
        borderRadius: "18px",
        padding: "1rem 1.1rem",
        marginBottom: "1.5rem",
        color: "var(--text)",
        fontWeight: "700",
      }}
    >
      {product.stock} pieces available for immediate order.
    </div>
  );
};
