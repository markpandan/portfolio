import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <div
        className={`
          m-auto max-w-6xl px-4
          xl:px-0
        `}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
