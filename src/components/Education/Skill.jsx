const Skill = ({ item, small }) => {
  return (
    <li
      className={`m-2 ${
        small ? "space-x-2 text-sm" : "space-x-4"
      } flex items-center  rounded-xl border  border-slate-700 px-4 py-2  hover:translate-y-[-2px] hover:shadow-lg hover:shadow-slate-400  dark:border-slate-300 dark:hover:shadow-slate-500`}
    >
      {item.icon && (
        <img width="20px" height="20px" src={item.icon} alt={item.name} />
      )}
      <span>{item.name}</span>
    </li>
  );
};

export default Skill;
