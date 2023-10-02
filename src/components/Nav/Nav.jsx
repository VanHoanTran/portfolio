import Links from "./Links";
import Logo from "./Logo";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-10 flex max-w-full flex-none items-center justify-between space-x-8 bg-slate-200 px-4 py-4 dark:bg-slate-700 lg:px-16">
      <Logo />
      <Links />
    </nav>
  );
};

export default Nav;
