const Container = ({ children }) => {
  return (
    <div
      className={`
        m-auto max-w-6xl px-4
        xl:px-0
      `}
    >
      {children}
    </div>
  );
};

export default Container;
