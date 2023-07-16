import React from "react";
import styles from "./portfolio.module.css";
import Link from "next/link";
import illustration from 'public/illustration.png';
import websites from 'public/websites.jpg';
import application from 'public/apps.jpg';
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/websites" className={styles.item}>
          <Image src={websites} className={styles.img} />
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <Image src={illustration} className={styles.img} />
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/applications" className={styles.item}>
          <Image src={application} className={styles.img} />
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;