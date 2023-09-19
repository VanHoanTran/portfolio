import Project from "./Project";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "This is the description for Project 1",
    startDate: "2023-01-15",
    endDate: "2023-03-30",
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is the description for Project 2",
    startDate: "2023-02-10",
    endDate: "2023-04-25",
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is the description for Project 3",
    startDate: "2023-03-20",
    endDate: "2023-06-15",
  },
  {
    id: 4,
    title: "Project 4",
    description: "This is the description for Project 4",
    startDate: "2023-04-05",
    endDate: "2023-07-10",
  },
  {
    id: 5,
    title: "Project 5",
    description: "This is the description for Project 5",
    startDate: "2023-05-12",
    endDate: "2023-08-20",
  },
];
const Projects = () => {
  return (
    <div className="mt-8 max-w-full px-8 lg:mt-16 lg:px-16">
      <h1 className="border-b border-slate-700  pb-2 text-3xl font-semibold uppercase tracking-wide dark:border-slate-300 lg:text-4xl">
        Projects
      </h1>
      <ul className="  mt-4 flex flex-wrap items-center justify-center py-16 ">
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
