import {
  HiOutlineChatBubbleLeft,
  HiOutlineFolder,
  HiOutlineInformationCircle,
} from "react-icons/hi2";
import HamburgerMenu from "../common/HamburgerMenu";
import { VscMortarBoard } from "react-icons/vsc";
const MobileLinks = () => {
  return (
    <div className="md:hidden">
      <HamburgerMenu>
        <HamburgerMenu.Menu>
          <HamburgerMenu.Toggle />
          <HamburgerMenu.List>
            <HamburgerMenu.Link
              icon={<HiOutlineInformationCircle />}
              section="#about"
            >
              About
            </HamburgerMenu.Link>
            <HamburgerMenu.Link icon={<VscMortarBoard />} section="#education">
              Education
            </HamburgerMenu.Link>
            <HamburgerMenu.Link icon={<HiOutlineFolder />} section="#projects">
              Projects
            </HamburgerMenu.Link>
            <HamburgerMenu.Link
              icon={<HiOutlineChatBubbleLeft />}
              section="#contact"
              type="primary"
            >
              Let&apos;s talk
            </HamburgerMenu.Link>
          </HamburgerMenu.List>
        </HamburgerMenu.Menu>
      </HamburgerMenu>
    </div>
  );
};

export default MobileLinks;
