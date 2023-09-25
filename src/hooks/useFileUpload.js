import { useState } from 'react';

const useFileUpload = () => {
  const [ocrData, setOcrData] = useState("");
  const [status, setStatus] = useState("initial");
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState(null);
  const backendURL = process.env.REACT_APP_API_ENDPOINT; // 从环境变量中获取后端URL

  const uploadFile = async (file, language) => {
    try {
      setFileName(file.name);
      setStatus("loading");

      const formData = new FormData();
      formData.append("file", file);
      formData.append("language", language);

      const response = await fetch(
        `${backendURL}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const text = await response.text();
      setOcrData(text);
      setStatus("done");
      setError(null);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setError(error.message);
      setStatus("error");
    }
  };

  return { ocrData, status, fileName, error, uploadFile };
}

export default useFileUpload;
