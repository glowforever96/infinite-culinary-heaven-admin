"use client";
import { Fragment } from "react";
import * as styles from "./contest.css";
import { useInfiniteContests } from "@/hooks/useInfiniteContests";
import ContestCard from "./contest-card";

export default function Contest() {
  const { data, ref } = useInfiniteContests();
  console.log(data);
  return (
    <div className={styles.contestWrapper}>
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.map((contest) => (
            <ContestCard key={contest.id} contestData={contest} />
          ))}
        </Fragment>
      ))}
      <div ref={ref} style={{ height: 10 }} />
    </div>
  );
}
