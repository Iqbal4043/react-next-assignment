import styles from "./page.module.scss";
import Navbar from "./components/header/Navbar";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoChevronDownSharp } from "react-icons/io5";
import Card from "./components/card/card";
import Deal from "./components/deal/Deal";
import Footer from "./components/footer/Footer";

export default function Home() {
  const iconStyle = { fontSize: 20, color: "#4B5665" };
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.heading}>Best Website builders in the US</h1>
        <div className={styles.topbar}>
          <div className={styles.leftSection}>
            {["CiCircleCheck", "IoIosInformationCircleOutline"].map(
              (Icon, index) => (
                <div key={index}>
                  {Icon === "CiCircleCheck" ? (
                    <CiCircleCheck {...iconStyle} />
                  ) : (
                    <IoIosInformationCircleOutline {...iconStyle} />
                  )}
                  Last Updated - February 22, 2020
                </div>
              )
            )}
          </div>
          <div className={styles.rightSection}>
            <span>Top Relevant</span>
            <IoChevronDownSharp {...iconStyle} />
          </div>
        </div>
        <div className={styles.itemBar}>
          {[
            "Tools",
            "AWS Builder",
            "Start Build",
            "Build Supplies",
            "Tooling",
            "BlueHosting",
          ].map((item, index) => (
            <div key={index}>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className={styles.recentBar}>
          {["Home", "Hosting for all", "Hosting", "Hosting6", "Hosting5"].map(
            (item, index) => (
              <>
                <span key={index}>{item}</span>
                <span> &#62;</span>
              </>
            )
          )}
        </div>
        <Card />
        <Deal />
        <div className={styles.signUpSection}>
          <div>
            <span>Sign up and get exclusive special deals</span>
          </div>
          <div>
            <input type="text" />
            <button>Sign Up</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
