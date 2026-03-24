import { useTheme } from "../hooks/hooks";

export function MyToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
