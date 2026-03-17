import styles from "./page.module.scss";

const Skills = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Skills</h1>

      <div className={styles.skillsGrid}>
        <div className={styles.item}>
          <h2 className={styles.category}>Frontend</h2>
          <ul className={styles.list}>
            <li>HTML / CSS / SCSS</li>
            <li>JavaScript / TypeScript</li>
            <li>React / Next.js</li>
          </ul>
        </div>

        <div className={styles.item}>
          <h2 className={styles.category}>State & Data</h2>
          <ul className={styles.list}>
            <li>Redux / Redux Toolkit</li>
            <li>Zustand / jotai</li>
            <li>React Query / TanStack Query</li>
          </ul>
        </div>

        <div className={styles.item}>
          <h2 className={styles.category}>Tooling</h2>
          <ul className={styles.list}>
            <li>Git</li>
            <li>Node.js / Vite / Gulp</li>
            <li>CI-friendly, production‑ready workflow</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
