const Navbar = () => {
  return (
    <nav className={`relative border-b-1 px-2 py-4`}>
      <div className="absolute">Nav Title</div>
      <div
        className={`
          flex grow justify-center gap-8 text-center
          *:cursor-pointer
        `}
      >
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </nav>
  );
};

export default Navbar;
