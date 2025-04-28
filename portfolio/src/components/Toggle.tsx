import { LuSunDim, LuMoon } from "react-icons/lu";
import { useTheme } from "../hooks";

const Toogle = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <li className="nav-item list-none mt-3">
      <button
        onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <LuSunDim className="size-7" />
        ) : (
          <LuMoon className="size-6.5" />
        )}
      </button>
    </li>
  )
}

export default Toogle;