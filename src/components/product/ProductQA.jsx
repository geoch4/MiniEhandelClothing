import { useState } from "react";
import { useContext } from "react";
import { ToastContext } from "../../context/ToastContext";

export const ProductQA = ({ productId, questions = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ author: "", question: "" });
  const [allQuestions, setAllQuestions] = useState(questions);
  const { addToast } = useContext(ToastContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.author.trim() || !formData.question.trim()) {
      addToast("Please fill in all fields", "error");
      return;
    }

    const newQuestion = {
      id: allQuestions.length + 1,
      author: formData.author,
      question: formData.question,
      helpful: 0,
      date: new Date().toISOString().split("T")[0]
    };

    setAllQuestions([newQuestion, ...allQuestions]);
    setFormData({ author: "", question: "" });
    addToast("Thanks for your question!", "success");
  };

  return (
    <div className="product-qa" style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
      <div
        style={{
          background: "rgba(255,248,246,0.76)",
          border: "1px solid var(--border)",
          borderRadius: "24px",
          padding: "2rem",
          marginBottom: "1.5rem",
        }}
      >
        <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "var(--text)", fontFamily: "Georgia, serif" }}>
          Questions & Answers ({allQuestions.length})
        </h3>

        <button onClick={() => setIsOpen(!isOpen)} className="btn" style={{ width: "100%", maxWidth: "300px" }}>
          {isOpen ? "Close Form" : "Ask a Question"}
        </button>
      </div>

      {isOpen && (
        <form
          onSubmit={handleSubmit}
          style={{
            background: "rgba(255,248,246,0.84)",
            padding: "1.75rem",
            borderRadius: "24px",
            marginBottom: "2rem",
            border: "1px solid var(--border)"
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700", color: "var(--text)" }}>Your Name</label>
            <input type="text" name="author" value={formData.author} onChange={handleInputChange} placeholder="Your name" style={{ width: "100%", padding: "0.85rem", background: "var(--panel)", border: "1px solid var(--border)", borderRadius: "16px", color: "var(--text)", fontSize: "1rem" }} />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700", color: "var(--text)" }}>Your Question</label>
            <textarea name="question" value={formData.question} onChange={handleInputChange} placeholder="Ask a question about this product..." rows="4" style={{ width: "100%", padding: "0.85rem", background: "var(--panel)", border: "1px solid var(--border)", borderRadius: "16px", color: "var(--text)", fontSize: "1rem", fontFamily: "inherit" }} />
          </div>

          <button type="submit" className="btn" style={{ background: "var(--brand)" }}>
            Submit Question
          </button>
        </form>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {allQuestions.length === 0 ? (
          <p style={{ color: "var(--muted)", fontStyle: "italic" }}>No questions yet. Be the first to ask one.</p>
        ) : (
          allQuestions.map((qa) => (
            <div key={qa.id} style={{ background: "rgba(255,248,246,0.72)", padding: "1.5rem", borderRadius: "22px", border: "1px solid var(--border)" }}>
              <div style={{ marginBottom: "1rem" }}>
                <h4 style={{ margin: "0 0 0.5rem 0", color: "var(--brand)", fontFamily: "Georgia, serif", fontSize: "1.15rem" }}>
                  Q: {qa.question}
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--muted)", margin: 0 }}>
                  by <strong>{qa.author}</strong> • {qa.date}
                </p>
              </div>

              {qa.answer ? (
                <div style={{ paddingLeft: "1.5rem", borderLeft: "3px solid rgba(137,75,76,0.28)" }}>
                  <p style={{ margin: 0, color: "var(--text)", lineHeight: 1.7 }}>
                    <strong>A:</strong> {qa.answer}
                  </p>
                  <button
                    style={{
                      marginTop: "0.5rem",
                      background: "transparent",
                      border: "none",
                      color: "var(--muted)",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      padding: 0,
                    }}
                  >
                    Helpful ({qa.helpful})
                  </button>
                </div>
              ) : (
                <p style={{ color: "var(--muted)", fontStyle: "italic", margin: 0 }}>Waiting for a reply from Move...</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
