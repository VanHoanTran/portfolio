import useScroll from "../../hooks/useScroll";
import Skill from "../Education/Skill";
const Project = ({ project }) => {
  const { inView, ref } = useScroll();
  console.log(project);
  return (
    <li
      ref={ref}
      className={`mx-1 my-4 grid min-h-fit grid-cols-12  ${
        inView ? "animate-slide-in " : "animate-slide-out"
      }  items-center justify-between rounded-lg border border-slate-400 bg-slate-600  shadow-md  shadow-slate-600 transition  duration-700 first:text-slate-100  dark:text-slate-100  dark:shadow-none `}
    >
      <div className=" order-2 col-span-12 flex min-h-[140px] flex-col  px-1 md:px-4 lg:order-1 lg:col-span-3">
        <h2 className="col-span-full pb-2 pt-2 text-center text-lg font-semibold uppercase tracking-wide lg:text-xl">
          {project.title}
        </h2>
        <p className=" px-2 text-left text-sm italic">{project.description}</p>
        <h6 className="mt-2 text-lg">Tech Stack</h6>
        <ul className=" flex flex-wrap italic">
          {project.techStack.map((tech, index) => (
            <Skill key={index} small={true} item={tech} />
          ))}
        </ul>
      </div>
      <div className="order-1 col-span-full flex max-h-[60vh] min-w-fit items-center justify-center overflow-hidden rounded-t-lg duration-1000 ease-out lg:order-2 lg:col-span-9 lg:col-start-4 lg:translate-x-16 lg:items-start lg:rounded-l-none lg:rounded-r-lg xl:translate-x-0 ">
        <img className="l lg:rounded-lg" src={project.image} />
      </div>
    </li>
  );
};

export default Project;
