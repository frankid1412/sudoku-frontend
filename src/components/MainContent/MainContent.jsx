import SearchBar from "../MainContent/SearchBar/SearchBar";
import Categories from "./Categories/Categories";
import Cards from "../MainContent/Cards/Cards";
import styles from "./MainContent.module.css";
import searchData from "../../data/SearchData.json";
import React, { useState } from "react";

const MainContent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className={styles.mainContent}>
      <div className={styles.searchContainer}>
        <SearchBar placeholder="Search Tools" data={searchData} />
      </div>

      <div className={styles.categoriesContainer}>
        <Categories onCategoryClick={setSelectedCategory} />
      </div>

      <div className={styles.cardsContainer}>
        <Cards category={selectedCategory} />
      </div>
    </div>
  );
};

export default MainContent;
