import React, { useState, useRef } from "react";
import { useFileStore } from "../../../store";
import { putFileToServer } from "../../../api/api";

const CustomFileInput = () => {
  const uploadingFileSum = useFileStore(
    (state) =>
      state.files.filter((f) => f.uploadingStatus === "uploading").length
  );
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
      <button
        type="button"
        onClick={triggerFileInput}
        disabled={uploadingFileSum >= 5}
      >
        选择文件
      </button>
    </div>
  );
};

export default CustomFileInput;
