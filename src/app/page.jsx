"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Button from "@/components/Button/Button";
import Hero from "../../public/hero.png";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { lang } = useLanguage();

  const isEn = lang === "en";

  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          {isEn
            ? "Viktor Streltsov — Front-end Developer"
            : "Стрельцов Виктор — Front-end Developer"}
        </h1>
        <p className={styles.desc}>
          {isEn
            ? "I design and build production-ready interfaces with React and Next.js, working with TypeScript, Redux Toolkit, Zustand and a modern frontend stack. Looking for interesting tasks in a comfortable and transparent team."
            : "Разрабатываю продакшн‑интерфейсы на React и Next.js, работаю с TypeScript, Redux Toolkit, Zustand и современным frontend‑стеком. Ищу интересные задачи в удобной и прозрачной команде."}
        </p>
        <Button
          url="/portfolio"
          text={isEn ? "View projects" : "Смотреть проекты"}
        />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="main photo" className={styles.img} />
      </div>
    </main>
  );
}
