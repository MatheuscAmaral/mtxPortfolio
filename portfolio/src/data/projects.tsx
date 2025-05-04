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

export const projects = [
  {
    titleKey: "project_luza_destinos_title",
    descriptionKey: "project_luza_destinos_description",
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
    titleKey: "project_bravos_sports_title",
    descriptionKey: "project_bravos_sports_description",
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
    titleKey: "project_rwa_suplementos_title",
    descriptionKey: "project_rwa_suplementos_description",
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
    titleKey: "project_admin_ecommerce_title",
    descriptionKey: "project_admin_ecommerce_description",
    image: admin,
    technologies: [
      { icon: <TbBrandNextjs className="size-6" />, name: "Next.js" },
      { icon: <TbBrandNodejs className="size-6" />, name: "Node.js" },
      { icon: <BiLogoPostgresql className="size-6" />, name: "PostgreSQL" },
      { icon: <SiFastify className="size-6" />, name: "Fastify" },
      { icon: <TbBrandPrisma className="size-6" />, name: "Prisma" },
      { icon: <TbBrandTailwind className="size-6" />, name: "Tailwind" },
    ],
  },
];

export default projects;
