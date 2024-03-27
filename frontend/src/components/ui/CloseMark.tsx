import React from "react";
import { hoverBg } from "../UploadingModal";

type Props = {};

export default function CloseMark({}: Props) {
  // TODO 样式并未统一
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6  stroke-gray-600 `}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}
