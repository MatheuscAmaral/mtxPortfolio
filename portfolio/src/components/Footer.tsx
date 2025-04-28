import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 px-3 absolute left-0 w-full border border-x-0 border-b-0 ">
      <div className="layout flex justify-between mx-auto text-center">
        <p className="text-sm">© 2025 Matheus Amaral</p>
        <span className="flex items-center gap-3">
          <FaGithubAlt className="icon"/>
          <FaLinkedinIn className="icon"/>
        </span>
      </div>
    </footer>
  );
}

export default Footer;