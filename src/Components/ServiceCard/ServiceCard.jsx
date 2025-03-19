import React from "react";
import styles from "./serviceCard.module.css";

const ServiceCard = ({ isVisible, setIsVisible, name, img, description }) => {

  return (
    <div className={`${styles.serviceCard} block`}>
      {!isVisible && <h1 className={styles.serviceTitle}>{name}</h1>}
      <div className={styles.showHide_Btn}>
        {isVisible ? (
          <button className={styles.hideBtn} onClick={() => setIsVisible(true)}>Hide</button>
        ) : (
          <button className={styles.showBtn} onClick={() => setIsVisible(true)}>show</button>
        )}
      </div>
      {isVisible && (
        <>
          <div className={styles.serviceImg}>
            <img
              src={img}
              alt="marrage img"
            />
          </div>
          <div className={styles.serviceCardContent}>
            <h2>{name}</h2>
            <ul className={styles.servicesCardList}>
              {description.map((data, index) => <li key={index}>{data}</li>)}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceCard;
