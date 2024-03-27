import React, { useState, useRef } from "react";
import { useFileStore } from "../../../store";
import { putFileToServer } from "../../../api/api";
import { hoverBg } from "..";
import CustomTooltip from "./CheckerButton/Tooltip";
import UploadSingleChecker from "./CheckerButton/UploadSingleChecker";

const CustomFileInput = () => {
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
      <UploadSingleChecker
        onClick={triggerFileInput}
        className={``}
        text="从本地选择文件"
      >
        选择文件
      </UploadSingleChecker>
    </div>
  );
};

export default CustomFileInput;
