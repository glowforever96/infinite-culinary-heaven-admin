import ContestBanner from "@/components/home/contest-banner";
import TopicBanner from "@/components/home/topic-banner";
import * as styles from "./page.css";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.topicContestContainer}>
        <TopicBanner />
        <ContestBanner />
      </div>
      <div>신고 처리 현황</div>
    </div>
  );
}
