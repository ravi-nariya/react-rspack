import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  buttonClassName?: string;
  withIcon?: boolean;
  icon?: IconDefinition;
  iconClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  withIcon,
  buttonClassName,
  icon,
  iconClassName = "mr-2 text-lg",
  children,
  ...props
}) => {
  const variantStyles =
    variant === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : variant === "secondary"
      ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
      : "bg-transparent border border-gray-500 text-gray-700 hover:bg-gray-100";

  return (
    <button className={`${variantStyles} ${buttonClassName}`} {...props}>
      {withIcon && icon && (
        <FontAwesomeIcon icon={icon} className={iconClassName} />
      )}
      {children}
    </button>
  );
};

export default Button;
