import { useContext } from "react";
import NavbarDesignContext from "../contexts/NavbarDesignContext";

const useNavbarDesign = () => {
  return useContext(NavbarDesignContext);
};

export default useNavbarDesign;
