import { createContext, useContext, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import useOutsideClick from "../../hooks/useOutsideClick";
import { createPortal } from "react-dom";
import ButtonIcon from "./ButtonIcon";
import { Link as ReactLink } from "react-router-dom";
const HamburgerMenuContext = createContext();

function HamburgerMenu({ children }) {
  const [position, setPosition] = useState({});
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <HamburgerMenuContext.Provider
      value={{ position, setPosition, open, close, setOpen }}
    >
      {children}
    </HamburgerMenuContext.Provider>
  );
}

function Toggle() {
  const { setOpen, setPosition } = useContext(HamburgerMenuContext);
  const handleClick = (e) => {
    // prevent the click buble up which will be capture
    // by useOutsideClick, then execute close() right away.
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: (window.innerWidth - rect.right).toString(),
      y: rect.bottom.toString(),
    });

    setOpen((open) => !open);
  };

  return (
    <ButtonIcon handleClick={handleClick}>
      <HiBars3 className="text-3xl" />
    </ButtonIcon>
  );
}

const List = ({ children }) => {
  const { open, close, position } = useContext(HamburgerMenuContext);
  const { ref } = useOutsideClick(close, false);
  // create a menu when it is open.
  //if (!open) return null;
  return createPortal(
    <ul
      ref={ref}
      style={{ right: `${position.x}px`, top: `${position.y}px` }}
      className={`${
        !open ? " animate-scale-down" : "animate-scale-up"
      } fixed z-20 origin-top-right  rounded-lg bg-slate-100 p-4  text-slate-700 shadow-md dark:bg-slate-600 dark:text-slate-200`}
    >
      {children}
    </ul>,
    document.body,
  );
};

const Menu = ({ children }) => {
  return <div className="flex items-center justify-center">{children}</div>;
};

const Link = ({ icon, children, section, type = "" }) => {
  const { close } = useContext(HamburgerMenuContext);
  const primary = "rounded-full bg-rose-500 px-3 py-1 mt-1 text-slate-100 ";
  return (
    <li>
      <ReactLink
        to={section}
        className={`link-hover flex w-full items-center space-x-4 px-4 py-2 text-center transition-all [&_svg]:text-[1.4rem] ${
          type === "primary" ? primary : ""
        }`}
        onClick={close}
      >
        {icon}
        <span>{children}</span>
      </ReactLink>
    </li>
  );
};
HamburgerMenu.Menu = Menu;
HamburgerMenu.Toggle = Toggle;
HamburgerMenu.List = List;
HamburgerMenu.Link = Link;

export default HamburgerMenu;
