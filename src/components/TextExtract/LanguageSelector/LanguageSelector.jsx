import React from "react";
import styles from "./LanguageSelector.module.css";

const LanguageSelector = ({ selectedLanguage, onLanguageChange }) => {
  const handleSelectorLanguageChange = (e) => {
    onLanguageChange(e.target.value);
  };

  return (
    <div className={styles.languageSelectorContainer}>
      <span>Language: </span>
      <select value={selectedLanguage} onChange={handleSelectorLanguageChange}>
        <option value="English">English</option>
        <option value="Chinese (Simplified)">Chinese (Simplified)</option>
        <option value="Chinese (Traditional)">Chinese (Traditional)</option>
        <option value="German">German</option>
        <option value="French">French</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
