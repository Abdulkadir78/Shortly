interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  fullWidth?: boolean;
  rounded?: boolean;
  outlined?: boolean;
  className?: string;
}

const variantToBgColor = {
  primary: "bg-primary",
  primary2: "bg-primary2",
  secondary: "bg-secondary",
};

const variantToBorderColor = {
  primary: "border-primary text-primary",
  primary2: "border-primary2 text-primary2",
  secondary: "border-secondary text-secondary",
};

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth,
  rounded,
  outlined,
  className,
  ...rest
}) => {
  const buttonClasses = outlined
    ? `border-2 ${
        variantToBorderColor[variant as keyof typeof variantToBorderColor]
      }`
    : `${
        variantToBgColor[variant as keyof typeof variantToBgColor]
      } text-white`;

  return (
    <button
      className={`font-medium duration-300 hover:brightness-110 px-6 py-3 ${buttonClasses} ${
        fullWidth && "w-full"
      } ${rounded ? "rounded-full" : "rounded-md"} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
