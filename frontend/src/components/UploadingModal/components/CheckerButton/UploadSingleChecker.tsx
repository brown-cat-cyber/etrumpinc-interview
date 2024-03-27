import React from "react";
import { hoverBg } from "../..";
import { useFileStore } from "../../../../store";
import CustomTooltip from "./Tooltip";
import CheckerButton from ".";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  text?: string;
};

export default function UploadSingleChecker({
  children,
  onClick,
  className,
  text = "重新上传",
}: Props) {
  const uploadingFileSum = useFileStore(
    (state) =>
      state.files.filter((f) => f.uploadingStatus === "uploading").length
  );
  const exceedLimit = uploadingFileSum >= 5;
  return (
    <CustomTooltip text={exceedLimit ? "最多同时上传5个文件" : text}>
      <CheckerButton
        onClick={onClick}
        disabled={exceedLimit}
        className={className}
      >
        {children}
      </CheckerButton>
    </CustomTooltip>
  );
}
