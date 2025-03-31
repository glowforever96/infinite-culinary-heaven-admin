export async function getTopics({ pageParam }: { pageParam?: number }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/topic-ingredients?page=${pageParam}&size=4`,
    { credentials: "include" }
  );

  const data = await res.json();

  return data.topicIngredients;
}
