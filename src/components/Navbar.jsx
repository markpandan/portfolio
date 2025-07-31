import ResponsiveContainer from "./ResponsiveContainer";

const Navbar = () => {
  return (
    <nav className={`sticky top-0 px-2 py-4 text-white`}>
      <ResponsiveContainer>
        <div className="absolute">markpandan</div>
        <div
          className={`
            flex grow justify-end gap-8 text-center
            *:cursor-pointer
          `}
        >
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </ResponsiveContainer>
    </nav>
  );
};

export default Navbar;
