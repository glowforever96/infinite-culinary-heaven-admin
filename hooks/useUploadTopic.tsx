import { postTopic } from "@/lib/postTopic";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUploadTopic = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, file }: { name: string; file: File }) => {
      const reader = new FileReader();
      const base64Image = await new Promise<string>((resolve, reject) => {
        reader.onload = (e) => resolve(e.target?.result as string);
        reader.onerror = () => reject("이미지 변환 실패");
        reader.readAsDataURL(file);
      });

      return postTopic(name, base64Image);
    },
    onSuccess: (data) => {
      console.log(data);
      console.log("ok");
    },
  });
};

export default useUploadTopic;
