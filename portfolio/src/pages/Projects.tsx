import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const [isVisibleId, setIsVisibleId] = useState<string | null>(null);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="projects"
      variants={containerVariants}
      className="flex flex-col gap-10 justify-center w-full pt-72"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>
        <motion.h1
          className="flex items-center gap-2 text-2xl md:text-4xl font-bold mb-5"
          variants={itemVariants}
        >
          <p>{t('projects_title_recent')}</p>
          <span className="text-primary">{t('projects_title_work')}</span>
        </motion.h1>
        <motion.p className="text-sm md:text-lg mb-5 text-primary" variants={itemVariants}>
          {t('projects_intro')}
        </motion.p>
      </div>

      <motion.div
        className="grid grid-rows-1 xl:grid-cols-1 items-center gap-7 justify-center"
        variants={containerVariants}
      >
        {projects.map((project, index) => {
          const title = t(project.titleKey) as string;
          const [firstWord, secondWord] = title.split(' ');

          return (
            <motion.div
              key={index}
              className="flex flex-col xl:flex-row gap-10 border rounded-xl p-10 items-center hover:bg-gray-500/20 cursor-pointer"
              variants={itemVariants}
            >
              <motion.div className="flex flex-col gap-5" variants={itemVariants}>
                <motion.span
                  className="flex items-center gap-2 text-2xl font-semibold"
                  variants={itemVariants}
                >
                  <p>{firstWord}</p>
                  <p className="text-primary">{secondWord}</p>
                </motion.span>
                <motion.p className="text-sm md:text-md text-primary" variants={itemVariants}>
                  {t(project.descriptionKey)}
                </motion.p>

                <motion.div
                  className="flex items-center gap-4"
                  variants={containerVariants}
                >
                  {project.technologies.map((tech, techIndex) => {
                    const uniqueId = `${index}-${techIndex}`;
                    return (
                      <motion.div
                        key={uniqueId}
                        variants={itemVariants}
                        onHoverStart={() => setIsVisibleId(uniqueId)}
                        onHoverEnd={() => setIsVisibleId(null)}
                        className="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-primary"
                      >
                        <motion.span className="cursor-pointer">
                          {tech.icon}
                        </motion.span>
                        <motion.p
                          className="text-sm"
                          initial={{ opacity: 0, width: 0, overflow: "hidden" }}
                          animate={
                            isVisibleId === uniqueId
                              ? { opacity: 1, width: "auto", overflow: "" }
                              : { opacity: 0, width: 0, overflow: "hidden" }
                          }
                          transition={{ duration: 0.3 }}
                        >
                          {tech.name}
                        </motion.p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>

              <motion.img
                src={project.image}
                alt={title}
                className="size-120 h-auto rounded-md"
                variants={itemVariants}
                initial={{ scale: 1 }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
