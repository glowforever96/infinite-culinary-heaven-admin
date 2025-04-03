import Image from "next/image";
import * as styles from "./contest-card.css";
import { Contest } from "@/models/contest";
import { parseDate } from "@/lib/parseDate";

export default function ContestCard({ contestData }: { contestData: Contest }) {
  const { title, description, startDate, endDate, topicIngredient } =
    contestData;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.subContainer}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.dateWrapper}>
          <span className={styles.date}>시작: {parseDate(startDate)}</span>
          <span className={styles.date}>종료: {parseDate(endDate)}</span>
        </div>
      </div>
      <div />
      <div className={styles.imgWrapper}>
        <Image
          src={topicIngredient.image}
          alt={topicIngredient.name}
          width={120}
          height={120}
          className={styles.img}
        />
        <span className={styles.topicName}>{topicIngredient.name}</span>
      </div>
    </div>
  );
}
