import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="transition-colors duration-300 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? (
        <MoonIcon className="w-5 h-5 text-gray-800 dark:text-gray-400" />
      ) : (
        <SunIcon className="w-5 h-5 text-gray-800 dark:text-gray-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
