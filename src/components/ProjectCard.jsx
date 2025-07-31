import ProjectTag from "./ProjectTag";
import { Globe, Github } from "react-bootstrap-icons";

const ProjectCard = ({ title, tags = [], links = {}, children, image }) => {
  return (
    <div
      className={`
        group relative flex h-100 flex-col overflow-hidden rounded-xl border-2 border-gray-800
        transition-all duration-300 select-none
        hover:scale-105
      `}
    >
      <img
        src={image}
        className="h-3/5 border-b-2 border-gray-800 object-cover"
        alt={title}
      />
      <div className="flex h-2/5 flex-col gap-4 bg-gray-950 p-4">
        <h2 className="text-2xl font-bold text-[var(--tertiary-color)]">
          {title}
        </h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((value, index) => (
            <ProjectTag key={index}>{value}</ProjectTag>
          ))}
        </div>
      </div>
      <div
        className={`
          absolute hidden h-full w-full items-center justify-center gap-4
          bg-[var(--secondary-color)] px-12 py-4
          group-hover:flex group-hover:flex-col
        `}
      >
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{children}</p>
        <div
          className={`
            flex gap-4
            *:cursor-pointer
          `}
        >
          {links.website && (
            <Globe
              className="size-6"
              onClick={() => window.open(links.website, "_blank")}
            />
          )}
          {links.github && (
            <Github
              className="size-6"
              onClick={() => window.open(links.github, "_blank")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
