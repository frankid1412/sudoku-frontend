import React, { useState, useEffect } from "react";
import styles from "./DownloadButton.module.css";
import DownloadIcon from "../../../asset/download.svg";
import EditIcon from "../../../asset/edit.svg";

const DownloadButton = ({ text }) => {
  const [blobSize, setBlobSize] = useState(null);

  useEffect(() => {
    const blob = new Blob([text], { type: "text/plain" });
    setBlobSize(blob.size);
  }, [text]);

  const handleDownload = () => {
    if (!text) {
      console.warn("No text provided for download.");
      return;
    }

    const blob = new Blob([text], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getFileSize = () => {
    if (!blobSize) return "";

    const size = blobSize;
    if (size < 1024) return `${size} bytes`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };
  const [filename, setFilename] = useState("filename.txt");

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.filenameContainer}>
        {isEditing ? (
          <input
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
            onBlur={() => setIsEditing(false)} // 失去焦点时退出编辑模式
            className={styles.filenameInput}
            autoFocus 
          />
        ) : (
          <span className={styles.filenameDisplay}>{filename}</span>
        )}
        <img
          src={EditIcon}
          alt="Edit Filename"
          className={styles.editIcon}
          onClick={() => setIsEditing(!isEditing)} // 点击时切换编辑模式
        />
      </div>
      <div className={styles.downloadButtonContainer} onClick={handleDownload}>
        <img
          src={DownloadIcon}
          alt="Download Icon"
          className={styles.downloadIcon}
        />
        <span className={styles.downloadText}>Download</span>
        <span className={styles.fileSizeText}>{getFileSize()}</span>
      </div>
    </div>
  );
};

export default DownloadButton;
