import React from "react";
import CircularProgress from "@mui/joy/CircularProgress";

type Props = {
  percent: number;
};

export default function ProgressCircle({ percent }: Props) {
  const circumference = 2 * Math.PI * 30;
  return <CircularProgress />;
}
