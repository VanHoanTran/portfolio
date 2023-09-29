const Skill = ({ item }) => {
  return (
    <li className="m-2 flex items-center space-x-4 rounded-xl border border-slate-700  px-4 py-2 dark:border-slate-300">
      <img width="20px" height="20px" src={item.icon} alt={item.name} />
      <span>{item.name}</span>
    </li>
  );
};

export default Skill;
