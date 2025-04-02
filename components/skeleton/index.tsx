import * as styles from "./skeleton.css";

export default function Skeleton() {
  return (
    <div className={styles.wrapper}>
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className={`${styles.skeletonBox} ${styles.skeletonAnimation}`}
        />
      ))}
    </div>
  );
}
