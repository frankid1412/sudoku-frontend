import { useNavigate } from 'react-router-dom';
import styles from "../Card/Card.module.css";
import Credit from "../../../../asset/Coins.svg";

const Card = ({ category, toolName, description, action, cost, url }) => {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate(url);
  }

  return (
    <>
      <section className={styles.card}>
        <div className={styles.cardContent}>
          <h2 className={styles.cardCategory}>{category}</h2>
          <h3 className={styles.cardToolName}>{toolName}</h3>
          <p className={styles.cardDescription}>{description}</p>
          <div className={styles.userCreditContainer}>
            <button className={styles.cardButton} onClick={handleButtonClick}>
              {action}
            </button>
            <div className={styles.CreditIconAndNumber}>
              <img
                src={Credit}
                alt="Icon Description"
                className={styles.cardIcon}
              />
              <span className={styles.cardCost}>{cost}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;