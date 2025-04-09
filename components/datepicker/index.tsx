import DatePicker, { registerLocale } from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef, useState } from "react";
import * as styles from "./datepicker.css";

registerLocale("ko", ko);

interface DatepickerProps {
  date: Date | null;
  time: string;
  onDateChange: (date: Date | null) => void;
  onTimeChange: (time: string) => void;
}

export default function Datepicker({
  date,
  time,
  onDateChange,
  onTimeChange,
}: DatepickerProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.datePickerWrapper}>
      <div
        onClick={() => setOpen(true)}
        className={styles.datepicker}
        tabIndex={0}
      >
        <span style={{ marginRight: "8px" }}>📅</span>
        <DatePicker
          selected={date}
          minDate={new Date()}
          onChange={(date) => {
            onDateChange(date);
            setOpen(false);
          }}
          onClickOutside={() => setOpen(false)}
          open={open}
          dateFormat="yyyy년 MM월 dd일"
          locale="ko"
          placeholderText="날짜를 선택해주세요."
          customInput={<CustomInput />}
        />
      </div>
      <input
        type="time"
        className={styles.timeInput}
        value={time}
        onChange={(e) => onTimeChange(e.target.value)}
      />
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomInput = forwardRef<HTMLInputElement, any>((props, ref) => {
  return <input {...props} ref={ref} className={styles.customInput} readOnly />;
});

CustomInput.displayName = "CustomInput";
