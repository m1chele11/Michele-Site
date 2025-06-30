"use client";

import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconContainer}>
        <a
          href="https://github.com/m1chele11"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="ri-github-line"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/michele-barrantes-455206255"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="ri-linkedin-line"></i>
        </a>
        <a
          href="mailto:michele.barrantes@gmail.com"
          aria-label="Email"
        >
          <i className="ri-mail-line"></i>
        </a>
      </div>
      <p className={styles.credits}>© {new Date().getFullYear()} Michele Barrantes</p>
    </footer>
  );
}
