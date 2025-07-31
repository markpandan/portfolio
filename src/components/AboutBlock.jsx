import { useRef } from "react";
import useNavbarBreakpoint from "../hooks/useNavbarBreakpoint";
import ResponsiveContainer from "./ResponsiveContainer";
import ctl from "@netlify/classnames-template-literals";

const AboutBlock = () => {
  const aboutRef = useRef(null);

  useNavbarBreakpoint(
    aboutRef,
    ctl(`sticky top-0 bg-[var(--primary-color)] px-2 py-4 text-white`)
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
                <button className="border-1 px-4">Resume</button>
              </div>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default AboutBlock;
