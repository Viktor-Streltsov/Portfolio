"use client";

import Link from "next/link";
import styles from "./page.module.scss";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const { lang } = useLanguage();

  const links = [
    {
      id: 1,
      title: lang === "en" ? "Home" : "Главная",
      url: "/",
    },
    {
      id: 2,
      title: lang === "en" ? "Portfolio" : "Портфолио",
      url: "/portfolio",
    },
    {
      id: 3,
      title: lang === "en" ? "Skills" : "Навыки",
      url: "/skills",
    },
    {
      id: 4,
      title: lang === "en" ? "About" : "Обо мне",
      url: "/about",
    },
    {
      id: 5,
      title: lang === "en" ? "Contact" : "Контакты",
      url: "/contact",
    },
  ];

  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
        Portfolio
      </Link>
      <div className={styles.links}>
        <LanguageToggle />
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
