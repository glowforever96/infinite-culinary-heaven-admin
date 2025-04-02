import Topic from "@/components/topic/topic";
import { Suspense } from "react";
import * as styles from "./page.css";
import Button from "@/components/button";
import Skeleton from "@/components/skeleton";

export default function TopicPage() {
  return (
    <div className={styles.topicPageWrapper}>
      <Suspense fallback={<Skeleton />}>
        <div className={styles.topicLength}>
          현재 등록 완료 된 재료들이에요.
        </div>
        <Topic />
      </Suspense>
      <Button buttonText="재료 등록" type="TOPIC" />
    </div>
  );
}
