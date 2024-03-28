import React, { forwardRef } from "react";
import { hoverBg } from "../..";

type Props = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<"button">;

export default forwardRef(function CheckerButton(
  {
    children,
    className,

    ...props
  }: Props,
  ref: React.Ref<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      className={`${hoverBg} disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});
