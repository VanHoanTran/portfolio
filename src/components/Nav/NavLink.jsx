import { Link } from "react-router-dom";

const NavLink = ({ section, label, children, type = "secondary" }) => {
  const primary = "rounded-full bg-rose-500 px-4 py-1 text-slate-100 ";

  return (
    <li className="link-hover cursor-pointer">
      <Link
        to={section}
        className={` focus:underline ${type === "primary" ? primary : " "}`}
      >
        <span>{children}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default NavLink;
