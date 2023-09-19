import { createContext, useContext, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import useOutsideClick from "../../hooks/useOutsideClick";
import { createPortal } from "react-dom";
import ButtonIcon from "./ButtonIcon";
const MenusContext = createContext();

function Menus({ children }) {
  const [position, setPosition] = useState({});
  const [openId, setOpenId] = useState("");
  const open = setOpenId;
  const close = () => setOpenId("");
  return (
    <MenusContext.Provider
      value={{ position, setPosition, openId, close, open }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { open, close, openId, setPosition } = useContext(MenusContext);

  const handleClick = (e) => {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: (window.innerWidth - rect.width - rect.x).toString(),
      y: (rect.y + rect.height + 8).toString(),
    });
    console.log({ openId, id });
    openId === "" || openId !== id ? open(id) : close();
  };

  return (
    <ButtonIcon handleClick={handleClick}>
      <HiBars3 className="text-3xl" />
    </ButtonIcon>
  );
}

const List = ({ id, children }) => {
  const { close, openId, position } = useContext(MenusContext);
  const { ref } = useOutsideClick(close, false);
  if (openId !== id) return null;

  return createPortal(
    <ul
      ref={ref}
      style={{ right: `${position.x}px`, top: `${position.y}px` }}
      className="fixed rounded-lg bg-slate-100 p-4  text-slate-700 shadow-md dark:bg-slate-600 dark:text-slate-200"
    >
      {children}
    </ul>,
    document.body,
  );
};

const Menu = ({ children }) => {
  return <div className="flex items-center justify-center">{children}</div>;
};

const Button = ({ icon, children, onClick }) => {
  const { close } = useContext(MenusContext);
  const handleClick = () => {
    onClick?.();
    close();
  };
  return (
    <li>
      <button
        className="flex w-full items-center space-x-4 px-4 py-2 text-center transition-all [&_svg]:text-lg "
        onClick={handleClick}
      >
        {icon}
        <span>{children}</span>
      </button>
    </li>
  );
};
Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
