import React from "react";
import { FileWithStatus, useFileStore } from "../../../store";
import CheckCircle from "../../ui/CheckCircle";
import ProgressCircle from "./ProgressCircle";
import RestartButton from "./RestartButton";
import CustomTooltip from "./CheckerButton/Tooltip";
// TODO 字体问题
// TODO 不同图标偏移问题
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
        return <RestartButton file={file} />;
    }
  }
  return (
    <div className="mb-4 h-[14rem] overflow-hidden overflow-y-auto  -mx-4 ">
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
