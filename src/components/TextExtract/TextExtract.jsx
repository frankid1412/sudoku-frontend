import React, { useState, useRef } from "react";
import styles from "./TextExtract.module.css";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import TextDisplayEditor from "./TextDisplayEditor/TextDisplayEditor";

const TextExtract = ({
  ocrData,
  setOcrData,
  uploadFile,
  displayLanguage,
  handleLanguageChange,
}) => {
  const [status, setStatus] = useState("initial");
  const [fileName, setFileName] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef();

  // Function to perform OCR
  const performOCR = async () => {
    setStatus("processing");
    try {
      await uploadFile(uploadedFile);
      setStatus("processed");
    } catch (error) {
      console.error("OCR failed:", error);
      setStatus("uploaded");
    }
  };

  // Function to handle file input change
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploadedFile(file);
    setStatus("uploading");

    try {
      await uploadFile(file);
      setFileName(file.name);
      setStatus("uploaded");
    } catch (err) {
      setStatus("initial");
    }
  };

  // Function to handle file drop
  const handleFileDrop = (e) => {
    e.preventDefault();
    fileInputRef.current.files = e.dataTransfer.files;
    handleFileChange({ target: { files: e.dataTransfer.files } });
  };

  return (
    <div className={styles.textExtractContainer}>
      <h1 className={styles.headerH1}>Textracter (.jpg, .png, .pdf)</h1>
      {status !== "processed" ? (
        <h2 className={styles.defaultH2}>
          Accurately recognize text and make your PDF searchable with our online
          textracter
        </h2>
      ) : (
        <h2 className={styles.succeededH2}>
          The textracter process has succeeded
        </h2>
      )}
      {status !== "processed" && (
        <div className={styles.languageSelectorContainer}>
          {/* Language Selector */}
          <LanguageSelector
            selectedLanguage={displayLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </div>
      )}
      <div className={styles.textDisplayEditor}>
        {/* Text Display Editor */}
        <TextDisplayEditor
          fileInputRef={fileInputRef}
          status={status}
          fileName={fileName}
          ocrData={ocrData}
          setOcrData={setOcrData}
          onFileChange={handleFileChange}
          onFileDrop={handleFileDrop}
          onPerformOCR={performOCR}
        />
      </div>

      {status === "loading" && (
        <p className={styles.loadingMessage}>Loading...</p>
      )}
      {status === "error" && (
        <p className={styles.errorMessage}>
          Unknown error occurred. Please contact support.
        </p>
      )}
    </div>
  );
};

export default TextExtract;
