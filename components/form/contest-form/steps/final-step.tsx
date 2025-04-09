import useContestForm from "@/hooks/useContestForm";
import * as styles from "./final-step.css";
import useContestState from "@/store/useContestState";
import { parseDate } from "@/lib/parseDate";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import useUploadContest from "@/hooks/useUploadContest";

export default function FinalStep({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const { selectedTopic } = useContestForm();
  const { name, description, startDate, endDate } = useContestState();
  const { mutate } = useUploadContest();

  const handleSubmit = () => {
    mutate({
      name,
      description,
      startDate,
      endDate,
      topicIngredientId: selectedTopic?.id as number,
    });
  };

  return (
    <div className={styles.finalStepContainer}>
      <div className={styles.titleContainer}>
        <p className={styles.paragraph}>대회 등록</p>
        <span className={styles.span}>
          수정이 필요하시다면 다시 클릭해주세요.
        </span>
      </div>
      <div className={styles.contentsContainer}>
        <div className={styles.selectedTopic} onClick={() => setStep(0)}>
          <p className={styles.grayParagarph}>재료</p>
          <Image
            src={selectedTopic?.image as string}
            alt={selectedTopic?.name as string}
            width={120}
            height={120}
          />
          <span className={styles.name}>{selectedTopic?.name}</span>
        </div>
        <div className={styles.selectValue} onClick={() => setStep(1)}>
          <div>
            <p className={styles.grayParagarph}>대회 이름</p>
            <div>{name}</div>
          </div>
          <div>
            <p className={styles.grayParagarph}>대회 설명</p>
            <div>{description}</div>
          </div>
        </div>
        <div className={styles.selectValue} onClick={() => setStep(2)}>
          <div>
            <p className={styles.grayParagarph}>시작 일시</p>
            <div>{parseDate(startDate)}</div>
          </div>
          <div>
            <p className={styles.grayParagarph}>종료 일시</p>
            <div>{parseDate(endDate)}</div>
          </div>
        </div>
      </div>
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
}
