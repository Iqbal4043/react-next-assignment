import React from "react";
import styles from "../../page.module.scss";
import Image from "next/image";
import { CiTrophy } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import Button from "../button/button";
import cardData from "../../../../public/cardData.json";

const Card = () => {
  return (
    <>
      {cardData.map((card, index) => (
        <div className={styles.mainCard} key={index}>
          {card.bestChoice && (
            <div className={styles.bestChoise}>
              <span>
                <CiTrophy fontSize={20} color="#fff" /> Best Choice
              </span>
            </div>
          )}
          <div className={styles.count}>
            <span>{card.count}</span>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.firstBox}>
              <Image src={card.imageSrc} width={141} height={103} alt="#" />
              <p>{card.builderName}</p>
            </div>
            <div className={styles.secondBox}>
              <p>
                <b>{card.description1}</b>
                {card.description2}
              </p>
              <p>
                <b>Main highlights</b>
              </p>
              <p>{card.highlights}</p>
              {card.additionalData && (
                <>
                  <div className={styles.dataBox}>
                    {card.additionalData.dataBox.map((data, dataIndex) => (
                      <div key={dataIndex}>
                        <span>{data.value}</span>
                        <span>{data.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.whyLoveBox}>
                    <p>Why we love it</p>
                    <div>
                      {card.additionalData.whyLove.map((love, loveIndex) => (
                        <p key={loveIndex}>
                          <span>
                            <CiCircleCheck color={love.iconColor} />
                          </span>
                          {love.label}
                        </p>
                      ))}
                    </div>
                  </div>
                </>
              )}
              <div>
                <span>
                  Show more <IoIosArrowDown />
                </span>
              </div>
            </div>
            <div className={styles.thirdBox}>
              <div>
                <span>{card.rating.value}</span>
                <span>{card.rating.label}</span>
                <span>
                  {Array.from({ length: card.rating.stars }, (_, i) => (
                    <FaStar key={i} fontSize={10} color="#FFB80F" />
                  ))}
                </span>
              </div>
              <Button text="View" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
