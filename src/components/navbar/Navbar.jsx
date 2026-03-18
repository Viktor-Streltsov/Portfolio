"use client";

import Link from "next/link";
import styles from "./page.module.scss";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Hero from "../../../public/nlo.webp";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { lang } = useLanguage();
  const pathname = usePathname();

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
        <Image src={Hero} alt="main photo" className={styles.img} />
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            aria-current={pathname === link.url ? "page" : undefined}
            className={
              pathname === link.url ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            {link.title}
          </Link>
        ))}
        <LanguageToggle />
      </div>
    </nav>
  );
};

export default Navbar;
