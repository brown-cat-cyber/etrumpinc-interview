import React from "react";
import CloseButton from "./CloseButton";
import { useFileStore } from "../../../store";
import { putFileToServer } from "../../../api/api";
import { Dialog } from "@headlessui/react";

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
        <button
          className="text-blue-800 text-sm cursor-pointer hover:bg-black/15 font-[600] flex items-center disabled:cursor-not-allowed"
          onClick={uploadingRejectedFiles}
          disabled={
            rejectedFiles.length + uploadingFileSum >= 5 ||
            rejectedFiles.length === 0
          }
        >
          全部继续
        </button>
        <CloseButton onClick={handleClose} />
      </div>
      <div className=" h-[1px] -mx-6 bg-gray-300 my-4" />
    </>
  );
}
