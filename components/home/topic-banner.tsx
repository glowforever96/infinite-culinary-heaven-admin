import Link from "next/link";
import * as styles from "./banner.css";

async function getTopicLength() {
  const res = await fetch(`${process.env.API_URL}/topic-ingredients`);
  const data = await res.json();
  return data.topicIngredients.length;
}

export default async function TopicBanner() {
  const topicLength = await getTopicLength();

  return (
    <Link href="/topic" className={styles.banner}>
      <div className={styles.topicLength}>
        현재 등록 된 재료 <br />
        <span className={styles.span}>🥩 {topicLength}</span>개 🥬
      </div>
    </Link>
  );
}
