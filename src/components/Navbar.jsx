import ctl from "@netlify/classnames-template-literals";
import { useEffect, useState } from "react";
import useNavbarDesign from "../hooks/useNavbarDesign";
import ResponsiveContainer from "./ResponsiveContainer";

const Navbar = () => {
  const { breakpoints } = useNavbarDesign();
  const [design, setDesign] = useState(
    ctl(`sticky top-0 z-10 px-2 py-4 text-white transition-all duration-800`)
  );

  const scrollInto = (id) => {
    const element = document.querySelector(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    console.log(breakpoints);
    const onScroll = () => {
      const scrollY = window.scrollY;
      for (const breakpoint of breakpoints) {
        if (
          scrollY >= breakpoint.scrollTop &&
          scrollY <= breakpoint.scrollBottom
        )
          setDesign(breakpoint.design);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [breakpoints]);

  return (
    <nav className={design}>
      <ResponsiveContainer>
        <div className="absolute">markpandan</div>
        <div
          className={ctl(`
            flex grow justify-end gap-8 text-center
            *:cursor-pointer
          `)}
        >
          <button
            onClick={() => {
              scrollInto("#about");
            }}
          >
            About
          </button>
          <button
            onClick={() => {
              scrollInto("#projects");
            }}
          >
            Projects
          </button>
          <button
            onClick={() => {
              scrollInto("#contact");
            }}
          >
            Contact
          </button>
        </div>
      </ResponsiveContainer>
    </nav>
  );
};

export default Navbar;
