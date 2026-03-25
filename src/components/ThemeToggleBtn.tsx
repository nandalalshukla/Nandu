import { useTheme } from "../hooks/hooks";
import { GoSun } from "react-icons/go";
import { IoMoon } from "react-icons/io5";
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <IoMoon/> : <GoSun/>}
    </button>
  );
}
