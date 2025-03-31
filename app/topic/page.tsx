import Topic from "@/components/topic/topic";
import { Suspense } from "react";
import * as styles from "./page.css";
import RegisterTopic from "@/components/topic/register-topic";

async function getTopicLength() {
  const res = await fetch(`${process.env.API_URL}/topic-ingredients`);
  const data = await res.json();
  return data.topicIngredients.length;
}

export default async function TopicPage() {
  const topicLength = await getTopicLength();

  return (
    <div className={styles.topicPageWrapper}>
      <Suspense fallback={<div>loading...</div>}>
        <div>
          현재 <span>{topicLength}</span>개의 재료가 등록 되어있어요.
        </div>
        <Topic />
      </Suspense>
      <RegisterTopic />
    </div>
  );
}
