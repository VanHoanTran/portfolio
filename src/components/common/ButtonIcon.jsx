const ButtonIcon = ({ children, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="rounded p-2  transition-all [&>svg]:h-7 [&>svg]:w-7"
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
