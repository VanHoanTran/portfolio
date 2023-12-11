import useScroll from "../../hooks/useScroll";

const Project = ({ project }) => {
  const { inView, ref } = useScroll();
  return (
    <li
      ref={ref}
      className={`mx-1 my-4 flex h-[50vh] w-[40vw] flex-shrink-0  ${
        inView ? "animate-slide-in " : "animate-slide-out"
      } flex-col items-center justify-between rounded-lg  bg-slate-50 p-4 shadow-md shadow-slate-600  transition duration-700 first:bg-rose-400 first:text-slate-100 dark:bg-slate-500 dark:text-slate-100 dark:shadow-none dark:first:bg-rose-400 `}
    >
      <h2 className="text-xl font-semibold uppercase tracking-wide">
        {project.title}
      </h2>
      <p className="text-center">{project.description}</p>
      <p className="text-sm italic">{project.startDate}</p>
    </li>
  );
};

export default Project;
