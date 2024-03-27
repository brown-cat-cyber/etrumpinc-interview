import React from "react";
import CloseButton from "./CloseButton";
import { useFileStore } from "../../../store";
import { putFileToServer } from "../../../api/api";
import { Dialog } from "@headlessui/react";
import { hoverBg } from "..";

type Props = {
  handleClose: () => void;
};

export default function Header({ handleClose }: Props) {
  const rejectedFiles = useFileStore((state) =>
    state.files.filter((f) => f.uploadingStatus === "error")
  );
  const uploadingFileSum = useFileStore(
    (state) =>
      state.files.filter((f) => f.uploadingStatus === "uploading").length
  );
  const uploadingRejectedFiles = () => {
    console.log("uploadingRejectedFiles");
    rejectedFiles.forEach((f) => {
      putFileToServer(f.file);
    });
  };
  return (
    <>
      <div className="flex content-center ">
        <Dialog.Title
          as="div"
          className=" text-lg leading-6 text-gray-600 font-bold mr-auto"
        >
          {rejectedFiles.length > 0 ? `上传异常` : `待上传`}
        </Dialog.Title>
        {rejectedFiles.length > 0 && (
          <button
            className={`text-blue-600 text-base cursor-pointer hover:outline-6 hover:outline-gray-600 font-[500] flex items-center disabled:cursor-not-allowed mr-5 ${hoverBg}`}
            onClick={uploadingRejectedFiles}
            disabled={rejectedFiles.length + uploadingFileSum >= 5}
          >
            全部继续
          </button>
        )}
        <CloseButton onClick={handleClose} />
      </div>
    </>
  );
}
