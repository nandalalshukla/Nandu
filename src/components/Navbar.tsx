import { ThemeToggle } from "./ThemeToggleBtn";
const Navbar = () => {
  return (
    <div className="border-b-2 dark:border-gray-700 border-gray-900 h-12 flex items-center">
      <div className="w-full max-w-3xl mx-auto px-4 flex flex-wrap items-center justify-between">
        <h1 className="text-2xl font-caveat">Nandu</h1>

        <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
          <h1>Github</h1>
          <h1>Linkedin</h1>
          <h1>Youtube</h1>
          <h1>X</h1>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
