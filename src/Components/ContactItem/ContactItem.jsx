import React from "react";
import styles from './contactItem.module.css'

const ContactItem = ({icon, name, description}) => {
  const className = styles[name.toLowerCase()] || ""
  return (
    <div className={`${styles.contactItem} ${className} topBlock`}>
      <i className={icon} /> 
      <b>{name}</b>
      <p>{description}</p>
    </div>
  );
};

export default ContactItem;
