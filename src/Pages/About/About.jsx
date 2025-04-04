import React, { useEffect, useState } from "react";
import styles from "./about.module.css";
import { aboutImages } from "../../constants";


const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % aboutImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.aboutContainer}>
      <h2 id={styles.aboutTitle}>About Us</h2>
      <div className={styles.aboutusBox}>
        <div className={styles.aboutusContent}>
          <div className={`${styles.aboutHeading} block`}>
            <h2>కాపు రత్నాలు పెళ్లి వేదిక</h2>
            <h2>Nandam ELITE Matrimony</h2>
            <ul className={styles.aboutUl}>
              <li>
                ఈ కాపు రత్నాలు పెళ్లి వేదిక లో కొత్త వారు మీ ఫ్రెండ్స్ ద్వారా గ్రూపు లో
                పోస్ట్ చేస్తున్నారు వారు ఆదివారం 11 am నుండి 5 pm వరకు దయ చేసే
                ఒక ఆదివారం మాత్రమే మాటలాడి అన్ని నిజాలు నిర్భయం గా చెప్పాలి,
                (మిగతా రోజులు SMS పెట్టాలి)కచ్చితంగా మిమ్మల్ని మీరు పరిచయం
                చేసుకోవాలి ఈ గ్రూపు లో తల్లి తండ్రులు మాత్రమే ఉండాలి దయ చేసి
                మధ్య వర్తులు వద్దు ఇది అంతా పూర్తి ఉచిత సేవ మాత్రమే 
              </li>
              {/* <li>
                👉🏽21 years నుండి ఇప్పటి వరకు మంచి పేరు తెచ్చుకున్న కాపు కళ్యాణ
                వేదిక వెబ్సైట్ అప్లికేషన్ వస్తుంది 
              </li>
              <li>🌹👉🏽కాపు కళ్యాణ వేదిక🌻</li>
              <li>
                లయన్ నందం రామ ప్రసాద్ రావు ఫౌండర్ ప్రెసిడెంట్ కాపు కళ్యాణ వేదిక
                సెల్ 9848016623
              </li> */}
            </ul>
          </div>
        </div>
        <div className={`${styles.aboutusImg} block`}>
          <img
            src={aboutImages[currentImage]}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
