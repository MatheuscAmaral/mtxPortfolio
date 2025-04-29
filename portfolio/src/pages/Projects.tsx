import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data";

const Projects = () => {
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
        <motion.h1 className="flex items-center gap-2 text-4xl font-bold mb-5" variants={itemVariants}>
            Feature <p className="text-primary">Projects</p>
        </motion.h1>
        <motion.p className="text-lg mb-5" variants={itemVariants}>
          Here are some projects I've worked on recently.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-rows-1 xl:grid-cols-1 items-center gap-7 justify-center"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
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
                <p>{project.title.split(" ")[0]}</p>
                <p className="text-primary">{project.title.split(" ")[1]}</p>
              </motion.span>
              <motion.p className="text-lg" variants={itemVariants}>
                {project.description}
              </motion.p>

              <motion.div
                className="flex items-center gap-4"
                variants={containerVariants}
              >
                {project?.technologies?.map((tech, techIndex) => {
                  const uniqueId = `${index}-${techIndex}`;
                  return (
                    <motion.div
                      key={uniqueId}
                      variants={itemVariants}
                      onHoverStart={() => setIsVisibleId(uniqueId)}
                      onHoverEnd={() => setIsVisibleId(null)}
                      className={` flex items-center gap-2 cursor-pointer text-gray-500 hover:text-primary`}
                    >
                      <motion.span className={` cursor-pointer`}>
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
              alt={project.title}
              className="size-120 h-auto rounded-md"
              variants={itemVariants}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;