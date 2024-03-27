import React from "react";
import CloseMark from "../../ui/CloseMark";
import { useFileStore } from "../../../store";
import { putFileToServer } from "../../../api/api";
import { Dialog } from "@headlessui/react";
import { hoverBg } from "..";
import RestartAllButton from "./RestartAllButton";

type Props = {
  handleClose: () => void;
};

export default function Header({ handleClose }: Props) {
  const rejectedFiles = useFileStore((state) =>
    state.files.filter((f) => f.uploadingStatus === "error")
  );
  return (
    <>
      <div className="flex content-center">
        <Dialog.Title
          as="div"
          className=" text-lg leading-6 text-gray-600 font-bold mr-auto"
        >
          {rejectedFiles.length > 0 ? `上传异常` : `待上传`}
        </Dialog.Title>
        <RestartAllButton />
        <button onClick={handleClose} className={`${hoverBg}`}>
          <CloseMark />
        </button>
      </div>
    </>
  );
}
