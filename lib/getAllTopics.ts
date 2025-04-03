export async function getAllTopics() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/topic-ingredients?`,
    { credentials: "include" }
  );

  const data = await res.json();

  return data.topicIngredients;
}
