"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./languageToggle.module.scss";

const LanguageToggle = () => {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button className={styles.toggle} onClick={toggleLanguage}>
      <span className={lang === "en" ? styles.active : ""}>EN</span>
      <span className={styles.separator}>/</span>
      <span className={lang === "ru" ? styles.active : ""}>RU</span>
    </button>
  );
};

export default LanguageToggle;

