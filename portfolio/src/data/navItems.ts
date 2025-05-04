import React from "react";
import { LuBrain } from "react-icons/lu";
import { BiHomeSmile } from "react-icons/bi";
import { TbFolderCode } from "react-icons/tb";
import { FaRegPaperPlane } from "react-icons/fa";

const navItems = [
  { icon: React.createElement(BiHomeSmile), href: "home" },
  { icon: React.createElement(TbFolderCode), href: "projects" },
  { icon: React.createElement(LuBrain), href: "skills" },
  { icon: React.createElement(FaRegPaperPlane), href: "contact" },
];

export default navItems;