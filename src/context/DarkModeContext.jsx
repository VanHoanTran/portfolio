import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme:dark)").matches,
    "isDarkMode",
  );
  const toggleDarkMode = () => {
    setIsDarkMode((isDark) => !isDark);
  };

  useEffect(() => {
    document.documentElement.classList.add(isDarkMode ? "dark" : "light");
    document.documentElement.classList.remove(isDarkMode ? "light" : "dark");
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error(
      "DarkModeContext was used outside DarkModeContext.Provider",
    );
  }
  return context;
};

export { DarkModeProvider, useDarkMode };
