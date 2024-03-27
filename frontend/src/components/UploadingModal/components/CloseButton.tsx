import React from "react";
import { hoverBg } from "..";

type Props = {
  onClick: () => void;
};

export default function CloseButton({ onClick }: Props) {
  // TODO 样式并未统一
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      onClick={onClick}
      className={`w-6 h-6 cursor-pointer stroke-gray-600 box-content ${hoverBg}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}
