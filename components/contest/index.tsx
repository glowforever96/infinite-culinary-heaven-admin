"use client";
import { Fragment } from "react";
import * as styles from "./contest.css";
import { useInfiniteContests } from "@/hooks/useInfiniteContests";
import Image from "next/image";

export default function Contest() {
  const { data, ref } = useInfiniteContests();
  console.log(data);
  return (
    <div className={styles.contestWrapper}>
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.map(({ title, topicIngredient }) => (
            <div key={title} style={{ height: 200, backgroundColor: "red" }}>
              <div>{title}</div>

              <Image
                src={topicIngredient.image}
                width={200}
                height={200}
                alt="재료 이미지"
              />
            </div>
          ))}
        </Fragment>
      ))}
      <div ref={ref} style={{ height: 10 }} />
    </div>
  );
}
