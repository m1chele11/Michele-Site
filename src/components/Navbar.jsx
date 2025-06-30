"use client";

import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <a href="#home">
            <i className="ri-home-line"></i> home
          </a>
        </li>
        <li>
          <a href="#about">
            <i className="ri-user-line"></i> about
          </a>
        </li>
        <li>
          <a href="#work">
            <i className="ri-briefcase-line"></i> work
          </a>
        </li>
        <li>
          <a href="#edu">
            <i className="ri-graduation-cap-line"></i> edu
          </a>
        </li>
      </ul>
    </nav>
  );
}

    