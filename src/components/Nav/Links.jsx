import ButtonIcon from "../common/ButtonIcon";
import { HiOutlineSun } from "react-icons/hi2";
const Links = () => {
  return (
    <div className="flex items-center justify-between space-x-16">
      <p className="max-w-[200px]">Open for any offers and collaborations</p>
      <div>
        <ul className=" flex space-x-8 rounded-full border border-slate-500 py-1 pl-4 pr-1 [&>*]:cursor-pointer">
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a
              href="#"
              className=" rounded-full bg-rose-400 px-4 py-1 text-slate-100 "
            >
              Let&apos;s talk
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ButtonIcon>
          <HiOutlineSun />
        </ButtonIcon>
      </div>
    </div>
  );
};

export default Links;
