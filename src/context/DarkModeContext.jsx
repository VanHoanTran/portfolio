import { createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme:dark)").matches,
    "isDarkMode",
  );
  return (
    <DarkModeContext.Provider value={{}}>{children}</DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
