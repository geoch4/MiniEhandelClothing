import { useState } from "react";

export const FAQItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item" style={{ marginBottom: "1rem" }}>
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "1.5rem",
          background: "var(--panel)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "600",
          color: "var(--text)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "all 0.3s ease"
        }}
      >
        <span>{item.question}</span>
        <span style={{ fontSize: "1.5rem" }}>
          {isOpen ? "−" : "+"}
        </span>
      </button>
      
      {isOpen && (
        <div
          className="faq-answer"
          style={{
            padding: "1.5rem",
            background: "rgba(255, 255, 255, 0.05)",
            borderLeft: "4px solid var(--brand)",
            marginTop: "0.5rem",
            borderRadius: "4px",
            lineHeight: "1.8"
          }}
        >
          <p style={{ margin: 0 }}>{item.answer}</p>
        </div>
      )}
    </div>
  );
};
