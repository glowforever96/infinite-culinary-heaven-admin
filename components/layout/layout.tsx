import { ReactNode } from "react";
import BottomNav from "./bottom-nav";
import * as styles from "./layout.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section className={styles.layoutWrapper}>
      {children}
      <BottomNav />
    </section>
  );
}
