import { Topic } from "@/models/topic";
import * as styles from "./step1.css";
import Image from "next/image";
import useContestState from "@/store/useContestState";

export default function SelectTopic({ topic }: { topic: Topic }) {
  const { image, name } = topic;
  const { updateContest } = useContestState();

  return (
    <div className={styles.topicItem}>
      <Image
        src={image}
        alt={name}
        width={120}
        height={120}
        priority
        style={{ borderRadius: 4 }}
      />
      <div className={styles.topicName}>{name}</div>
      <button
        className={styles.resetButton}
        onClick={() => updateContest("topicIngredientId", null)}
      >
        다시 고르기
      </button>
    </div>
  );
}
