import Background from "../components/Background";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ProjectCard from "../components/ProjectCard";
import projects from "../db/projects.json";
import tags from "../db/tags.json";

const Home = () => {
  return (
    <>
      <Background />
      <div className="flex h-[90vh] items-center text-center text-white">
        <ResponsiveContainer>
          <div className="flex flex-col items-center gap-8 select-none">
            <h1 className="text-7xl font-semibold">
              Hi, I'm{" "}
              <span className="text-[var(--tertiary-color)]">
                Mark Anthony Pandan
              </span>
            </h1>
            <p className="text-3xl">
              An aspiring, and enthusiastic developer! <br /> Preparing to start
              my journey in the web development career.
            </p>
            <button
              className={`
                w-max rounded-lg border-2 border-gray-500 bg-[var(--primary-color)] px-4 py-2
              `}
            >
              See more
            </button>
          </div>
        </ResponsiveContainer>
      </div>
      <div className="bg-[var(--secondary-color)] py-50 text-white">
        <ResponsiveContainer>
          <div id="about" className="py-18">
            <h2 className="mb-4 text-4xl font-semibold">About Me</h2>
            <div className="flex gap-12">
              <img
                src="/public/assets/mark.png"
                alt="Mark cartoon portrait"
                srcset=""
                className="size-70"
              />
              <div className="flex w-2/3 flex-col gap-4 self-center text-lg">
                <p>
                  Graduated at the Polytechnic University of the Philippines, I
                  have been taught the important values of perseverance, hard
                  work, and determination. Towards my dream as a software
                  developer, I strive to build impactful, efficient, and
                  innovative software solutions while continually learning,
                  growing, and turning challenges into opportunities.
                </p>
                <div>
                  <button className="border-1 px-4">Resume</button>
                </div>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </div>

      <div className="bg-[var(--primary-color)] py-50 text-white">
        <ResponsiveContainer>
          <div id="projects" className="py-18">
            <h2 className="mb-4 text-4xl font-semibold text-[var(--tertiary-color)]">
              My Projects
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {projects.map((project) => {
                const stringTags = project.tags.map(
                  (value) => tags[value].name
                );
                return (
                  <ProjectCard
                    key={project.id}
                    title={project.name}
                    tags={stringTags}
                    links={project.links}
                  >
                    {project.description}
                  </ProjectCard>
                );
              })}
            </div>
          </div>
        </ResponsiveContainer>
        <ResponsiveContainer>
          <div id="contact" className="pt-4 pb-24">
            <div className="rounded-2xl border-2 bg-[var(--secondary-color)] p-8 text-white">
              <h2 className="mb-8 text-center text-4xl font-semibold">
                Get In Touch
              </h2>
              <p className="text-center text-xl">
                Send an email to me at{" "}
                <span className="underline">markanthonypandan26@gmail.com</span>
              </p>
            </div>
          </div>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Home;
