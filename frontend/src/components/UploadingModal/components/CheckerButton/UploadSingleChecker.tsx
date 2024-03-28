import React from "react";
import { hoverBg } from "../..";
import { useFileStore } from "../../../../store";
import CustomTooltip from "./Tooltip";
import CheckerButton from ".";

type Props = {
  children: React.ReactNode;
  text?: string;
} & React.ComponentProps<"button">;

export default function UploadSingleChecker({
  children,
  text = "重新上传",
  ...props
}: Props) {
  const uploadingFileSum = useFileStore(
    (state) =>
      state.files.filter((f) => f.uploadingStatus === "uploading").length
  );
  const exceedLimit = uploadingFileSum >= 5;
  return (
    <CustomTooltip text={exceedLimit ? "最多同时上传5个文件" : text}>
      <CheckerButton {...props}>{children}</CheckerButton>
    </CustomTooltip>
  );
}
