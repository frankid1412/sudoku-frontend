import React from "react";
import Card from "../Cards/Card/Card";
import styles from "./Cards.module.css";
import { cardsData } from "../../../data/cardsData";
import { categories } from "../../../data/categoriesData";

const Cards = ({ category }) => {
  const selectedCategory = categories.find((cat) => cat.label === category); // 修改为categories
  if (!selectedCategory) {
    return null;
  }
  const filteredProducts = cardsData.filter((product) =>
    selectedCategory.range.includes(product.label)
  );

  return (
    <section className={styles.cardContainer}>
      {filteredProducts.map((product, index) => (
        <Card key={product.label} {...product} />
      ))}
    </section>
  );
};

export default Cards;
