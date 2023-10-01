import {
  HiOutlineChatBubbleLeft,
  HiOutlineFolder,
  HiOutlineInformationCircle,
} from "react-icons/hi2";
import Menus from "../common/Menus";
import { VscMortarBoard } from "react-icons/vsc";
const MobileLinks = () => {
  return (
    <div className="md:hidden">
      <Menus>
        <Menus.Menu>
          <Menus.Toggle id={0} />
          <Menus.List id={0}>
            <Menus.Link icon={<HiOutlineInformationCircle />} section="#about">
              About
            </Menus.Link>
            <Menus.Link icon={<VscMortarBoard />} section="#education">
              Education
            </Menus.Link>
            <Menus.Link icon={<HiOutlineFolder />} section="#projects">
              Projects
            </Menus.Link>
            <Menus.Link
              icon={<HiOutlineChatBubbleLeft />}
              section="#contact"
              type="primary"
            >
              Let&apos;s talk
            </Menus.Link>
          </Menus.List>
        </Menus.Menu>
      </Menus>
    </div>
  );
};

export default MobileLinks;
