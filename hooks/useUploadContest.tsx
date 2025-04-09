import { fetchWithAuth } from "@/actions/auth";
import useModalState from "@/store/useModalState";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type ContestPayload = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  topicIngredientId: number;
};

export const postContest = async ({ payload }: { payload: ContestPayload }) => {
  console.log(payload);
  return fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/contests`, {
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const useUploadContest = () => {
  const queryClient = useQueryClient();
  const { close } = useModalState();

  return useMutation({
    mutationFn: (payload: ContestPayload) => postContest({ payload }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contests"] });
      console.log("ok");
      close();
    },
    onError: (err) => {
      console.log("err", err);
    },
  });
};

export default useUploadContest;
