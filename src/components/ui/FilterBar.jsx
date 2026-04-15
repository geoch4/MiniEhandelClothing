export const FilterBar = ({
  selectedAudience,
  selectedCategory,
  selectedSort,
  onAudienceChange,
  onCategoryChange,
  onSortChange,
  categoryOptions = ["All"],
}) => {
  const audiences = ["All", "Women", "Men", "Kids"];
  const sortOptions = [
    { value: "name", label: "Name" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Top Rated" }
  ];

  return (
    <div style={{
      marginBottom: "2rem",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "1rem",
      background: "rgba(255, 248, 246, 0.72)",
      border: "1px solid var(--border)",
      borderRadius: "22px",
      padding: "1rem",
      boxShadow: "0 12px 28px rgba(137, 75, 76, 0.06)"
    }}>
      <div>
        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700", color: "var(--text)", letterSpacing: "0.02em" }}>
          Audience
        </label>
        <select
          value={selectedAudience}
          onChange={(e) => onAudienceChange(e.target.value)}
          style={{
            width: "100%",
            padding: "0.85rem",
            borderRadius: "16px",
            border: "1px solid var(--border)",
            background: "rgba(255, 255, 255, 0.82)",
            color: "var(--text)",
            cursor: "pointer"
          }}
        >
          {audiences.map((audience) => (
            <option key={audience} value={audience}>
              {audience}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700", color: "var(--text)", letterSpacing: "0.02em" }}>
          Category
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          style={{
            width: "100%",
            padding: "0.85rem",
            borderRadius: "16px",
            border: "1px solid var(--border)",
            background: "rgba(255, 255, 255, 0.82)",
            color: "var(--text)",
            cursor: "pointer"
          }}
        >
          {categoryOptions.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700", color: "var(--text)", letterSpacing: "0.02em" }}>
          Sort By
        </label>
        <select
          value={selectedSort}
          onChange={(e) => onSortChange(e.target.value)}
          style={{
            width: "100%",
            padding: "0.85rem",
            borderRadius: "16px",
            border: "1px solid var(--border)",
            background: "rgba(255, 255, 255, 0.82)",
            color: "var(--text)",
            cursor: "pointer"
          }}
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
