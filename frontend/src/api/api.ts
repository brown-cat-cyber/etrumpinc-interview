import axios from "axios";
import {
  updateFileStatus,
  updateFileUpdatingPercentage,
} from "../store/actions";
export const putFileToServer = async (file: File) => {
  // TODO: 如何区分不同文件夹同名文件
  updateFileStatus(file, "uploading");

  try {
    const formData = new FormData();
    formData.append("file", file);
    await axios.put(`http://localhost:3002/archives/${file.name}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) => {
        if (progressEvent && progressEvent?.total) {
          const percentage = Math.round(
            (progressEvent.loaded * 100) / progressEvent?.total
          );
          updateFileUpdatingPercentage(file, percentage);
        }
      },
    });
    updateFileStatus(file, "success");
  } catch (error) {
    updateFileStatus(file, "error");
  }
};
