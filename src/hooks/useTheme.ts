import { useLayoutEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  //saving theme and isChecked in localStorage
  const setLocalStorageItems = (theme: string) => {
    const checkbox =
      (document.getElementById("checkbox") as HTMLInputElement) || false;
    localStorage.setItem("isChecked", checkbox.checked.toString());

    localStorage.setItem("theme", theme);

    setTheme(theme);
  };

  //toggling theme and saving it in localStorage
  const toggleTheme = () => {
    theme === "light"
      ? setLocalStorageItems("dark")
      : setLocalStorageItems("light");
  };

  //load theme from localStorage before App renders
  useLayoutEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    setTheme(theme);
  }, []);

  return { theme, toggleTheme };
};
