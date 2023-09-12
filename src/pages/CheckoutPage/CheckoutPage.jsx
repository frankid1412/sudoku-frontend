import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../config/config.js';
import CheckoutCard from '../../components/checkout_card/StripeCheckoutCard.jsx';
import Header from '../../components/Header/Header.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import styles from './CheckoutPage.module.css';

const CheckoutPage = () => {

  const [credit, setCredit] = useState(100);

  const cards = [
    { amount: '32', credit: '10', product: '1' },
    { amount: '65', credit: '50', product: '2' },
    { amount: '122', credit: '100', product: '3' },
    // ... 其它卡片
  ];

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get('session_id');

    if (sessionId){
      axios.post(`${config.BACKEND_ENDPOINT}/api/v1/confirm-payment`, { session_id: sessionId })
      .then(response => {
        //TODO change it to backend API to get user info
        const newCreditValue = Number(credit) + Number(response.data);
        setCredit(newCreditValue); // 使用 useState 的 setCredit 更新 credit 的值
      })
      .catch(error => {
          // Handle error
      });
    }
    // Notify backend about the successful payment
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div>

      <Header/>

        <div style={{ display: 'flex' }}>

        <Sidebar userCredit={credit} userName={'test'} />

        <div div style={{ flexDirection: 'column' }}>

        <h3 className={styles.title}>
        ToolSmart Credit
        </h3>
        <p className={styles.description}> 
        DescriptionDescriptionDescriptionDescriptionDescription<br/>
        DescriptionDescriptionDescriptionDescriptionDescriptionDescription
        </p>
        <div className={styles.card_container}>
          {cards.map(card => (
              <CheckoutCard 
                key={card.credit} 
                amount={card.amount} 
                credit={card.credit}
                product={card.product}
              />
            ))}
        </div>

        </div>
    

        </div>
    </div>
  );
};

export default CheckoutPage;