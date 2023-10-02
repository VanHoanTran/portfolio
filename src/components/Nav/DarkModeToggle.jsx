import { useDarkMode } from "/src/context/DarkModeContext";
import ButtonIcon from "../common/ButtonIcon";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon
      label="dark mode"
      className="link-hover"
      handleClick={toggleDarkMode}
    >
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
};

export default DarkModeToggle;
