import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "danger";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...rest
}) => {
  let className = "btn";

  switch (variant) {
    case "primary":
      className += " btn-primary";
      break;
    case "secondary":
      className += " btn-secondary";
      break;
    case "success":
      className += " btn-success";
      break;
    case "danger":
      className += " btn-danger";
      break;
    default:
      className += " btn-primary";
  }

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
