import DatePicker, { registerLocale } from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef, useState } from "react";

registerLocale("ko", ko);

export default function Datepicker() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setOpen(true)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          border: "1px solid #ccc",
          padding: "8px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        <span style={{ marginRight: "8px" }}>📅</span>
        <DatePicker
          selected={startDate}
          minDate={new Date()}
          onChange={(date) => {
            setStartDate(date);
            setOpen(false);
          }}
          onClickOutside={() => setOpen(false)}
          open={open}
          dateFormat="yyyy년 MM월 dd일"
          locale="ko" // 한국어 설정
          placeholderText="날짜와 시간을 선택하세요"
          customInput={<CustomInput />}
        />
      </div>
      <input type="time" />
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomInput = forwardRef<HTMLInputElement, any>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      style={{
        border: "none",
        outline: "none",
        background: "transparent",
        fontSize: "16px",
        cursor: "pointer",
        width: "100%",
      }}
      readOnly
    />
  );
});

CustomInput.displayName = "CustomInput";
