import React from "react";
import { hoverBg } from "../..";
import { useFileStore } from "../../../../store";
import CustomTooltip from "./Tooltip";
import CheckerButton from ".";

type Props = {
  children: React.ReactNode;
  text?: string;
} & React.ComponentProps<"button">;

export default function RestartAllChecker({ children, ...props }: Props) {
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
      <CheckerButton disabled={exceedLimit} {...props}>
        {children}
      </CheckerButton>
    </CustomTooltip>
  );
}
