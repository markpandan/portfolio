import ctl from "@netlify/classnames-template-literals";
import { useState } from "react";
import projects from "../db/projects.json";
import tags from "../db/tags.json";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import ResponsiveContainer from "./ResponsiveContainer";

const ProjectsBlock = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [activeProjectDisplay, setActiveProjectDisplay] = useState(null);

  const handleTitleClick = (project) => {
    setIsModalActive(true);
    setActiveProjectDisplay(project);
  };

  return (
    <>
      {isModalActive && (
        <ProjectModal
          project={activeProjectDisplay}
          onCloseClick={() => setIsModalActive(false)}
        />
      )}
      <ResponsiveContainer>
        <div className="py-18">
          <h2 className="mb-4 text-4xl font-semibold text-[var(--tertiary-color)]">
            My Projects
          </h2>
          <div
            className={ctl(`
              grid grid-cols-1 gap-4
              md:grid-cols-2
              xl:grid-cols-3
            `)}
          >
            {projects.map((project) => {
              const stringTags = project.tags.map((value) => tags[value].name);
              return (
                <ProjectCard
                  key={project.id}
                  title={project.name}
                  tags={stringTags}
                  links={project.links}
                  image={project.thumbnail}
                  onTitleClick={() => handleTitleClick(project)}
                >
                  {project.description}
                </ProjectCard>
              );
            })}
          </div>
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default ProjectsBlock;
