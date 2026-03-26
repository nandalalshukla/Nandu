import { ThemeProvider } from "./components/ThemeProvider";
import Intro from "./components/Intro";
import Midbar from "./components/Midbar";

import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="w-full bg-white text-black transition-colors dark:bg-[#1D1F21] dark:text-zinc-100 ">
        <Navbar />
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 grid-bg">
          <Intro />
        </div>
        <Midbar />
      </main>
    </ThemeProvider>
  );
}

export default App;
