import { createContext, useContext, useEffect, useState } from "react";

// Create the context with default values
export const ThemeContext = createContext({
  theme: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// Custom hook for consuming the context
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component that holds state & logic
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Update HTML class and localStorage when theme changes
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const lightTheme = () => setTheme("light");
  const darkTheme = () => setTheme("dark");

  return (
    <ThemeContext.Provider value={{ theme, lightTheme, darkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};