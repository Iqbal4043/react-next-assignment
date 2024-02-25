import React from "react";
import styles from "../../page.module.scss";
import { GoSearch } from "react-icons/go";
import Link from "next/link";
import navData from "../../../../public/navData.json";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.searchBox}>
          <GoSearch fontSize={20} color="#626E79" />
          <input type="text" />
        </div>
        {navData.map((item, index) => (
          <Link key={index} href={item.url} className={styles.link}>
            {item.text}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
