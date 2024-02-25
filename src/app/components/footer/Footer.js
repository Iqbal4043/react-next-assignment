import React from "react";
import styles from "../../page.module.scss";
import { IoChevronDownSharp } from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={styles.footerSection}>
        <div className={styles.footerContainer}>
          <div>
            <h3>Categories</h3>
            <h3>Contact</h3>
          </div>
          <div>
            <Link href="#" className={styles.link}>Web Builder</Link>
            <Link href="#" className={styles.link}>Contact</Link>
          </div>
          <div>
            <Link href="#" className={styles.link}>Hosting</Link>
            <Link href="#" className={styles.link}>Privacy Policy</Link>
            
            <Link href="#" className={styles.link}>
            United States <IoChevronDownSharp />
            </Link>
            
          </div>
          <div>
            <Link href="#" className={styles.link}>Data Center</Link>
            <Link href="#" className={styles.link}>Terms Of Service</Link>
          </div>
          <div>
            <Link href="#" className={styles.link}>Robotic-Automation</Link>
            <Link href="#" className={styles.link}>Categories</Link>
          </div>
          <div>
            <Link href="#" className={styles.link}>&nbsp;</Link>
            <Link href="#" className={styles.link}>About</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
