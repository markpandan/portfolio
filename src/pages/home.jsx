import ProjectCard from "../components/ProjectCard";

const Home = () => {
  return (
    <>
      <div className="flex h-128 items-center gap-8 py-18">
        <div className="w-2/3 text-end">
          <h1 className="text-4xl font-bold">Hi, everyone!</h1>
          <p>
            My name is Mark Anthony Pandan. An aspiring, and enthusiastic
            developer!
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
          <ProjectCard
            title={"BuzzChat"}
            tags={[
              "React",
              "Javascript",
              "Express JS",
              "Tailwind CSS",
              "PostgreSQL",
            ]}
          >
            A messaging web app that allows you to send messages, and images to
            other users. The account, and messages were securely managed via
            REST API.
          </ProjectCard>
          <ProjectCard
            title={"SkyShare"}
            tags={["Javascript", "Express JS", "PostgreSQL"]}
          >
            A cloud storage platform that utilizes a virtual storage to create
            folders, upload files, and share them publicly. The application also
            allows to create an account that uses JWT (JSON Web Token) as a
            login authentication
          </ProjectCard>
          <ProjectCard
            title={"PixelHunt"}
            tags={[
              "React",
              "Javascript",
              "Express JS",
              "Tailwind CSS",
              "PostgreSQL",
            ]}
          >
            A web app game version of "Where's Waldo" which you need to find
            certain characters in the picture, and post your highscore
            anonymously. Implements a REST API to send, receive data, and secure
            the score points to avoid tampering.
          </ProjectCard>
          <ProjectCard
            title={"EchoBoard"}
            tags={["Javascript", "Express JS", "PostgreSQL"]}
          >
            A web app that allows you to post secretly among the permitted
            members. Uses a login authentication, and specific permission
            structures to handle privacy of posting, and moderate contents
            submitted.
          </ProjectCard>
        </div>
      </div>
    </>
  );
};

export default Home;
