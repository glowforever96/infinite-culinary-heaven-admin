import useContestForm from "@/hooks/useContestForm";
import ProgressBar from "@/components/ui/progressbar/progress-bar";
import * as styles from "./contest-form.css";
import Image from "next/image";

export default function ContestForm() {
  const { currentStep, nextStep, prevStep, renderCurrentStep } =
    useContestForm();

  return (
    <div className={styles.contentsWrapper}>
      <ProgressBar currentStep={currentStep} />
      {renderCurrentStep()}
      {currentStep < 3 && (
        <div className={styles.buttonWrapper}>
          <button
            onClick={prevStep}
            className={styles.button}
            style={{ visibility: currentStep === 0 ? "hidden" : undefined }}
          >
            <Image
              src="/icons/left.svg"
              alt="이전 버튼"
              width={28}
              height={28}
            />
          </button>
          <button onClick={nextStep} className={styles.button}>
            <Image
              src="/icons/right.svg"
              alt="이전 버튼"
              width={28}
              height={28}
            />
          </button>
        </div>
      )}
    </div>
  );
}
