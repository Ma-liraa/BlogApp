const variants = {
  primary: `
    bg-gradient-to-r from-[#5E72E4] to-[#825EE4]
    text-white
    shadow-[0_6px_20px_rgba(94,114,228,0.35)]
    hover:shadow-[0_8px_24px_rgba(94,114,228,0.45)]
    active:scale-[0.97]
  `,

  secondary: `
    bg-[#EEF2FF]
    text-[#5E72E4]
    hover:bg-[#E4E9FF]
    shadow-sm
    active:scale-[0.97]
  `,

  outline: `
    bg-white
    text-[#5E72E4]
    border border-[#E6EAF2]
    hover:border-[#5E72E4]
    hover:bg-[#F7F9FF]
    active:scale-[0.97]
  `,

  danger: `
    bg-[#FFECEE]
    text-[#E11D48]
    hover:bg-[#FFDDE2]
    shadow-sm
    active:scale-[0.97]
  `,
};

function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...rest
}) {
  const sizes = {
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3 text-sm sm:text-base",
  };

  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap rounded-2xl font-medium transition-all duration-300 ${sizes[size]} ${variants[variant]} ${fullWidth ? "w-full" : ""} disabled:cursor-not-allowed disabled:opacity-50 ${className} `}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
