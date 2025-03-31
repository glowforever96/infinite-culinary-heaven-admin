"use client";
import Image from "next/image";
import { Fragment } from "react";
import { useInfiniteTopics } from "@/hooks/useInfiniteTopics";

export default function Topic() {
  const { data, ref } = useInfiniteTopics();

  return (
    <div
      style={{
        overflowY: "scroll",
        maxHeight: "50dvh",
        backgroundColor: "green",
      }}
    >
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.topicIngredients.map(({ name, image }) => (
            <div key={name} style={{ width: "100%", height: 300 }}>
              <div>{name}</div>
              <Image src={image} alt={name} width={100} height={100} />
            </div>
          ))}
        </Fragment>
      ))}
      <div ref={ref} style={{ height: 50 }} />
    </div>
  );
}
