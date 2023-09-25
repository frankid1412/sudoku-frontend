import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import TextExtract from "../../components/TextExtract/TextExtract";
import styles from "./TextExtractPage.module.css";
import { Link } from "react-router-dom";
import useFileUpload from "../../hooks/useFileUpload";

const TextExtractPage = () => {
  // State management for language display and backend language code
  const [displayLanguage, setDisplayLanguage] = useState("English");
  const [backendLanguage, setBackendLanguage] = useState("eng");

  // Mapping of display language to their backend codes
  const languageMap = {
    English: "eng",
    "Chinese (Simplified)": "chi_sim",
    "Chinese (Traditional)": "chi_tra",
    German: "deu",
    French: "fra",
  };

  // Custom hook for file uploads and fetching OCR data
  const { ocrData, status, error, uploadFile } = useFileUpload(
    process.env.REACT_APP_API_ENDPOINT
  );

  // changing the language for OCR processing
  const handleLanguageChange = (newDisplayLanguage) => {
    setDisplayLanguage(newDisplayLanguage);
    const newBackendLanguage = languageMap[newDisplayLanguage];
    setBackendLanguage(newBackendLanguage);
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mainArea}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.textExtractPageArea}>
          {/*  Navigation links topleft */}
          <div className={styles.dashboardText}>
            <Link to="/console" className={styles.dashboardLink}>
              Dashboard
            </Link>
            <span>/</span>
            <Link to="/text-extract" className={styles.textracterLink}>
              Textracter
            </Link>
          </div>
          {/* text extraction from images */}
          <TextExtract
            ocrData={ocrData}
            uploadFile={(file) => uploadFile(file, backendLanguage)} 
            displayLanguage={displayLanguage}
            handleLanguageChange={handleLanguageChange}
            status={status}
          />
        </div>
      </div>
      {/* Display errors, if any */}
      {error && (
        <div className="errorMessage">
          <h4>An Error Occurred</h4>
          <p>{error}</p>
          <p>
            Please try again later or contact support if the issue persists.
          </p>
        </div>
      )}
    </div>
  );
};

export default TextExtractPage;
