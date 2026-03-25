import { ThemeProvider } from "./components/ThemeProvider";
import ProfilePic from "./components/ProfilePic";
import Resume from "./components/Resume";
import { ThemeToggle } from "./components/ThemeToggleBtn";
import Navbar from "./components/Navbar";
import CopyEmailBtn from "./components/CopyEmailBtn";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="min-h-screen bg-white text-black transition-colors dark:bg-[#1D1F21] dark:text-zinc-100 ">
          <Navbar/>
        <ProfilePic />
        <Resume/>
        <ThemeToggle />
        <CopyEmailBtn/>
  
      </main>
    </ThemeProvider>
  );
}

export default App;
