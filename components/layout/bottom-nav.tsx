"use client";
import LinkButton from "./link-button";
import * as styles from "./layout.css";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  if (!["/", "/topic", "/contest"].includes(pathname)) {
    return null;
  }

  return (
    <nav>
      <ul className={styles.bottomNavWrapper}>
        <li>
          <LinkButton
            src="/icons/home.svg"
            alt="home icon"
            href="/"
            text="홈"
          />
        </li>
        <li>
          <LinkButton
            src="/icons/food.svg"
            alt="topic icon"
            href="/topic"
            text="주제 등록"
          />
        </li>
        <li>
          <LinkButton
            src="/icons/contest.svg"
            alt="contest icon"
            href="/contest"
            text="대회 등록"
          />
        </li>
      </ul>
    </nav>
  );
}
