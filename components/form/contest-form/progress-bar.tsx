import * as styles from "./progress-bar.css";

const TOTAL_STEP = 3;

export default function ProgressBar({ currentStep }: { currentStep: number }) {
  const progressPercentage = ((currentStep + 1) / TOTAL_STEP) * 100;

  return (
    <div className={styles.progressBarContainer}>
      <div
        className={styles.progressBarFill}
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
}
