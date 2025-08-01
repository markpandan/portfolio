import ctl from "@netlify/classnames-template-literals";
import { useEffect, useState } from "react";
import useNavbarDesign from "../hooks/useNavbarDesign";
import ResponsiveContainer from "./ResponsiveContainer";
import { List } from "react-bootstrap-icons";

const Navbar = () => {
  const { breakpoints } = useNavbarDesign();
  const [design, setDesign] = useState(
    ctl(`sticky top-0 z-10 px-2 py-4 text-white transition-all duration-800`)
  );

  // const scrollInto = (id) => {
  //   const element = document.querySelector(id);
  //   element.scrollIntoView({ behavior: "smooth" });
  // };

  useEffect(() => {
    // console.log(breakpoints);

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
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="absolute cursor-pointer"
        >
          markpandan
        </button>
        <div
          className={ctl(`
            flex grow justify-end
            *:cursor-pointer
          `)}
        >
          <button
            className={ctl(`
              block
              xs:hidden
            `)}
          >
            <List className="size-6 cursor-pointer" />
          </button>
          <div
            className={ctl(`
              hidden gap-8 text-center
              xs:flex
            `)}
          >
            <button onClick={() => (location.href = "#about")}>About</button>
            <button onClick={() => (location.href = "#projects")}>
              Projects
            </button>
            <button onClick={() => (location.href = "#contact")}>
              Contact
            </button>
          </div>
        </div>
      </ResponsiveContainer>
    </nav>
  );
};

export default Navbar;
