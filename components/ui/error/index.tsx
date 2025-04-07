import { ReactNode } from "react";
import * as styles from "./error.css";

export default function ErrorText({ children }: { children: ReactNode }) {
  return <div className={styles.errorText}>{children}</div>;
}
