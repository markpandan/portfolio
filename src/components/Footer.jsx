import Container from "./Container";
import { Linkedin, Github } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className="border-t-1 py-16">
      <Container>
        <div className="flex items-center justify-between">
          <ul
            className={`
              flex gap-4
              *:flex *:cursor-pointer *:items-center *:gap-2
            `}
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
      </Container>
    </div>
  );
};

export default Footer;
