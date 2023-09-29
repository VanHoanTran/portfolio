const ButtonIcon = ({ children, handleClick, className, label = "" }) => {
  return (
    <button
      aria-label={label}
      onClick={handleClick}
      className={`${className} rounded p-2  transition-all [&>svg]:h-7 [&>svg]:w-7`}
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
