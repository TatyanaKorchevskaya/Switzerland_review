import clsx from "clsx";
import * as styles from "./Button.module.scss";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
   onClick?: () => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  elementClasses?: string;
  elementRef?: React.LegacyRef<HTMLButtonElement>;
  };

export const Button = ({
  children,
  onClick,
  type,
  elementClasses,
  elementRef,
}: ButtonProps) => {
  const className = clsx(styles.button, elementClasses);
  return (
    <button type={type} className={className} onClick={onClick} ref={elementRef}>
      {children}
    </button>
  );
};
