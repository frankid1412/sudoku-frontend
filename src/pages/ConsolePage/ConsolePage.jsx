import React, {useEffect } from "react";
import styles from "./ConsolePage.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import MainContent from "../../components/MainContent/MainContent";
import { HARDCODE_USER } from "../../constants/constants";

const ConsolePage = () => {
  const user = useSelector((state) => state.auth.user || HARDCODE_USER);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      console.log("user doesn exist");
      navigate("/signin");
    } else {
      // Handle your GET request and other logic here
    }
  }, [user, navigate]);
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mainArea}>
        <div className={styles.sidebar}>
          <Sidebar userCredit={user.credit} userName={user.username} />
        </div>
        <div className={styles.mainContent}>
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default ConsolePage;
