import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

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

const Contact = () => {
  return (
    <motion.section
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className=" flex flex-col gap-10 justify-center items-center h-screen"
    >
      <motion.h2
        variants={itemVariants}
        className="text-4xl font-bold mb-4"
      >
        Contact <span className="text-primary">Me</span>
      </motion.h2>
      <motion.form
        className="flex flex-col gap-5 w-full"
      >
        <motion.section
          variants={itemVariants}
          className="flex w-full gap-5"
        >
          <motion.div
            className="flex flex-col gap-2 items-start mb-4 w-full"
          >
            <motion.label
              variants={itemVariants}
              htmlFor="name"
              className=""
            >
              Name
            </motion.label>
            <motion.span
              variants={itemVariants}
              className="w-full"
            >
              <Input
                type="text"
                id="name"
                className="border bg-transparent rounded p-5 w-full"
                placeholder="Enter your nome..."
                required
              />
            </motion.span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-2 items-start mb-4 w-full"
          >
            <motion.label
              variants={itemVariants}
              htmlFor="mail"
              className=""
            >
              Mail
            </motion.label>
            <motion.span
              variants={itemVariants}
              className="w-full"
            >
              <Input
                type="text"
                id="mail"
                className="border rounded p-5 w-full"
                placeholder="Enter your mail..."
                required
              />
            </motion.span>
          </motion.div>
        </motion.section>
        <motion.section
          variants={itemVariants}
          className="flex flex-col gap-2 items-start mb-4 w-full"
        >
          <motion.label
            variants={itemVariants}
            htmlFor="message"
          >
            Message
          </motion.label>
          <motion.span
            variants={itemVariants}
            className="w-full"
          >
            <Textarea
              id="message"
              className="border rounded p-5 w-full h-32"
              placeholder="Enter your message..."
              required
            />
          </motion.span>
        </motion.section>
        <motion.section
          variants={itemVariants}
          className="flex justify-end"        >
          <Button
            type="submit"
            className="flex items-center gap-2 text-white rounded p-2"
          >
            Send
            <LuArrowRight />
          </Button>
        </motion.section>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
