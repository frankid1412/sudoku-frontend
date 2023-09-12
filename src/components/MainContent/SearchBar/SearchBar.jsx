import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import searchIcon from "../../../asset/Search.svg";
import closeIcon from "../../../asset/Close.svg";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className={styles.search}>
      <div className={styles.searchInputs}>
        <input
          type="text"
          className={styles.searchInputbar}
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className={styles.searchIcon}>
          {filteredData.length === 0 ? (
            <img src={searchIcon} alt="Search Icon" />
          ) : (
            <img
              src={closeIcon}
              alt="Close Icon"
              id="clearBtn"
              onClick={clearInput}
            />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className={styles.dataResult}>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a
                className={styles.dataItem}
                href={value.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
