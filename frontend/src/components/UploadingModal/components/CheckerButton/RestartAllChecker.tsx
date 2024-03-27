import React from "react";
import { hoverBg } from "../..";
import { useFileStore } from "../../../../store";
import CustomTooltip from "./Tooltip";
import CheckerButton from ".";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export default function RestartAllChecker({
  children,
  onClick,
  className,
}: Props) {
  const uploadingFileSum = useFileStore(
    (state) =>
      state.files.filter((f) => f.uploadingStatus === "uploading").length
  );
  const rejectedFileSum = useFileStore(
    (state) => state.files.filter((f) => f.uploadingStatus === "error").length
  );
  const exceedLimit = uploadingFileSum + rejectedFileSum >= 5;
  return (
    <CustomTooltip
      text={exceedLimit ? "最多同时上传5个文件" : ""}
      isVisible={exceedLimit}
    >
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
