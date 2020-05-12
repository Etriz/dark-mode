import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (value) => {
  const [useDarkMode, setUseDarkMode] = useLocalStorage("use-darkmode", value);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    useDarkMode ? body.classList.add("dark-mode") : body.classList.remove("dark-mode");
  }, [useDarkMode]);
  return [useDarkMode, setUseDarkMode];
};
