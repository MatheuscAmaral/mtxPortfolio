import Toggle from "./Toggle";
import { LuBrain } from "react-icons/lu";
import { BiHomeSmile } from "react-icons/bi";
import { TbFolderCode } from "react-icons/tb";
import { FaRegPaperPlane } from "react-icons/fa";
import { motion, LayoutGroup } from "framer-motion";
import { IHeader } from "../interfaces";

const Header = ({ section, setSection }: IHeader) => {
  const navItems = [
    { icon: <BiHomeSmile />, href: "home" },
    { icon: <TbFolderCode />, href: "projects" },
    { icon: <LuBrain />, href: "skills" },
    { icon: <FaRegPaperPlane />, href: "contact" },
  ];

  const indicatorTransition = {
    type: "spring" as const,
    stiffness: 280,
    damping: 30,
    mass: 0.7,
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-16 flex flex-col items-center justify-center">
      <LayoutGroup>
        <nav className="flex flex-col items-center space-y-6 relative">
          {navItems.map((item) => {
            const isActive = section === item.href;
            return (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={() => setSection(item.href)}
                className="w-12 h-12 relative flex items-center justify-center cursor-pointer"
              >
                {isActive && (
                  <motion.span
                    layoutId="tabIndicator"
                    className="absolute inset-0 rounded-2xl bg-gray-500/20"
                    transition={indicatorTransition}
                  />
                )}

                <motion.div
                  layout
                  style={{ fontSize: "1.5rem" }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon}
                </motion.div>
              </a>
            );
          })}

          <Toggle />
        </nav>
      </LayoutGroup>
    </aside>
  );
};

export default Header;
