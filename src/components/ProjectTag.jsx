import ctl from "@netlify/classnames-template-literals";

const ProjectTag = ({ children }) => {
  return (
    <p
      className={ctl(`
        rounded-xl border-1 border-[var(--tertiary-color)] px-2 py-1 text-sm
        text-[var(--tertiary-color)]
      `)}
    >
      {children}
    </p>
  );
};

export default ProjectTag;
