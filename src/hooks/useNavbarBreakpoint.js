import { useEffect } from "react";
import useNavbarDesign from "./useNavbarDesign";

const useNavbarBreakpoint = ({ key, componentRef, color, behaviour }) => {
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
            return { key, scrollTop, scrollBottom, color, behaviour };
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
          },
        ];
      }
    });
  }, [componentRef, setBreakpoints, color, key, behaviour]);
};

export default useNavbarBreakpoint;
