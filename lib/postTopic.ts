import { fetchWithAuth } from "@/actions/auth";

export const postTopic = async (formData: FormData) => {
  return fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/topic-ingredients`, {
    body: formData,
  });
};
