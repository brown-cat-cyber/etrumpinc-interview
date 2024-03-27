import React from "react";
import { FileWithStatus } from "../../../store";
import { putFileToServer } from "../../../api/api";
import { hoverBg } from "..";
import UploadSingleChecker from "./CheckerButton/UploadSingleChecker";
import RestartIcon from "../../ui/RestartIcon";

type Props = {
  file: FileWithStatus;
};

export default function RestartButton({ file }: Props) {
  function handleRestart() {
    putFileToServer(file.file);
  }
  return (
    <UploadSingleChecker
      onClick={handleRestart}
      className="hover:bg-gray-400/90"
    >
      <RestartIcon />
    </UploadSingleChecker>
  );
}
