import Datepicker from "@/components/datepicker";
import * as styles from "./step3.css";
import useDateTimePicker from "@/hooks/useDateTimePicker";
import ErrorText from "@/components/ui/error";

export default function Step3({
  errorState,
}: {
  errorState: { step: number; message: string } | null;
}) {
  const startPicker = useDateTimePicker("startDate");
  const endPicker = useDateTimePicker("endDate");

  return (
    <div className={styles.step3Container}>
      <p className={styles.paragraph}>대회 시작과 종료 일시를 선택해주세요.</p>
      <div className={styles.contenstWrapper}>
        <div className={styles.inputContainer}>
          <label className={styles.label}>시작 일시</label>
          <Datepicker
            date={startPicker.date}
            time={startPicker.time}
            onDateChange={startPicker.setDate}
            onTimeChange={startPicker.setTime}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>종료 일시</label>
          <Datepicker
            date={endPicker.date}
            time={endPicker.time}
            onDateChange={endPicker.setDate}
            onTimeChange={endPicker.setTime}
          />
        </div>
      </div>
      {errorState && <ErrorText>{errorState.message}</ErrorText>}
    </div>
  );
}
