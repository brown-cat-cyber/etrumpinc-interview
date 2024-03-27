import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type FileUploadingStatus = "uploading" | "success" | "error";
// TODO 刷新页面后如何保持文件状态？难道存在session storage里嘛？
export type FileWithStatus = {
  file: File;
  uploadingStatus: FileUploadingStatus;
  uploadingPercentage?: number;
};

type FilesState = {
  files: Array<FileWithStatus>;
};

export const useFileStore = create<FilesState>()(
  immer(() => ({
    files: [] as Array<FileWithStatus>,
  }))
);
