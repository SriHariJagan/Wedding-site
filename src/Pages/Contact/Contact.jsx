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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.5619809971586!2d81.80613609538958!3d16.99608266521729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a398b43ada1f%3A0x7b9ba4cd521ff6d8!2sLakshmi%20Enclave!5e0!3m2!1sen!2sin!4v1743765612296!5m2!1sen!2sin"
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

