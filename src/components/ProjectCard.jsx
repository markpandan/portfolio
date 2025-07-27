import ProjectTag from "./ProjectTag";

const ProjectCard = () => {
  return (
    <div
      className={`
        group relative flex h-80 flex-col overflow-hidden rounded-2xl border-1 select-none
      `}
    >
      <div className="h-3/5 border-b-1"></div>
      <div className="flex h-2/5 flex-col gap-2 p-2">
        <h2 className="text-lg">Project Title</h2>
        <div className="flex flex-wrap gap-2">
          <ProjectTag>React</ProjectTag>
          <ProjectTag>Javascript</ProjectTag>
          <ProjectTag>Express</ProjectTag>
          <ProjectTag>Tailwind Css</ProjectTag>
        </div>
      </div>
      <div
        className={`
          absolute hidden h-full w-full items-center justify-center gap-4 bg-white p-4
          group-hover:flex group-hover:flex-col
        `}
      >
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde natus
          iste autem commodi saepe maiores, mollitia ipsam deserunt ducimus
          temporibus fuga dolor aut, aperiam quis cumque excepturi consequuntur
          odio accusantium?
        </p>
        <button className="cursor-pointer border-1 px-2">Visit Website</button>
      </div>
    </div>
  );
};

export default ProjectCard;
