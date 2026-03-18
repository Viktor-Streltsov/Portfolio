"use client";

import Button from "@/components/Button/Button";
import styles from "./page.module.scss";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/hero.png"
          fill={true}
          alt="Стрельцов Виктор"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Стрельцов Виктор</h1>
          <h2 className={styles.imgDesc}>
            Frontend Developer / Frontend‑разработчик
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            {isEn ? "About me" : "Обо мне"}
          </h1>
          <p className={styles.desc}>
            {isEn ? (
              <>
                Hello! My name is Viktor Streltsov, I am a Frontend Developer
                with commercial experience building interfaces for
                production‑ready projects. I work with React, Next.js and
                TypeScript, understand the React ecosystem well and can quickly
                dive into an existing codebase.
                <br />
                <br />
                In projects I have developed and maintained the client side of
                web applications, created UI and interactive elements, refactored
                code and implemented features according to technical
                requirements. I use modern state‑management tools such as Redux
                Toolkit, Zustand, jotai, React Query / TanStack Query, as well as
                SCSS, Git, Vite and Gulp.
                <br />
                <br />
                I live in Bishkek, citizenship — Russia. I am open to remote
                work, relocation and business trips. I am interested in projects
                with a thoughtful development process where I can bring value to
                the business and grow as a specialist.
              </>
            ) : (
              <>
                Здравствуйте! Меня зовут Виктор Стрельцов, я Frontend Developer с
                коммерческим опытом разработки интерфейсов для продакшн‑проектов.
                Работаю с React, Next.js и TypeScript, уверенно чувствую
                React‑экосистему и быстро вникаю в существующий код.
                <br />
                <br />
                В проектах занимался разработкой и поддержкой клиентской части
                веб‑приложений, созданием интерфейсов и их интерактивных
                элементов, рефакторингом кода и реализацией функциональности по
                техническому заданию. Использую современные инструменты работы с
                состоянием: Redux Toolkit, Zustand, jotai, React Query / TanStack
                Query, а также SCSS, Git, Vite и Gulp.
                <br />
                <br />
                Проживаю в Бишкеке, гражданство — Россия. Открыт к удалённому
                формату, релокации и командировкам. Интересны проекты с
                продуманным процессом разработки, где можно приносить пользу
                бизнесу и развиваться как специалист.
              </>
            )}
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>
            {isEn ? "How I work" : "Как я работаю"}
          </h1>
          <p className={styles.desc}>
            {isEn ? (
              <>
                Clear requirements, open communication and clean code are
                important to me. I like to design interfaces so that they are
                convenient to use on different devices and easy for developers to
                maintain and evolve.
                <br />
                <br />
                In my work I rely on design mockups, agree on priorities and try
                to propose solutions that both look good and are realistic in
                terms of delivery time. I am open to feedback and teamwork.
              </>
            ) : (
              <>
                Мне важны понятные требования, открытая коммуникация и аккуратный
                код. Люблю продумывать интерфейсы так, чтобы ими было удобно
                пользоваться на разных устройствах, а разработчикам было легко
                поддерживать и развивать продукт.
                <br />
                <br />
                В работе опираюсь на дизайн‑макеты, договариваюсь о приоритетах и
                стараюсь предлагать решения, которые одновременно выглядят хорошо
                и остаются реалистичными по срокам. Открыт к обратной связи и
                командной работе.
              </>
            )}
          </p>
          <Button
            url="/contact"
            text={isEn ? "Contact me" : "Связаться со мной"}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
