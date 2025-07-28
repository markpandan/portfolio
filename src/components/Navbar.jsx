const Navbar = () => {
  return (
    <nav className={`sticky top-0 border-b-1 bg-white px-2 py-4`}>
      <div className="absolute">Nav Title</div>
      <div
        className={`
          flex grow justify-center gap-8 text-center
          *:cursor-pointer
        `}
      >
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
