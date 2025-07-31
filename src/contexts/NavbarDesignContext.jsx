import { createContext, useMemo, useState } from "react";

const NavbarDesignContext = createContext();

export const NavbarDesignProvider = ({ children }) => {
  // Required value: { scrollTop, scrollBottom, design }
  const [breakpoints, setBreakpoints] = useState([]);

  const value = useMemo(() => ({ breakpoints, setBreakpoints }), [breakpoints]);

  return (
    <NavbarDesignContext.Provider value={value}>
      {children}
    </NavbarDesignContext.Provider>
  );
};

export default NavbarDesignContext;
