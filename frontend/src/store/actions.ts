import { FileUploadingStatus, useFileStore } from ".";

type FileAction = {
  uploadFile: (file: File) => void;
  updateFileState: (
    file: File,
    status: "uploading" | "success" | "error"
  ) => void;
  uploadingAllRejectedFiles: () => void;
};

export const updateFileStatus = (file: File, status: FileUploadingStatus) => {
  useFileStore.setState((state) => {
    // compare file name
    const index = state.files.findIndex((f) => f.file.name === file.name);
    if (index === -1) {
      state.files.push({ file, uploadingStatus: status });
    } else {
      state.files[index].uploadingStatus = status;
    }
    return state;
  });
};
export const updateFileUpdatingPercentage = (
  file: File,
  percentage: number
) => {
  useFileStore.setState((state) => {
    // compare file name
    const index = state.files.findIndex((f) => f.file.name === file.name);
    state.files[index].uploadingStatus = "uploading";
    state.files[index].uploadingPercentage = percentage;
    return state;
  });
};

export const uploadingAllRejectedFiles = () => {
  useFileStore.setState((state) => {
    // filter out rejected files and set uploading status
    state.files
      .filter((f) => f.uploadingStatus === "error")
      .forEach((f) => (f.uploadingStatus = "uploading"));
    return state;
  });
};
