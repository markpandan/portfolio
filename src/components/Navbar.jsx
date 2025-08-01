import ctl from "@netlify/classnames-template-literals";
import { useEffect, useState } from "react";
import useNavbarDesign from "../hooks/useNavbarDesign";
import ResponsiveContainer from "./ResponsiveContainer";
import { List, XLg } from "react-bootstrap-icons";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const Navbar = () => {
  const { breakpoints } = useNavbarDesign();
  const [color, setColor] = useState("");
  const [behaviour, setBehaviour] = useState("");

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    console.log(breakpoints);

    const onScroll = () => {
      const scrollY = window.scrollY;
      for (const breakpoint of breakpoints) {
        if (
          scrollY >= breakpoint.scrollTop &&
          scrollY <= breakpoint.scrollBottom
        ) {
          setColor(breakpoint.color);
          setBehaviour(breakpoint.behaviour);
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [breakpoints]);

  return (
    <Disclosure
      as={"nav"}
      className={ctl(
        `
          sticky top-0 z-10 m-auto w-full
          ${color}
          text-white transition-all
          ${behaviour}
        `
      )}
    >
      <div className={"px-2 py-4"}>
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
            <DisclosureButton
              className={ctl(`
                group block
                xs:hidden
              `)}
            >
              <List
                className={ctl(`
                  block size-6 cursor-pointer
                  group-data-open:hidden
                `)}
              />
              <XLg
                className={ctl(
                  `
                    hidden size-6 cursor-pointer
                    group-data-open:block
                  `
                )}
              />
            </DisclosureButton>
            <div
              className={ctl(`
                hidden gap-8 text-center
                xs:flex
              `)}
            >
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </ResponsiveContainer>
      </div>
      <DisclosurePanel
        className={ctl(`
          ${color}
          px-2 py-4 transition-colors
        `)}
      >
        <ResponsiveContainer>
          <div className="flex w-full flex-col gap-4">
            {navigation.map((item) => (
              <DisclosureButton key={item.href} as={"a"} href={item.href}>
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </ResponsiveContainer>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
