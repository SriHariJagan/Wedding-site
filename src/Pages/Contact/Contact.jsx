import React from "react";
import styles from "./contact.module.css";
import ContactItem from "../../Components/ContactItem/ContactItem";
import ContactForm from "../../Components/ContactForm/ConatctForm";

import { contactList } from "../../constants";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 id={styles.contactTitle}>Contact Us</h1>
      <div className={styles.contactInfo}>
        {contactList.map((data, index) => (
          <ContactItem key={index} {...data} />
        ))}
      </div>

      <div className={styles.contactBox}>
        <div className={styles.contactForm}>
          <ContactForm />
        </div>
        <div className={`${styles.contactLocation} rightBlock`}>
          <iframe
            className={styles.locationMap}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.191278839673!2d78.391334!3d17.445454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb916761b66d75%3A0x5eef8660d8b6cf6a!2sAgate%20Solutions!5e0!3m2!1sen!2sin!4v1742380741386!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

