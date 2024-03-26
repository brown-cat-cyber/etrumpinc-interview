import React from "react";
import { FileWithStatus, useFileStore } from "../../../store";
import CheckCircle from "./CheckCircle";
import ProgressCircle from "./ProgressCircle";
import RestartButton from "./RestartButton";

type Props = {};

export default function FilesList({}: Props) {
  const files = useFileStore((state) => state.files);
  function generateIcon(file: FileWithStatus) {
    switch (file.uploadingStatus) {
      case "success":
        return <CheckCircle />;
      case "uploading":
        return <ProgressCircle percent={file.uploadingPercentage || 0} />;
      case "error":
        return <RestartButton />;
    }
  }
  return (
    <div className="grid gap-4 mb-4 max-h-[300px] overflow-y-auto">
      {files.map((f) => (
        <div className="flex items-center overflow-hidden" key={f.file.name}>
          <div className="text-base text-gray-600 mr-auto text-ellipsis whitespace-nowrap overflow-hidden max-w-[60%] ">
            {f.file.name}
          </div>
          {generateIcon(f)}
        </div>
      ))}
    </div>
  );
}
