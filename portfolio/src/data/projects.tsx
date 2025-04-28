import rwa from "../assets/rwa.png";
import luza from "../assets/luza.png";
import bravos from "../assets/bravos.png";
import admin from "../assets/admin.png";
import {
  TbBrandAdonisJs,
  TbBrandMysql,
  TbBrandDocker,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandNodejs,
  TbBrandNextjs,
  TbBrandPrisma,
  TbBrandReact,
} from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiFastify } from "react-icons/si";

const projects = [
  {
    title: "RWA Suplementos",
    description:
      "This is a team and project management dashboard, with a modern and intuitive interface, which allows you to customize personal information, such as name, photo and function.",
    image: rwa,
    technologies: [
      { icon: <TbBrandReact className="size-6" />, name: "React" },
      { icon: <TbBrandNodejs className="size-6" />, name: "Node.js" },
      { icon: <BiLogoPostgresql className="size-6" />, name: "PostgreSQL" },
      { icon: <SiFastify className="size-6" />, name: "Fastify" },
      { icon: <TbBrandPrisma className="size-6" />, name: "Prisma" },
      { icon: <TbBrandTailwind className="size-6" />, name: "Tailwind" },
    ],
  },
  {
    title: "Luza Destinos",
    description:
    "This is a team and project management dashboard, with a modern and intuitive interface, which allows you to customize personal information, such as name, photo and function.",
    image: luza,
    technologies: [
      { icon: <TbBrandReact className="size-6" />, name: "React" },
      { icon: <TbBrandAdonisJs className="size-6" />, name: "AdonisJS" },
      { icon: <TbBrandMysql className="size-6" />, name: "MySQL" },
      { icon: <TbBrandTypescript className="size-6" />, name: "TypeScript" },
      { icon: <TbBrandDocker className="size-6" />, name: "Docker" },
      { icon: <TbBrandTailwind className="size-6" />, name: "Tailwind" },
    ],
  },
  {
    title: "Bravos Sports",
    description:
    "This is a team and project management dashboard, with a modern and intuitive interface, which allows you to customize personal information, such as name, photo and function.",
    image: bravos,
    technologies: [
      { icon: <TbBrandReact className="size-6" />, name: "React" },
      { icon: <TbBrandNodejs className="size-6" />, name: "Node.js" },
      { icon: <BiLogoPostgresql className="size-6" />, name: "PostgreSQL" },
      { icon: <SiFastify className="size-6" />, name: "Fastify" },
      { icon: <TbBrandPrisma className="size-6" />, name: "Prisma" },
      { icon: <TbBrandTailwind className="size-6" />, name: "Tailwind" },
    ],
  },
  {
    title: "Admin Ecommerce",
    description:
      "This is a team and project management dashboard, with a modern and intuitive interface, which allows you to customize personal information, such as name, photo and function.",
    image: admin,
    technologies: [
      { icon: <TbBrandNextjs className="size-6" />, name: "Next" },
      { icon: <TbBrandNodejs className="size-6" />, name: "Node.js" },
      { icon: <BiLogoPostgresql className="size-6" />, name: "PostgreSQL" },
      { icon: <SiFastify className="size-6" />, name: "Fastify" },
      { icon: <TbBrandPrisma className="size-6" />, name: "Prisma" },
      { icon: <TbBrandTailwind className="size-6" />, name: "Tailwind" },
    ],
  },
];

export default projects;