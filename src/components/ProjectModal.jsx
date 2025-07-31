import ctl from "@netlify/classnames-template-literals";
import { XLg, Globe, Github } from "react-bootstrap-icons";

const ProjectModal = ({ project, onCloseClick }) => {
  return (
    <div
      className={ctl(`
        fixed top-0 z-5 flex h-screen w-screen items-center justify-center
        bg-[var(--primary-color)]/80
      `)}
    >
      <div
        className={ctl(
          `relative w-2/3 overflow-hidden rounded-2xl bg-[var(--secondary-color)] p-4 pb-12`
        )}
      >
        <button className="absolute right-4" onClick={onCloseClick}>
          <XLg />
        </button>
        <div className="flex h-full flex-col justify-center gap-4">
          <h1 className="text-lg font-bold">{project.name}</h1>
          <p className="text-sm">{project.description}</p>
          <div
            className={ctl(`
              flex justify-center gap-4
              *:cursor-pointer
            `)}
          >
            {project.links.website && (
              <Globe
                className="size-6"
                onClick={() => window.open(project.links.website, "_blank")}
              />
            )}
            {project.links.github && (
              <Github
                className="size-6"
                onClick={() => window.open(project.links.github, "_blank")}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
