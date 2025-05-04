import { LuSunDim, LuMoon } from "react-icons/lu";
import { useTheme } from "../hooks";

const Toogle = ({ isHeader }: { isHeader: boolean }) => {
  const { theme, changeTheme } = useTheme();

  return (
    <li className={`${isHeader && "ml-2"} nav-item list-none mt-3 flex items-center gap-3`}>
      <button
        onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <LuSunDim className="size-7" />
        ) : (
          <LuMoon className="size-6.5" />
        )}
      </button>
      <p className={`${!isHeader && "hidden"}`}>
        {
          theme === "dark" ? (
            <span className="text-sm">Light Mode</span>
          ) : (
            <span>Dark Mode</span>
          )
        }
      </p>
    </li>
  )
}

export default Toogle;