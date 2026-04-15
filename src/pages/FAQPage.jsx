import { useState } from "react";
import { FAQItem } from "../components/faq/FAQItem";
import { faqItems, faqCategories } from "../data/faq";

export const FAQPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const displayItems = selectedCategory
    ? faqItems.filter(item => item.category === selectedCategory)
    : faqItems;

  return (
    <div className="container">
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", textAlign: "center" }}>
        Frequently Asked Questions
      </h1>
      <p style={{ textAlign: "center", color: "var(--muted)", marginBottom: "2rem", fontSize: "1.1rem" }}>
        Find answers to common questions about Move
      </p>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
        <button
          onClick={() => setSelectedCategory(null)}
          className="btn"
          style={{
            background: selectedCategory === null ? "var(--brand)" : "var(--panel)",
            border: `2px solid ${selectedCategory === null ? "var(--brand)" : "var(--border)"}`
          }}
        >
          All
        </button>
        {faqCategories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="btn"
            style={{
              background: selectedCategory === category ? "var(--brand)" : "var(--panel)",
              border: `2px solid ${selectedCategory === category ? "var(--brand)" : "var(--border)"}`
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {displayItems.length === 0 ? (
          <p style={{ textAlign: "center", color: "var(--muted)" }}>
            No questions in this category
          </p>
        ) : (
          displayItems.map(item => (
            <FAQItem key={item.id} item={item} />
          ))
        )}
      </div>

      <div
        style={{
          marginTop: "3rem",
          padding: "2rem",
          background: "var(--panel)",
          borderRadius: "var(--radius)",
          border: "1px solid var(--border)",
          textAlign: "center"
        }}
      >
        <h3 style={{ marginTop: 0 }}>Still need help?</h3>
        <p style={{ color: "var(--muted)" }}>
          Contact us at <strong>support@move.se</strong> or call <strong>08-123 45 67</strong>
        </p>
        <button className="btn" style={{ background: "var(--brand)" }}>
          Contact Support
        </button>
      </div>
    </div>
  );
};
