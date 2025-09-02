import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(undefined);

  useEffect(() => {
    // Function to get the current theme
    const getTheme = () => {
      if (typeof window !== "undefined") {
        const storedTheme = window.localStorage.getItem("theme");
        if (
          storedTheme &&
          (storedTheme === "dark" || storedTheme === "light")
        ) {
          return storedTheme;
        }

        // Check system preference
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
        window.localStorage.setItem("theme", systemTheme);
        return systemTheme;
      }
      return "light";
    };

    const currentTheme = getTheme();
    setTheme(currentTheme);
    applyTheme(currentTheme);
  }, []);

  const applyTheme = (newTheme) => {
    if (typeof window !== "undefined") {
      if (newTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
      window.localStorage.setItem("theme", newTheme);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const setThemeMode = (newTheme) => {
    if (newTheme === "dark" || newTheme === "light") {
      setTheme(newTheme);
      applyTheme(newTheme);
    }
  };

  return {
    theme,
    toggleTheme,
    setTheme: setThemeMode,
    isDark: theme === "dark",
  };
};
