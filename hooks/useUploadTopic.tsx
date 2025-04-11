import { postTopic } from "@/lib/postTopic";
import useModalState from "@/store/useModalState";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUploadTopic = () => {
  const queryClient = useQueryClient();
  const { close } = useModalState();

  return useMutation({
    mutationFn: async ({ name, file }: { name: string; file: File }) => {
      const formData = new FormData();
      formData.append("image", file);
      formData.append(
        "request",
        JSON.stringify({
          name,
          image: file.name,
        })
      );
      const res = await postTopic(formData);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["topics"] });
      console.log("ok");
      close();
    },
    onError: (err) => {
      console.log("err", err);
    },
  });
};

export default useUploadTopic;
