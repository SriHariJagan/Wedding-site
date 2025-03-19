import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navBar}>
      <h1 id={styles.title}>కాపు రత్నాలు పెళ్లి వేదిక</h1>

      {/* Mobile Menu Icon */}
      <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`${styles.navList} ${menuOpen ? styles.active : ""}`}>
        {["home", "about", "services", "gallery", "contact"].map((section) => (
          <li key={section}>
            <Link
              to={section}
              smooth={true}
              duration={500}
              offset={-78}
              spy={true}
              activeClass={styles.activeLink}
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
