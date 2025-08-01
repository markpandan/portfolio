import { useEffect } from "react";
import useNavbarDesign from "./useNavbarDesign";

<<<<<<< HEAD
const useNavbarBreakpoint = ({ key, componentRef, color, behaviour }) => {
=======
const useNavbarBreakpoint = ({
  key,
  componentRef,
  navDesign,
  collapseDesign,
}) => {
>>>>>>> navbar
  const { setBreakpoints } = useNavbarDesign();

  useEffect(() => {
    if (!componentRef.current) return;

    const offset = componentRef.current.getBoundingClientRect();

    const offsetBreakpoint = 56;

    const scrollTop =
      Math.round(offset.top) + window.scrollY - offsetBreakpoint;
    const scrollBottom =
      Math.round(offset.bottom) + window.scrollY + offsetBreakpoint;

    setBreakpoints((breakpoints) => {
      const isDuplicate = breakpoints.find((value) => value.key == key);

      if (isDuplicate) {
        return breakpoints.map((breakpoint) => {
          if (isDuplicate.key == breakpoint.key) {
<<<<<<< HEAD
            return { key, scrollTop, scrollBottom, color, behaviour };
=======
            return {
              key,
              scrollTop,
              scrollBottom,
              navDesign,
              collapseDesign,
            };
>>>>>>> navbar
          }
          return breakpoint;
        });
      } else {
        return [
          ...breakpoints,
          {
            key,
            scrollTop,
            scrollBottom,
<<<<<<< HEAD
=======
            navDesign,
            collapseDesign,
>>>>>>> navbar
          },
        ];
      }
    });
<<<<<<< HEAD
  }, [componentRef, setBreakpoints, color, key, behaviour]);
=======
  }, [componentRef, setBreakpoints, key, navDesign, collapseDesign]);
>>>>>>> navbar
};

export default useNavbarBreakpoint;
