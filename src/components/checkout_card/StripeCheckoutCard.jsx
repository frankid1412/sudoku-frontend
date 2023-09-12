import React from 'react';
import axios from 'axios';
import config from '../../config/config.js';
import styles from './StripeCheckoutCard.module.css'
import whitecoins from "../../asset/WhiteCoins.svg";

const CheckoutCard = ({amount, credit, product}) => {

  const handleCheckout = () => {
    console.log(`${config.BACKEND_ENDPOINT}/api/v1/create-checkout-session`);
    axios.post(`${config.BACKEND_ENDPOINT}/api/v1/create-checkout-session`, {product: product})
        .then(response => {
          window.location.href = response.data.url;
        })
        .catch(error => {
            console.error('Error:', error);
        });
  };



  return (
    <div className={styles.card} onClick={handleCheckout}>
        <div className={styles.amount_container}> 
          <img src={whitecoins} alt="icon" className={styles.whitecoins} />
          <h3 className={styles.amount_text}>
          {amount} 
          </h3>
        </div>
        <h3 className={styles.credit_text}> $ { credit} </h3>
    </div>
  );
};

export default CheckoutCard;