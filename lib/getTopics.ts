export async function getTopics({ pageParam }: { pageParam?: number }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/topic-ingredients?page=${pageParam}&size=5`,
    { credentials: "include" }
  );

  return res.json();
}
