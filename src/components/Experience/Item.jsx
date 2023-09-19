const Item = ({ item }) => {
  const { title, content, id } = item;
  return (
    <li>
      <h2 className="pt-4 text-lg font-semibold uppercase tracking-wide">
        <span className="inline-block w-8">{id < 10 ? `0${id}` : id} </span>
        {title}
      </h2>
      <p className="content ml-8 pb-2 dark:border-slate-300 ">{content}</p>
    </li>
  );
};

export default Item;
