import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type FileUploadingStatus = "uploading" | "success" | "error";

export type FileWithStatus = {
  file: File;
  uploadingStatus: FileUploadingStatus;
  uploadingPercentage?: number;
};

type FilesState = {
  files: Array<FileWithStatus>;
};

export const useFileStore = create<FilesState>()(
  immer((set) => ({
    files: [],
  }))
);
