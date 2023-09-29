import {
  HiOutlineChatBubbleLeft,
  HiOutlineFolder,
  HiOutlineInformationCircle,
} from "react-icons/hi2";

import DarkModeToggle from "./DarkModeToggle";
import Menus from "../common/Menus";
import { VscMortarBoard } from "react-icons/vsc";
const Links = () => {
  return (
    <div className="flex items-center justify-between space-x-4">
      <p className="line-clamp-2 hidden max-w-[200px] lg:inline-block">
        Open for any offers and collaborations
      </p>
      <ul className="[&>li]:link-hover hidden space-x-8 rounded-full border border-slate-500 py-1 pl-4 pr-1 transition-all md:flex  [&>*]:cursor-pointer">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li className="min-w-max">
          <a
            href="#contact"
            className=" rounded-full bg-rose-500 px-4 py-1 text-slate-100 "
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
              <Menus.Link icon={<HiOutlineInformationCircle />} href="#about">
                About
              </Menus.Link>
              <Menus.Link icon={<VscMortarBoard />} href="#education">
                Education
              </Menus.Link>
              <Menus.Link icon={<HiOutlineFolder />} href="#projects">
                Projects
              </Menus.Link>
              <Menus.Link icon={<HiOutlineChatBubbleLeft />} href="#contact">
                Let&apos;s talk
              </Menus.Link>
            </Menus.List>
          </Menus.Menu>
        </Menus>
      </div>
    </div>
  );
};

export default Links;
