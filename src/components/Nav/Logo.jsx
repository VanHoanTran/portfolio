import { bio } from "@data/bio.js";

const Logo = () => {
  return (
    <div className=" link-hover min-w-max cursor-pointer text-3xl font-bold">
      {bio.author}
    </div>
  );
};

export default Logo;
