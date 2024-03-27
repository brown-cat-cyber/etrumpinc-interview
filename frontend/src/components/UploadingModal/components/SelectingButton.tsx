import React, { useState, useRef } from "react";
import { useFileStore } from "../../../store";
import { putFileToServer } from "../../../api/api";
import { hoverBg } from "..";
import CustomTooltip from "./Tooltip";

const CustomFileInput = () => {
  const uploadingFileSum = useFileStore(
    (state) =>
      state.files.filter((f) => f.uploadingStatus === "uploading").length
  );
  const exceedLimit = uploadingFileSum >= 5;
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const f = event.target.files?.[0];
    f && putFileToServer(f);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <input
        type="file"
        className="hidden"
        onChange={handleFileChange}
        ref={fileInputRef}
      />
      <CustomTooltip text={"最多同时上传5个文件"} isVisible={exceedLimit}>
        <button
          type="button"
          onClick={triggerFileInput}
          disabled={exceedLimit}
          className={`bg-gray-200/80 ${hoverBg}`}
        >
          选择文件
        </button>
      </CustomTooltip>
    </div>
  );
};

export default CustomFileInput;
