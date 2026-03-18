"use client";

import styles from "./page.module.scss";
import { useLanguage } from "@/context/LanguageContext";

const Skills = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{isEn ? "Skills" : "Навыки"}</h1>

      <div className={styles.skillsGrid}>
        <div className={styles.item}>
          <h2 className={styles.category}>
            {isEn ? "Frontend" : "Frontend"}
          </h2>
          <ul className={styles.list}>
            <li>HTML / CSS / SCSS</li>
            <li>JavaScript / TypeScript</li>
            <li>React / Next.js</li>
          </ul>
        </div>

        <div className={styles.item}>
          <h2 className={styles.category}>
            {isEn ? "State & Data" : "Состояние и данные"}
          </h2>
          <ul className={styles.list}>
            <li>Redux / Redux Toolkit</li>
            <li>Zustand / jotai</li>
            <li>React Query / TanStack Query</li>
          </ul>
        </div>

        <div className={styles.item}>
          <h2 className={styles.category}>
            {isEn ? "Tooling" : "Инструменты"}
          </h2>
          <ul className={styles.list}>
            <li>Git</li>
            <li>Node.js / Vite / Gulp</li>
            <li>
              {isEn
                ? "CI-friendly, production‑ready workflow"
                : "Процесс разработки, готовый к CI и продакшну"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
