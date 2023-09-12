import React, { useState, useEffect } from "react";
import { categories } from "../../../data/categoriesData";
import styles from "./Categories.module.css";

const Categories = ({ onCategoryClick }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  useEffect(() => {
    const defaultCategory = categories.find(
      (cat) => cat.label === "All Categories"
    );
    if (defaultCategory) {
      onCategoryClick(defaultCategory.label);
    }
  }, [onCategoryClick]); //
  return (
    <div className={styles["categories-container"]}>
      {categories.map((category, index) => (
        <div
          key={category.label}
          className={`${styles["category-item"]} ${
            selectedCategory === category.label ? styles["selected"] : ""
          }`}
          onClick={() => {
            onCategoryClick(category.label);
            setSelectedCategory(category.label);
          }}
        >
          <img
            src={category.icon}
            alt={category.label}
            className={styles["category-icon"]}
          />
          <div className={styles["category-label"]}>{category.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
