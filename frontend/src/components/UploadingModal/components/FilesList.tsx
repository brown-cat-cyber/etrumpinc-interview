import React from "react";
import { FileWithStatus, useFileStore } from "../../../store";
import CheckCircle from "./CheckCircle";
import ProgressCircle from "./ProgressCircle";
import RestartButton from "./RestartButton";
import CustomTooltip from "./Tooltip";

type Props = {};

export default function FilesList({}: Props) {
  const files = useFileStore((state) => state.files);
  const uploadingFilesSum = useFileStore(
    (state) =>
      state.files.filter((f) => f.uploadingStatus === "uploading").length
  );
  function generateIcon(file: FileWithStatus) {
    switch (file.uploadingStatus) {
      case "success":
        return <CheckCircle />;
      case "uploading":
        return <ProgressCircle percent={file.uploadingPercentage || 0} />;
      case "error":
        return (
          <CustomTooltip
            text={uploadingFilesSum >= 5 ? "最多同时上传5个文件" : "重新上传"}
          >
            <RestartButton file={file} />
          </CustomTooltip>
        );
    }
  }
  return (
    <div className="mb-4 h-[14rem] overflow-hidden overflow-y-auto ">
      {files.map((f) => (
        <div
          className="flex items-center overflow-hidden p-4 hover:bg-gray-200"
          key={f.file.name}
        >
          <div className="text-base text-gray-600 mr-auto text-ellipsis whitespace-nowrap overflow-hidden max-w-[60%] ">
            {f.file.name}
          </div>
          {generateIcon(f)}
        </div>
      ))}
    </div>
  );
}
