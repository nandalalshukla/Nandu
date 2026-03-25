import { ThemeToggle } from "./ThemeToggleBtn";


const Navbar = () => {
  return (
    <div className="border-b-2 dark:border-gray-700 border-gray-900 h-12 flex justify-center items-center">
      <div className="flex items-center justify-around gap-5">
              <h1 className="text-2xl font-caveat">Nandu</h1>
              <h1>Github</h1>
              <h1>Linkedin</h1>
              <h1>Youtube</h1>
              <h1>X</h1>
              <ThemeToggle/>
      </div>
    </div>
  );
}

export default Navbar