import { Bio } from "/src/data/Bio";

const Logo = () => {
  return (
    <div className=" link-hover min-w-max cursor-pointer text-3xl font-bold">
      {Bio.author}
    </div>
  );
};

export default Logo;
