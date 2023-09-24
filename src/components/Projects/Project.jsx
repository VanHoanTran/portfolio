const Project = ({ project }) => {
  return (
    <li className="mx-1 my-4 flex h-[16rem] w-[14rem] flex-shrink-0 flex-col items-center justify-between rounded-lg border border-slate-700 bg-slate-100 p-4 first:bg-red-400 first:text-slate-50 dark:border-slate-300 dark:bg-slate-500 dark:text-slate-50 dark:first:bg-red-400 lg:odd:rotate-[10deg] lg:even:rotate-[-10deg]  ">
      <h2 className="text-lg font-semibold uppercase tracking-wide">
        {project.title}
      </h2>
      <p className="text-center">{project.description}</p>
      <p>{project.startDate}</p>
    </li>
  );
};

export default Project;
