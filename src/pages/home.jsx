import ProjectCard from "../components/ProjectCard";

const Home = () => {
  return (
    <>
      <div className="flex h-128 items-center gap-4 py-18">
        <div className="w-2/3 text-end">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic provident
          ratione delectus quae consequatur necessitatibus quis voluptatum
          accusamus vel nisi reprehenderit beatae fuga facilis, eos iure dolores
          sint omnis asperiores!
        </div>
        <div className="h-full w-1/3 border-1"></div>
      </div>
      <div className="py-18">
        <h2 className="mb-4 text-2xl">About Me</h2>
        <div className="flex h-64 gap-4">
          <div className="w-1/3 border-1"></div>
          <div className="w-2/3 self-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            officia at voluptatem consectetur, hic, rerum ut iste illo excepturi
            cupiditate impedit nisi vel ab quas sapiente reiciendis, quam
            tempora quasi?
          </div>
        </div>
      </div>
      <div className="py-18">
        <h2 className="mb-4 text-2xl">My Projects</h2>
        <div className="grid grid-cols-4 gap-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </>
  );
};

export default Home;
