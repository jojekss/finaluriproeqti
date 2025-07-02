import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{ cursor: "pointer", padding: "0.5rem 1rem" }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
