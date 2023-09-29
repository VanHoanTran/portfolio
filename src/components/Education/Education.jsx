import { Edu } from "../../data/Edu";
import Item from "./Item";

const Education = () => {
  const expList = [
    {
      id: 1,
      title: "Diam quam nulla porttitor",
      content:
        "Diam quam nulla porttitor massa id. Non odio euismod lacinia at quis risus sed vulputate odio. Consequat interdum varius sit amet mattis vulputate. Proin sed libero enim sed faucibus turpis in eu. Diam quam nulla porttitor massa id. Non odio euismod lacinia at quis risus sed vulputate odio. Consequat interdum varius sit amet mattis vulputate.",
    },
    {
      id: 2,
      title: "Non odio euismod",
      content:
        "Diam quam nulla porttitor massa id. Non odio euismod lacinia at quis risus sed vulputate odio. Consequat interdum varius sit amet mattis vulputate. Enim sit amet venenatis urna cursus.Diam quam nulla porttitor massa id. Non odio euismod lacinia at quis risus sed vulputate odio. Consequat interdum varius sit amet mattis vulputate.",
    },
    {
      id: 3,
      title: "Consequat interdum varius",
      content:
        "Diam quam nulla porttitor massa id. Non odio euismod lacinia at quis risus sed vulputate odio. Consequat interdum varius sit amet mattis vulputate. Diam quam nulla porttitor massa id. Non odio euismod lacinia at quis risus sed vulputate odio. Consequat interdum varius sit amet mattis vulputate.",
    },
  ];
  return (
    <div
      id="education"
      className=" mt-8 max-w-full scroll-mt-24 px-8 lg:mt-16 lg:px-16"
    >
      <h1 className="border-b border-slate-700  pb-2 text-3xl font-semibold uppercase tracking-wide dark:border-slate-300 lg:text-4xl">
        Education & Skills
      </h1>
      <section className=" grid grid-cols-1 lg:grid-cols-2 lg:space-x-8">
        <div className="pt-4">
          <p className="indent-4 text-lg leading-8 lg:text-xl">{Edu.desc}</p>
          <div className="flex justify-center">
            <div className=" flex items-center justify-center p-4 grayscale  ">
              <img src="/certificate.png" alt="skill" />
            </div>
          </div>
        </div>
        <ul className=" divide-y divide-slate-700 dark:divide-slate-300">
          {expList.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Education;
