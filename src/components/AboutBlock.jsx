import ctl from "@netlify/classnames-template-literals";
import { useRef } from "react";
import { FileText } from "react-bootstrap-icons";
import useNavbarBreakpoint from "../hooks/useNavbarBreakpoint";
import ResponsiveContainer from "./ResponsiveContainer";

const AboutBlock = () => {
  const aboutRef = useRef(null);

  useNavbarBreakpoint(
    "about",
    aboutRef,
    ctl(
      `
        sticky top-4 z-10 m-auto box-content max-w-6xl rounded-3xl bg-[var(--primary-color)] px-4
        py-4 text-white transition-all
      `
    )
  );

  return (
    <div
      ref={aboutRef}
      id="about"
      className="bg-[var(--secondary-color)] py-50 text-white"
    >
      <ResponsiveContainer>
        <div className="py-18">
          <h2 className="mb-4 text-4xl font-semibold">About Me</h2>
          <div className="flex gap-12">
            <img
              src="/assets/mark.png"
              alt="Mark cartoon portrait"
              className="size-70"
            />
            <div className="flex w-2/3 flex-col gap-4 self-center text-lg">
              <p>
                Graduated at the Polytechnic University of the Philippines, I
                have been taught the important values of perseverance, hard
                work, and determination. Towards my dream as a software
                developer, I strive to build impactful, efficient, and
                innovative software solutions while continually learning,
                growing, and turning challenges into opportunities.
              </p>
              <div>
                <button
                  className={`
                    cursor-pointer rounded-lg border-2 border-gray-800 bg-slate-950 px-4 py-2
                    transition duration-300 ease-out
                    hover:scale-105 hover:border-[var(--secondary-color)]
                    hover:bg-[var(--tertiary-color)]
                  `}
                  tra
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
      </ResponsiveContainer>
    </div>
  );
};

export default AboutBlock;
