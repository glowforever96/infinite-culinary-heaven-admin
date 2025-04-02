export async function getContests({ pageParam }: { pageParam?: number }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/contests?page=${pageParam}&size=4`,
    { credentials: "include" }
  );

  const data = await res.json();

  return data.contests;
}
