import { createContext, useState } from "react";
import { IThemeContext, Theme } from "../interfaces";

export const ThemeContext = createContext({} as IThemeContext);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const storedTheme = localStorage.getItem("theme") as Theme;
  const [theme, setTheme] = useState<Theme>(storedTheme);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;