import ProjectCard from "../components/ProjectCard";
import projects from "../db/projects.json";
import tags from "../db/tags.json";

const Home = () => {
  return (
    <>
      <div className="flex h-128 items-center gap-8 py-18">
        <div className="w-2/3 text-end">
          <h1 className="text-4xl font-bold">Hi, everyone!</h1>
          <p>
            My name is <strong>Mark Anthony Pandan</strong>. An aspiring, and
            enthusiastic developer! Preparing to start my journey in this
            career.
          </p>
        </div>
        <div className="flex h-full w-1/3 items-center justify-center border-1 italic">
          picture of you waving hands :)
        </div>
      </div>
      <div id="about" className="py-18">
        <h2 className="mb-4 text-2xl">About Me</h2>
        <div className="flex h-64 gap-4">
          <div className="w-1/3 border-1"></div>
          <div className="flex w-2/3 flex-col gap-4 self-center">
            <p>
              Graduated at the Polytechnic University of the Philippines, I have
              been taught the important values of perseverance, hard work, and
              determination. Towards my dream as a software developer, I strive
              to build impactful, efficient, and innovative software solutions
              while continually learning, growing, and turning challenges into
              opportunities.
            </p>
            <div>
              <button className="border-1 px-4">Resume</button>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="py-18">
        <h2 className="mb-4 text-2xl">My Projects</h2>
        <div className="grid grid-cols-4 gap-4">
          {projects.map((project) => {
            const stringTags = project.tags.map((value) => tags[value].name);

            return (
              <ProjectCard
                key={project.id}
                title={project.name}
                tags={stringTags}
              >
                {project.description}
              </ProjectCard>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
