import { useRef } from "react";
import useNavbarBreakpoint from "../hooks/useNavbarBreakpoint";
import ResponsiveContainer from "./ResponsiveContainer";
import ctl from "@netlify/classnames-template-literals";

const Jumbotron = () => {
  const jumbotronRef = useRef(null);

  useNavbarBreakpoint(
    "jumbotron",
    jumbotronRef,
    ctl(`sticky top-4 px-2 py-4 text-white`)
  );

  return (
    <div
      ref={jumbotronRef}
      className="flex h-[90vh] items-center text-center text-white"
    >
      <ResponsiveContainer>
        <div className="flex flex-col items-center gap-8 select-none">
          <h1 className="text-7xl font-semibold">
            Hi, I'm{" "}
            <span className="text-[var(--tertiary-color)]">
              Mark Anthony Pandan
            </span>
          </h1>
          <p className="text-3xl">
            An aspiring, and enthusiastic developer! <br /> Preparing to start
            my journey in the web development career.
          </p>
          <button
            className={`
              w-max rounded-lg border-2 border-gray-500 bg-[var(--primary-color)] px-4 py-2
            `}
          >
            See more
          </button>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default Jumbotron;
