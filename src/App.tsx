import { ThemeProvider } from "./components/theme-provider";
import ProfilePic from "./components/ProfilePic";
import Resume from "./components/Resume";
import { MyToggle } from "./components/ThemeToggleBtn";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="min-h-screen bg-white text-black transition-colors dark:bg-[#1D1F21] dark:text-zinc-100 ">
          
        <ProfilePic />
        <Resume/>
          <MyToggle />
  
      </main>
    </ThemeProvider>
  );
}

export default App;
