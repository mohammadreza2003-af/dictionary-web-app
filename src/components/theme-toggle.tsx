"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div className="flex items-center space-x-3">
      <button
        aria-label="Toggle Dark Mode"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`relative inline-flex items-center w-12 h-6 rounded-full p-1 transition-colors
          ${isDark ? "bg-gray-700" : "bg-yellow-400"}`}
      >
        <span
          className={`inline-block w-4 h-4 rounded-full bg-white shadow-md transform transition-transform
            ${isDark ? "translate-x-6" : "translate-x-0"}`}
        />
      </button>
      {isDark ? (
        <Moon className="w-6 h-6 text-gray-300" />
      ) : (
        <Sun className="w-6 h-6 text-yellow-400" />
      )}
    </div>
  );
}
