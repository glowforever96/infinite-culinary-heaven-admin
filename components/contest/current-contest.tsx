import ContestCard from "./contest-card";
import * as styles from "./contest.css";
async function getCurrentContest() {
  const res = await fetch(`${process.env.API_URL}/contests/current`);
  const data = await res.json();

  if (data.errorCode === "CONTEST_NOT_FOUND") return false;
  return data;
}

export default async function CurrentContest() {
  const currentContest = await getCurrentContest();

  return currentContest ? (
    <ContestCard contestData={currentContest} />
  ) : (
    <div className={styles.constestNotFound}>
      현재 진행중인 대회가 없습니다.
    </div>
  );
}
