export const Loading = () => {
  return (
    <div style={{
      display: "inline-block",
      width: "20px",
      height: "20px",
      border: "3px solid var(--border)",
      borderTop: "3px solid var(--brand)",
      borderRadius: "50%",
      animation: "spin 1s linear infinite"
    }}>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export const Spinner = ({ size = "40px" }) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "3rem"
    }}>
      <div style={{
        width: size,
        height: size,
        border: "4px solid var(--border)",
        borderTop: "4px solid var(--brand)",
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
      }}>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
};
