import React from "react";
import CircularProgress from "@mui/joy/CircularProgress";

type Props = {
  percent: number;
};

export default function ProgressCircle({ percent }: Props) {
  const radius = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeWidth = 2;
  const strokeLength = (percent / 100) * circumference;

  return (
    <>
      <div className="mr-2 text-red-400">{` ${percent}%`}</div>
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <circle
          cx="12"
          cy="12"
          r={radius}
          fillOpacity="0"
          strokeWidth={strokeWidth}
          stroke="#eee"
        />
        <circle
          cx="12"
          cy="12"
          r={radius}
          fillOpacity="0"
          strokeWidth={strokeWidth}
          strokeOpacity="0.5"
          strokeDasharray={`${strokeLength} 1000`}
          strokeLinecap="round"
          transform={`rotate(-90 12 12)`}
          className="stroke-red-400"
        />
      </svg>
    </>
  );
}
