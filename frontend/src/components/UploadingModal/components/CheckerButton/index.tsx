import React from "react";
import { hoverBg } from "../..";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export default function CheckerButton({
  children,
  disabled = false,
  onClick,
  className,
}: Props) {
  return (
    <button
      className={`${hoverBg} disabled:cursor-not-allowed ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
