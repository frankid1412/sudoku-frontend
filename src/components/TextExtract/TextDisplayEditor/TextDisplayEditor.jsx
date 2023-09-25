import React from "react";
import styles from "./TextDisplayEditor.module.css";
import Fileicon from "../../../asset/File.svg";
import DownloadButton from "../DownloadButton/DownloadButton";
import Checkicon from "../../../asset/check.svg";

const TextDisplayEditor = ({
  fileInputRef,
  status,
  fileName,
  ocrData,
  setOcrData,
  onFileChange,
  onFileDrop,
  onPerformOCR,
  uploadedFile,
}) => {
  return (
    <>
      <div
        className={styles.textDisplayEditorContainer}
        onDrop={onFileDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {status === "initial" ? (
          <>
            <div className={styles.dropYourFileText}>
              <div className={styles.dropAndSpacing}>Drop your file here</div>
              <div className={styles.orSpacing}>OR</div>
            </div>
            <div
              className={styles.chooseFileDiv}
              onClick={() => document.getElementById("hiddenFileInput").click()}
            >
              <div className={styles.cFInnerDiv}>
                <img
                  src={Fileicon}
                  alt="Fileicon"
                  className={styles.fileIcon}
                />
                <div className={styles.chooseFileIconText}>Choose File</div>
              </div>
            </div>
            <div className={styles.maxFileSizeTextWrapper}>
              <div className={styles.maxFileSizeText}>
                Max file size: 128 MB
              </div>
            </div>
          </>
        ) : status === "uploading" ? (
          <div className={styles.uploadingContainer}>
            <div className={styles.uploadingText}>Loading...</div>
            <div className={styles.uploadingGif}></div>
          </div>
         ) : status === "uploaded" ? (
          <div className={styles.uploadedContainer}>
              <div className={styles.fileNameCenter}>
                  File: {fileName} 
                  <img src={Checkicon} alt="Uploaded" className={styles.checkIcon}/>
              </div>
          </div>
        ) : status === "processing" ? (
          <div className={styles.processingContainer}>
          <div className={styles.processingText}>Processing...</div>
          <div className={styles.processingGif}></div>
      </div>
     
        ) : status === "processed" ? (
          <>
            <textarea
              value={ocrData}
              className={styles.displayArea}
              onChange={(e) => setOcrData(e.target.value)}
            ></textarea>
            <DownloadButton text={ocrData} file={uploadedFile} />
          </>
        ) : null}
        <input
          id="hiddenFileInput"
          ref={fileInputRef}
          type="file"
          onChange={onFileChange}
          style={{ display: "none" }}
        />
      </div>
      {status === "uploaded" && (
        <div className={styles.startTextExtractorButtonContainer}>
          <button
            className={styles.startTextExtractorButton}
            onClick={onPerformOCR}
          >
            Start Textracter
          </button>
        </div>
      )}
    </>
  );
};

export default TextDisplayEditor;
