import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Scroll = ({ section }: { section: string }) => {
  return (
    <a href={section == "home" ? "#projects" : "#home"}>
      <button className="scroll-button">
        {section == "home" ? (
          <FaArrowDown className="scroll-item" />
        ) : (
          <FaArrowUp className="scroll-item" />
        )}
      </button>
    </a>
  );
};

export default Scroll;
