export type Theme = "dark" | "light";

export interface IThemeContext {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}