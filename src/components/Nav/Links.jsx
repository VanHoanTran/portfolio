import {
  HiOutlineChatBubbleLeft,
  HiOutlineEnvelope,
  HiOutlineFolder,
  HiOutlineInformationCircle,
} from "react-icons/hi2";

import DarkModeToggle from "./DarkModeToggle";
import Menus from "../common/Menus";
const Links = () => {
  return (
    <div className="flex items-center justify-between space-x-4">
      <p className="line-clamp-2 hidden max-w-[200px] lg:inline-block">
        Open for any offers and collaborations
      </p>

      <ul className="hidden space-x-8 rounded-full border border-slate-500 py-1 pl-4 pr-1 transition-all md:flex  [&>*]:cursor-pointer">
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li className="min-w-max">
          <a
            href="#"
            className=" rounded-full bg-rose-400 px-4 py-1 text-slate-100 "
          >
            Let&apos;s talk
          </a>
        </li>
      </ul>
      <DarkModeToggle />

      <div className="md:hidden">
        <Menus>
          <Menus.Menu>
            <Menus.Toggle id={0} />
            <Menus.List id={0}>
              <Menus.Button icon={<HiOutlineFolder />} onClick={null}>
                Projects
              </Menus.Button>

              <Menus.Button
                icon={<HiOutlineInformationCircle />}
                onClick={null}
              >
                About
              </Menus.Button>
              <Menus.Button icon={<HiOutlineEnvelope />} onClick={null}>
                Contact
              </Menus.Button>
              <Menus.Button icon={<HiOutlineChatBubbleLeft />} onClick={null}>
                Let&apos;s talk
              </Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </Menus>
      </div>
    </div>
  );
};

export default Links;
