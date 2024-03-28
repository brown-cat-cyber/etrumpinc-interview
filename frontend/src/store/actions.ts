import { FileUploadingStatus, useFileStore } from ".";

export const updateFileStatus = (file: File, status: FileUploadingStatus) => {
  useFileStore.setState((state) => {
    // compare file name
    const index = state.files.findIndex((f) => f.file.name === file.name);
    if (index === -1) {
      state.files.push({ file, uploadingStatus: status });
    } else {
      state.files[index].uploadingStatus = status;
    }
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
  });
};
