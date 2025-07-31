import projects from "../db/projects.json";
import tags from "../db/tags.json";
import ProjectCard from "./ProjectCard";
import ResponsiveContainer from "./ResponsiveContainer";

const ProjectsBlock = () => {
  return (
    <ResponsiveContainer>
      <div className="py-18">
        <h2 className="mb-4 text-4xl font-semibold text-[var(--tertiary-color)]">
          My Projects
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {projects.map((project) => {
            const stringTags = project.tags.map((value) => tags[value].name);
            return (
              <ProjectCard
                key={project.id}
                title={project.name}
                tags={stringTags}
                links={project.links}
                image={project.thumbnail}
              >
                {project.description}
              </ProjectCard>
            );
          })}
        </div>
      </div>
    </ResponsiveContainer>
  );
};

export default ProjectsBlock;
