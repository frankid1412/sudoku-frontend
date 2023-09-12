import React from "react";
import styles from "./Sidebar.module.css";
import UserInfo from "./UserInfo/UserInfo";
import { navItems } from "../../data/sidebarData";

const Sidebar = ({ userName, userCredit }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.navContainer}>
        {navItems.map((item) => (
          <a href={item.link} className={styles.navItem}>
            <img src={item.icon} alt={item.label + "icon"} className={styles.navIcon}/>
            {item.label}
          </a>
        ))}
      </div>
      <div className={styles.userInfoContainer}>
        <UserInfo userName={userName} userCredit={userCredit} />
      </div>
    </div>
  );
};

export default Sidebar;
