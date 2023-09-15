import Links from "./Links";
import Logo from "./Logo";

const Nav = () => {
  return (
    <nav className="flex flex-none items-center justify-between px-16 py-4">
      <Logo />
      <Links />
    </nav>
  );
};

export default Nav;
