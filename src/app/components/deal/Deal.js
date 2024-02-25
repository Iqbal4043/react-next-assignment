import React from "react";
import styles from "../../page.module.scss";
import Image from "next/image";
import Button from "../button/button";
import dealData from "../../../../public/dealData.json";

const DealCards = () => {
  return (
    <>
      <h2 className={styles.dealHeading}>Related deals you might like for</h2>
      <div className={styles.dealContainer}>
        {dealData.map((deal, index) => (
          <div className={styles.dealCard} key={index}>
            <div className={styles.imgBox}>
              <Image src={deal.imageSrc} width={141} height={103} alt="#" />
            </div>
            <div className={styles.discount}>
              <span>{deal.discount.percentage}</span>
              <span>{deal.discount.limitedTime}</span>
            </div>
            <div>
              <h5>{deal.title}</h5>
            </div>
            <div>
              <p>{deal.description}</p>
            </div>
            <div className={styles.priceBox}>
              <span>
                <b>{deal.price.discounted}</b>
              </span>
              <span>{deal.price.original}</span>
              <span>{deal.price.discountLabel}</span>
            </div>
            <div className={styles.viewBtn}>
              <Button text="View Deal" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DealCards;
