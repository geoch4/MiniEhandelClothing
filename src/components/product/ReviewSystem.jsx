import { useState } from "react";
import { useContext } from "react";
import { ToastContext } from "../../context/ToastContext";

export const ReviewSystem = ({ productId, reviews = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    author: "",
    rating: 5,
    title: "",
    content: ""
  });
  const [allReviews, setAllReviews] = useState(reviews);
  const { addToast } = useContext(ToastContext);

  const avgRating = allReviews.length > 0
    ? (allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length).toFixed(1)
    : 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "rating" ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.author.trim() || !formData.title.trim() || !formData.content.trim()) {
      addToast("Please fill in all fields", "error");
      return;
    }

    const newReview = {
      id: allReviews.length + 1,
      author: formData.author,
      rating: formData.rating,
      title: formData.title,
      content: formData.content,
      date: new Date().toISOString().split("T")[0],
      verified: false
    };

    setAllReviews([newReview, ...allReviews]);
    setFormData({ author: "", rating: 5, title: "", content: "" });
    addToast("Thanks for your review!", "success");
  };

  const renderStars = (rating) => "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <div className="review-system" style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
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
          Reviews ({allReviews.length})
        </h3>

        <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          <div style={{ fontSize: "3rem", fontWeight: "bold", color: "var(--brand)" }}>{avgRating}</div>
          <div style={{ fontSize: "1.5rem", color: "var(--brand)" }}>{renderStars(Math.round(avgRating))}</div>
          <div style={{ color: "var(--muted)" }}>Based on {allReviews.length} reviews</div>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="btn" style={{ width: "100%", maxWidth: "300px" }}>
          {isOpen ? "Close Form" : "Write a Review"}
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
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700", color: "var(--text)" }}>Rating</label>
            <select name="rating" value={formData.rating} onChange={handleInputChange} style={{ width: "100%", padding: "0.85rem", background: "var(--panel)", border: "1px solid var(--border)", borderRadius: "16px", color: "var(--text)", fontSize: "1rem" }}>
              <option value={5}>★★★★★ Excellent</option>
              <option value={4}>★★★★ Very Good</option>
              <option value={3}>★★★ Good</option>
              <option value={2}>★★ Fair</option>
              <option value={1}>★ Poor</option>
            </select>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700", color: "var(--text)" }}>Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Summary of your review" style={{ width: "100%", padding: "0.85rem", background: "var(--panel)", border: "1px solid var(--border)", borderRadius: "16px", color: "var(--text)", fontSize: "1rem" }} />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700", color: "var(--text)" }}>Your Review</label>
            <textarea name="content" value={formData.content} onChange={handleInputChange} placeholder="Tell us about your experience..." rows="4" style={{ width: "100%", padding: "0.85rem", background: "var(--panel)", border: "1px solid var(--border)", borderRadius: "16px", color: "var(--text)", fontSize: "1rem", fontFamily: "inherit" }} />
          </div>

          <button type="submit" className="btn" style={{ background: "var(--brand)" }}>
            Submit Review
          </button>
        </form>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {allReviews.length === 0 ? (
          <p style={{ color: "var(--muted)", fontStyle: "italic" }}>No reviews yet. Be the first to review this product.</p>
        ) : (
          allReviews.map((review) => (
            <div key={review.id} style={{ background: "rgba(255,248,246,0.72)", padding: "1.5rem", borderRadius: "22px", border: "1px solid var(--border)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "0.5rem", gap: "1rem", flexWrap: "wrap" }}>
                <div>
                  <h4 style={{ margin: "0 0 0.25rem 0", color: "var(--text)", fontFamily: "Georgia, serif", fontSize: "1.15rem" }}>{review.title}</h4>
                  <div style={{ fontSize: "1.1rem", marginBottom: "0.5rem", color: "var(--brand)" }}>{renderStars(review.rating)}</div>
                </div>
                {review.verified && (
                  <span style={{ fontSize: "0.75rem", background: "rgba(137,75,76,0.12)", color: "var(--brand)", padding: "0.35rem 0.8rem", borderRadius: "999px", fontWeight: "700" }}>
                    Verified Buyer
                  </span>
                )}
              </div>

              <p style={{ margin: "0.5rem 0", color: "var(--text)", lineHeight: 1.7 }}>{review.content}</p>

              <p style={{ fontSize: "0.9rem", color: "var(--muted)", margin: 0 }}>
                by <strong>{review.author}</strong> • {review.date}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
