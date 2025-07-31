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
        sticky top-0 z-10 m-auto w-full bg-[var(--secondary-color)] px-2 py-4 text-white shadow-md
        transition-all
        xl:top-4 xl:box-content xl:w-6xl xl:rounded-3xl xl:px-4
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
