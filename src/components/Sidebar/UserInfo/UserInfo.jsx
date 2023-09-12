import React from "react";
import styles from "./UserInfo.module.css";
import crediticon from "../../../asset/Coins.svg";
import avatar from "../../../asset/Avatar.png";
import { useNavigate } from 'react-router-dom';

const UserInfo = ({ userName, userCredit }) => {
  const currentDate = new Date().toLocaleDateString(); // 获取今天的日期
  const navigate = useNavigate();

  const navigateToCheckoutPage = () => {
    navigate('/checkout');
  };

  return (
    <div className={styles.userInfoContainer}>
      <button className={styles.creditButton}>
        <span className={styles.creditButtonText}>Your Credit</span>
      </button>
      <div className={styles.creditValue}>
        <img src={crediticon} alt="icon" className={styles.creditIcon} />
        <span className={styles.creditText}>{userCredit}</span>
      </div>
      <div className={styles.description}>Description/{currentDate}</div>
      <button className={styles.addCreditButton} onClick={navigateToCheckoutPage}>Add Credit</button>

      <div className={styles.userName}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <span className={styles.userNameText}>{userName}</span>
      </div>
    </div>
  );
};

export default UserInfo;
