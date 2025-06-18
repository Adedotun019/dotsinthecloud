import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggle from "./themetoggle";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  
  // Function to check if the link is active
  const isActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-sans">
      <header className="sticky top-0 z-10 bg-blue-600 dark:bg-neutral-800 text-white py-4 px-6 shadow-md">
        <nav className="max-w-4xl mx-auto flex flex-wrap items-center justify-between text-lg">
          <div className="flex flex-wrap gap-4 md:gap-6">
            <Link href="/" className={`px-4 py-1 rounded-md text-white hover:bg-blue-700 dark:hover:bg-neutral-700 transition-all duration-200 ${isActive('/') ? 'font-bold border-b-2 border-white' : ''}`}>
              Home
            </Link>
            <Link href="/about" className={`px-4 py-1 rounded-md text-white hover:bg-blue-700 dark:hover:bg-neutral-700 transition-all duration-200 ${isActive('/about') ? 'font-bold border-b-2 border-white' : ''}`}>
              About
            </Link>
            <Link href="/projects" className={`px-4 py-1 rounded-md text-white hover:bg-blue-700 dark:hover:bg-neutral-700 transition-all duration-200 ${isActive('/projects') ? 'font-bold border-b-2 border-white' : ''}`}>
              Projects
            </Link>
            <Link href="/cv" className={`px-4 py-1 rounded-md text-white hover:bg-blue-700 dark:hover:bg-neutral-700 transition-all duration-200 ${isActive('/cv') ? 'font-bold border-b-2 border-white' : ''}`}>
              CV
            </Link>
          </div>
          <ThemeToggle />
        </nav>
      </header>

      <main className="flex-grow max-w-4xl w-full mx-auto p-4 md:p-6 animate-fadeIn">
        {children}
      </main>

      <footer className="text-sm text-center py-6 text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Adedotun Adeeko • Built with Next.js & Tailwind CSS
      </footer>
    </div>
  );
};

export default Layout;
