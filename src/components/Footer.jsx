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
        <div className="flex items-center justify-between">
          <ul
            className={ctl(`
              flex gap-4
              *:flex *:cursor-pointer *:items-center *:gap-2
            `)}
          >
            <li>
              <Linkedin /> LinkedIn
            </li>
            <li>
              <Github /> Github
            </li>
          </ul>
          <p>2025 | All Rights Reserved</p>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default Footer;
