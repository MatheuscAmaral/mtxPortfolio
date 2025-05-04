import { IoClose } from "react-icons/io5";
import { IHeader, type INavItems } from "../interfaces";
import { navItems } from "../data";
import { FaBarsStaggered } from "react-icons/fa6";
import { Toggle } from "../components";

const Header = ({ isOpen, setIsOpen, section }: IHeader) => {

  return (
    <header
      className={`${
        isOpen &&
        "h-screen bg-background xl:bg-transparent rounded-none flex flex-col"
      } fixed top-0 w-screen left-0 right-0 z-50`}
    >
      <article className="flex justify-between items-center w-full py-5 px-5 bg-background">
        <p className="font-semibold text-sm">
          MATHEUS <span className="text-primary">AMARAL</span>
        </p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`block xl:hidden p-1.5 rounded-sm hover:bg-gray-300/20 `}
        >
          {isOpen ? (
            <IoClose className="size-5" />
          ) : (
            <FaBarsStaggered className="size-5" />
          )}
        </button>
      </article>

      <article className={`${isOpen ? "block xl:hidden" : "hidden"} px-2`}>
        <nav className="flex flex-col items-start h-full">
          {navItems.map((item: INavItems) => {
            return (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 text-sm font-semibold p-3  w-full text-start cursor-pointer transition-all hover:bg-gray-500/20 hover:rounded-md"
              >
                <span
                  className={`${
                    section === item.href && "bg-gray-500/20 rounded-sm"
                  } text-xl p-1.5`}
                >
                  {item.icon}
                </span>
                <p>{item.href.charAt(0).toUpperCase() + item.href.slice(1)}</p>
              </a>
            );
          })}

          <Toggle isHeader={isOpen} />
        </nav>
      </article>
    </header>
  );
};

export default Header;
