import { Github, Linkedin } from "react-bootstrap-icons";
import ResponsiveContainer from "./ResponsiveContainer";
import ctl from "@netlify/classnames-template-literals";

const Footer = () => {
  return (
    <div
      className={ctl(`
        border-t-1 border-[var(--tertiary-color)] bg-[var(--secondary-color)] py-16 text-white
      `)}
    >
      <ResponsiveContainer>
        <div
          className={ctl(`
            flex flex-col items-center justify-between gap-4
            xs:flex-row xs:gap-0
          `)}
        >
          <ul className={ctl(`flex gap-4`)}>
            <li>
              <a
                href="https://www.linkedin.com/in/mark-anthony-pandan-385939136/"
                target="_blank"
                className="flex items-center gap-2"
              >
                <Linkedin className="inline" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/markpandan"
                target="_blank"
                className="flex items-center gap-2"
              >
                <Github className="inline" /> Github
              </a>
            </li>
          </ul>
          <p>2025 | All Rights Reserved</p>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default Footer;
