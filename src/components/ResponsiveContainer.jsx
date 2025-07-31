import ctl from "@netlify/classnames-template-literals";

const ResponsiveContainer = ({ children }) => {
  return (
    <div
      className={ctl(`
        m-auto max-w-6xl px-4
        xl:px-0
      `)}
    >
      {children}
    </div>
  );
};

export default ResponsiveContainer;
