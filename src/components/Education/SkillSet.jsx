import Skill from "./Skill";

const SkillSet = ({ skillSet, index }) => {
  const { title, languages } = skillSet;

  return (
    <li>
      <h2 className="pt-4 text-lg font-semibold uppercase tracking-wide">
        <span className="inline-block w-8">
          {index + 1 < 10 ? `0${index + 1}` : index}{" "}
        </span>
        {title}
      </h2>
      <ul className="flex flex-wrap">
        {languages.map((item) => (
          <Skill item={item} key={item.name} />
        ))}
      </ul>
    </li>
  );
};

export default SkillSet;
