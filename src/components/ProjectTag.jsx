const ProjectTag = ({ children }) => {
  const newLocal = `
        rounded-xl bg-[var(--tertiary-color)] px-2 py-1 text-sm text-[var(--primary-color)]  
      `;
  return <p className={newLocal}>{children}</p>;
};

export default ProjectTag;
