import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-8 px-3 absolute left-0 w-full border border-x-0 border-b-0 ">
      <div className=" max-w-5xl layout flex flex-col md:flex-row gap-3 justify-between mx-auto">
        <p className="text-sm">© 2025 Matheus Amaral</p>
        <span className="flex items-center gap-3">
          <a href="https://github.com/MatheuscAmaral" target="_blank">
            <FaGithubAlt className="icon"/>
          </a>
          <a href="https://www.linkedin.com/in/matheus-amaral-00762b265/" target="_blank">
            <FaLinkedinIn className="icon"/>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;