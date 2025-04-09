export const parseDate = (dateString: string) => {
  const date = new Date(dateString);
  const kstDate = new Date(date.getTime() + 9 * 60 * 60 * 1000);

  const year = kstDate.getFullYear();
  const month = kstDate.getMonth() + 1;
  const day = kstDate.getDate();

  let hours = kstDate.getHours();
  const minutes = String(kstDate.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "오후" : "오전";

  hours = hours % 12 || 12;

  return `${year}년 ${month}월 ${day}일 ${ampm} ${hours}시 ${minutes}분`;
};
