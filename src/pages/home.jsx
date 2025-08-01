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

  useNavbarBreakpoint({
    key: "projects",
    componentRef: projectRef,
    color: "bg-[var(--secondary-color)]",
    behaviour: "xl:top-4 xl:box-content xl:w-6xl xl:rounded-3xl xl:px-4",
  });

  return (
    <>
      <Background />
      <Jumbotron />
      <AboutBlock />
      <div
        ref={projectRef}
        id="projects"
        className={ctl(`
          bg-[var(--primary-color)] py-20 text-white
          md:py-50
        `)}
      >
        <ProjectsBlock />
        <ContactBlock />
      </div>
    </>
  );
};

export default Home;
