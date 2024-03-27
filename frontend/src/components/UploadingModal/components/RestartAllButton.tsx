import React from "react";
import { FileWithStatus, useFileStore } from "../../../store";
import { putFileToServer } from "../../../api/api";
import { hoverBg } from "..";
import UploadSingleChecker from "./CheckerButton/UploadSingleChecker";
import RestartIcon from "../../ui/RestartIcon";
import RestartAllChecker from "./CheckerButton/RestartAllChecker";

type Props = {};

export default function RestartAllButton({}: Props) {
  const rejectedFiles = useFileStore((state) =>
    state.files.filter((f) => f.uploadingStatus === "error")
  );
  const uploadingRejectedFiles = () => {
    rejectedFiles.forEach((f) => putFileToServer(f.file));
  };
  return (
    rejectedFiles.length > 0 && (
      <RestartAllChecker
        onClick={uploadingRejectedFiles}
        className={`text-blue-600 text-base cursor-pointer hover:outline-6 hover:outline-gray-600 font-[500] flex items-center disabled:cursor-not-allowed mr-5 hover:mr-4`}
      >
        全部继续
      </RestartAllChecker>
    )
  );
}
