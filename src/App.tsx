import { ThemeProvider } from "./components/theme-provider";
import { MyToggle } from "./components/ThemeToggleBtn";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="min-h-screen bg-white text-black transition-colors dark:bg-[#1D1F21] dark:text-zinc-100 ">
        <div className="mx-auto flex max-w-xl flex-col gap-4 p-8 grid-bg">
          <h1 className="text-3xl font-caveat">Theme Demo</h1>
          <p className="text-sm">
            If dark mode is wired correctly, this background and text color will
            change.
          </p>
          <MyToggle />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
