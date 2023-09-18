import Links from "./Links";
import Logo from "./Logo";

const Nav = () => {
  return (
    <nav className="flex max-w-full flex-none items-center justify-between space-x-8 px-4 py-4 lg:px-16">
      <Logo />
      <Links />
    </nav>
  );
};

export default Nav;
