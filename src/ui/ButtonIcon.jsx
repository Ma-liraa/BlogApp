const btnType = {
  primary:
    "bg-primary-100 fill-primary-900 stroke-primary-900 hover:bg-primary-900 hover:stroke-primary-100 hover:fill-primary-100 text-icon",
  secondary:
    "bg-secondary-200 text-secondary-500 hover:bg-secondary-500 hover:text-secondary-0",
  outline:
    "border border-secondary-200 text-secondary-500 hover:bg-secondary-200",
  red: "fill-error-500 hover:fill-error-100 text-error-500 hover:text-error-100 bg-error-100 hover:bg-error-500 ",
  danger: "border border-red-100 text-red-500",
};

function ButtonIcon({ children, onClick, className, variant, ...rest }) {
  return (
    <button
      onClick={onClick}
      className={`${btnType[variant]} ${className} flex items-center justify-center gap-x-2 rounded-2xl p-2 text-xs font-bold transition-all lg:text-sm [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-inherit`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
