export const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div style={{
      marginBottom: "2rem",
      display: "flex",
      gap: "1rem"
    }}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          flex: 1,
          padding: "0.95rem 1.1rem",
          borderRadius: "18px",
          border: "1px solid var(--border)",
          background: "rgba(255, 248, 246, 0.92)",
          color: "var(--text)",
          fontSize: "1rem",
          boxShadow: "0 10px 24px rgba(137, 75, 76, 0.06)"
        }}
      />
      <button style={{
        padding: "0.95rem 1.6rem",
        background: "var(--brand)",
        color: "white",
        border: "none",
        borderRadius: "18px",
        cursor: "pointer",
        fontWeight: "700",
        letterSpacing: "0.04em",
        boxShadow: "0 12px 26px rgba(137, 75, 76, 0.14)"
      }}>
        Search
      </button>
    </div>
  );
};
