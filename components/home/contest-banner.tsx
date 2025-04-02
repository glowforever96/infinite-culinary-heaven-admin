import Link from "next/link";
import * as styles from "./banner.css";
import type { Contest } from "@/models/contest";
import { ongoingContest } from "@/lib/ongoingContest";

async function getContestLength() {
  const res = await fetch(`${process.env.API_URL}/contests`);
  const data: Contest = await res.json();
  const ableContest = ongoingContest(data);
  return ableContest.length;
}

export default async function ContestBanner() {
  const ableContestLength = await getContestLength();
  return (
    <Link href="/contest" className={styles.banner}>
      <div className={styles.topicLength}>
        현재 진행 중인 경연 <br />
        <span className={styles.span}>🏆 {ableContestLength}</span>개 🎖️
      </div>
    </Link>
  );
}
