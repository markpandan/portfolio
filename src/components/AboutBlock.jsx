import ctl from "@netlify/classnames-template-literals";
import { useRef } from "react";
import { FileText } from "react-bootstrap-icons";
import tools from "../db/tools.json";
import useNavbarBreakpoint from "../hooks/useNavbarBreakpoint";
import ResponsiveContainer from "./ResponsiveContainer";

const AboutBlock = () => {
  const aboutRef = useRef(null);

  useNavbarBreakpoint({
    key: "about",
    componentRef: aboutRef,
    collapseDesign: ctl(
      `fixed w-full bg-[var(--primary-color)] px-2 py-4 transition-colors`
    ),
    navDesign: ctl(
      `
        sticky top-0 z-10 m-auto w-full bg-[var(--primary-color)] text-white transition-all
        xl:top-4 xl:box-content xl:w-6xl xl:rounded-3xl xl:px-4
      `
    ),
  });

  return (
    <div
      ref={aboutRef}
      id="about"
      className={ctl(`
        bg-[var(--secondary-color)] py-32 text-white
        md:py-68
      `)}
    >
      <ResponsiveContainer>
        <div className="mb-24">
          <h2
            className={ctl(`
              mb-4 text-center text-4xl font-semibold
              md:text-start
            `)}
          >
            About Me
          </h2>
          <div
            className={ctl(`
              flex flex-col items-center gap-12
              md:flex-row
            `)}
          >
            <img
              src="/assets/mark.png"
              alt="Mark cartoon portrait"
              className="size-70"
            />
            <div className="flex w-2/3 flex-col gap-4 self-center text-lg">
              <p
                className={ctl(`
                  text-center text-sm
                  sm:text-lg
                  md:text-start
                `)}
              >
                Graduated at the Polytechnic University of the Philippines, I
                have been taught the important values of perseverance, hard
                work, and determination. Towards my dream as a software
                developer, I strive to build impactful, efficient, and
                innovative software solutions while continually learning,
                growing, and turning challenges into opportunities.
              </p>
              <div
                className={ctl(`
                  mt-4 text-center
                  md:text-start
                `)}
              >
                <button
                  className={ctl(`
                    cursor-pointer rounded-lg border-2 border-gray-800 bg-slate-950 px-4 py-2
                    transition duration-300 ease-out
                    hover:scale-105 hover:border-[var(--secondary-color)]
                    hover:bg-[var(--tertiary-color)]
                  `)}
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1rrHHE0-k_E73su-44bfAtZIRFcDoY5C_/view?usp=sharing",
                      "_blank"
                    )
                  }
                >
                  <FileText className="mr-4 inline size-8" />
                  Resume
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2
            className={ctl(`
              mb-4 text-center text-4xl font-semibold
              md:text-start
            `)}
          >
            My Tech Stacks
          </h2>
          <div
            className={ctl(`
              flex flex-wrap justify-center gap-4
              md:justify-start
              [&_img]:size-12
            `)}
          >
            {tools.map((tool) => (
              <div data-tooltip- className="rounded-md bg-blue-950 p-2">
                <img src={tool.img} alt={tool.name} />
              </div>
            ))}
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default AboutBlock;
