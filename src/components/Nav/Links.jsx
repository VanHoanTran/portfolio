import DarkModeToggle from "./DarkModeToggle";
import NavLink from "./NavLink";
import { NavOptions } from "/src/constants/NavOptions";
import MobileLinks from "./MobileLinks";

const Links = () => {
  return (
    <div className="flex items-center justify-between space-x-4">
      <p className="line-clamp-2 hidden max-w-[200px] lg:inline-block">
        Open for any offers and collaborations
      </p>
      <ul className="hidden min-w-fit space-x-8 rounded-full border border-slate-500 py-1 pl-4 pr-1 transition-all md:flex">
        {NavOptions.map(({ label, section, type }) => (
          <NavLink key={label} label={label} section={section} type={type} />
        ))}
      </ul>

      <DarkModeToggle />
      <MobileLinks />
    </div>
  );
};

export default Links;
