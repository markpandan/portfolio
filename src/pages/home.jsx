import { useRef } from "react";
import AboutBlock from "../components/AboutBlock";
import Background from "../components/Background";
import ContactBlock from "../components/ContactBlock";
import Jumbotron from "../components/Jumbotron";
import ProjectsBlock from "../components/ProjectsBlock";
import useNavbarBreakpoint from "../hooks/useNavbarBreakpoint";
import ctl from "@netlify/classnames-template-literals";

const Home = () => {
  const projectRef = useRef(null);

  useNavbarBreakpoint(
    "projects",
    projectRef,
    ctl(
      `
        sticky top-4 m-auto box-content max-w-6xl rounded-3xl bg-[var(--secondary-color)] px-4 py-4
        text-white transition-all
      `
    )
  );

  return (
    <>
      <Background />
      <Jumbotron />
      <AboutBlock />
      <div
        ref={projectRef}
        id="projects"
        className="bg-[var(--primary-color)] py-50 text-white"
      >
        <ProjectsBlock />
        <ContactBlock />
      </div>
    </>
  );
};

export default Home;
