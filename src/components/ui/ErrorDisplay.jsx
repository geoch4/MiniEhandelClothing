import { useContext } from "react";
import { ErrorContext } from "../../context/ErrorContext";

export const ErrorDisplay = () => {
  const { errors, removeError } = useContext(ErrorContext);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        zIndex: 8999,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "420px"
      }}
    >
      {errors.map((error) => (
        <div
          key={error.id}
          style={{
            padding: "1rem 1.1rem",
            borderRadius: "18px",
            background: "rgba(191,129,129,0.95)",
            color: "#fff9f8",
            border: "1px solid rgba(122,61,64,0.2)",
            boxShadow: "0 10px 24px rgba(137,75,76,0.18)",
            animation: "slideIn 0.3s ease-out",
            position: "relative"
          }}
        >
          <button
            onClick={() => removeError(error.id)}
            style={{
              position: "absolute",
              top: "8px",
              right: "10px",
              background: "transparent",
              border: "none",
              color: "#fff9f8",
              cursor: "pointer",
              fontSize: "1.1rem"
            }}
          >
            ×
          </button>

          <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "1rem", fontWeight: "700" }}>{error.message}</h4>
          <p style={{ margin: 0, fontSize: "0.92rem", opacity: 0.96 }}>{error.details}</p>
        </div>
      ))}
    </div>
  );
};
