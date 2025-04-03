export const parseDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "오후" : "오전";

  hours = hours % 12 || 12;

  return `${year}년 ${month}월 ${day}일 ${ampm} ${hours}시 ${minutes}분`;
};
