"use client";
import Image from "next/image";
import { Fragment } from "react";
import { useInfiniteTopics } from "@/hooks/useInfiniteTopics";
import * as styles from "./topic.css";

export default function Topic() {
  const { data, ref } = useInfiniteTopics();

  return (
    <div className={styles.topicWrapper}>
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.map(({ name, image, id }) => (
            <div key={`${id}${name}`} className={styles.topicItem}>
              <Image
                src={image}
                alt={name}
                width={120}
                height={120}
                priority
                style={{ borderRadius: 4 }}
              />
              <div className={styles.topicName}>{name}</div>
            </div>
          ))}
        </Fragment>
      ))}
      <div ref={ref} style={{ height: 50 }} />
    </div>
  );
}
