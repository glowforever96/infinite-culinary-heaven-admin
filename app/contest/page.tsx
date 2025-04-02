import { Suspense } from "react";
import * as styles from "./page.css";
import Button from "@/components/button";
import Skeleton from "@/components/skeleton";
import Contest from "@/components/contest";

export default function ContestPage() {
  return (
    <div className={styles.contestPageWrapper}>
      <Suspense fallback={<Skeleton />}>
        <div className={styles.divText}>진행 됐던 대회에요.</div>
        <Contest />
      </Suspense>
      <Button buttonText="대회 등록" type="CONTEST" />
    </div>
  );
}
