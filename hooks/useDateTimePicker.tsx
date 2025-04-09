import useContestState from "@/store/useContestState";
import { useCallback, useEffect, useState } from "react";

export default function useDateTimePicker(field: "startDate" | "endDate") {
  const { updateContest, startDate, endDate } = useContestState();

  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState("");

  const handleDateChange = (newDate: Date | null) => {
    setDate(newDate);
  };

  const handleTimeChange = (newTime: string) => {
    setTime(newTime);
  };

  const getISODateTime = useCallback(() => {
    if (!date || !time) return;
    const [hours, minutes] = time.split(":").map(Number);
    const updatedDate = new Date(date);
    updatedDate.setHours(hours);
    updatedDate.setMinutes(minutes);
    updatedDate.setSeconds(0);
    updatedDate.setMilliseconds(433);

    const koreanDate = new Date(
      updatedDate.getTime() + updatedDate.getTimezoneOffset() * 60000
    );
    return koreanDate.toISOString();
  }, [date, time]);

  useEffect(() => {
    const isoString = getISODateTime();
    if (isoString) {
      updateContest(field, isoString);
    }
  }, [date, time, field, updateContest, getISODateTime]);

  useEffect(() => {
    const initialDate = field === "startDate" ? startDate : endDate;
    if (!initialDate) return;

    const parsedDate = new Date(initialDate);
    const koreanDate = new Date(parsedDate.getTime() + 9 * 60 * 60 * 1000);

    setDate(koreanDate);

    const hours = koreanDate.getHours().toString().padStart(2, "0");
    const minutes = koreanDate.getMinutes().toString().padStart(2, "0");

    setTime(`${hours}:${minutes}`);
  }, []);

  return {
    date,
    time,
    setDate: handleDateChange,
    setTime: handleTimeChange,
  };
}
