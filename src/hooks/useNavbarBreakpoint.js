import { useEffect } from "react";
import useNavbarDesign from "./useNavbarDesign";

const useNavbarBreakpoint = (componentRef, designValue) => {
  const { setBreakpoints } = useNavbarDesign();

  useEffect(() => {
    if (!componentRef.current) return;

    const offset = componentRef.current.getBoundingClientRect();

    const offsetBreakpoint = 56;

    const scrollTop =
      Math.round(offset.top) + window.scrollY - offsetBreakpoint;
    const scrollBottom =
      Math.round(offset.bottom) + window.scrollY + offsetBreakpoint;
    const design = designValue;

    setBreakpoints((breakpoints) => {
      const isDuplicate = breakpoints.find(
        (value) =>
          value.scrollTop == scrollTop &&
          value.scrollBottom == scrollBottom &&
          value.design == design
      );

      if (isDuplicate) {
        return breakpoints;
      } else {
        return [
          ...breakpoints,
          {
            scrollTop,
            scrollBottom,
            design,
          },
        ];
      }
    });
  }, [componentRef, setBreakpoints, designValue]);
};

export default useNavbarBreakpoint;
