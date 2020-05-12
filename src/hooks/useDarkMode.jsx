import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (value) => {
  const [useDarkMode, setUseDarkMode] = useLocalStorage("use-darkmode", value);

  const body = document.getElementsByTagName("body")[0];
  useEffect(() => {
    useDarkMode ? body.classList.add("dark-mode") : body.classList.remove("dark-mode");
  }, [useDarkMode, body]);
  return [useDarkMode, setUseDarkMode];
};
