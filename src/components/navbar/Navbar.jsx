"use client"

import Link from "next/link"
import styles from "./page.module.scss";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Skills",
      url: "/skills",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
  ];

const Navbar = () => {
  return (
    <nav className={styles.container}>
        <Link href='/' className={styles.logo}>Portfolio</Link>
        <div className={styles.links}>
          <DarkModeToggle />
            {links.map((link) =>(
                <Link key={link.id} href={link.url}>{link.title}</Link>
            ))}
        </div>
    </nav>
  )
}

export default Navbar
