import { useContext } from "react";
import { ToastContext } from "../../context/ToastContext";

export const Toast = () => {
  const { toasts, removeToast } = useContext(ToastContext);

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "400px"
      }}
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          style={{
            padding: "1rem 1.1rem",
            borderRadius: "18px",
            background:
              toast.type === "success"
                ? "rgba(137, 75, 76, 0.94)"
                : toast.type === "error"
                ? "rgba(191, 129, 129, 0.95)"
                : "rgba(201, 135, 135, 0.94)",
            color: "white",
            boxShadow: "0 12px 28px rgba(137, 75, 76, 0.18)",
            animation: "slideIn 0.3s ease-out",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem"
          }}
        >
          <span>{toast.message}</span>
          <button
            onClick={() => removeToast(toast.id)}
            style={{
              background: "rgba(255, 255, 255, 0.18)",
              border: "none",
              color: "white",
              cursor: "pointer",
              padding: "0.25rem 0.55rem",
              borderRadius: "999px",
              fontSize: "1rem",
              lineHeight: "1"
            }}
          >
            ×
          </button>
        </div>
      ))}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
