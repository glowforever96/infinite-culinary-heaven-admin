export const postTopic = async (name: string, base64Image: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/topic-ingredients`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: base64Image,
        request: {
          name,
          image: base64Image,
        },
      }),
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("업로드 실패");
  }
  console.log(response.headers);
  return response.json();
};
