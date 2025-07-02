export default function Loader() {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{ textAlign: "center", padding: "1rem" }}
    >
      <svg
        style={{ margin: "auto", background: "none", display: "block" }}
        width="50"
        height="50"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="8"
          r="35"
          strokeDasharray="164.933 56.978"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          />
        </circle>
      </svg>
      <span style={{ marginTop: "0.5rem", display: "block", color: "#3b82f6" }}>
        Loading...
      </span>
    </div>
  );
}
