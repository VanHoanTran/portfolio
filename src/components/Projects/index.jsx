import { projects } from "@data/projects.js";
import Project from "./Project";
const Projects = () => {
  return (
    <section
      id="projects"
      className=" mt-8 max-w-full scroll-mt-24 px-8 lg:px-16"
    >
      <h1 className="border-b border-slate-700  pb-2 text-3xl font-semibold uppercase tracking-wide dark:border-slate-300 lg:text-4xl">
        Projects
      </h1>

      <ul className="mt-4 flex flex-col flex-wrap items-center justify-center py-4 lg:py-8 lg:pr-10 ">
        {projects.map((project, index) => (
          <Project project={project} key={project.id} index={index} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
