import { editPostApi } from "@/services/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useEditPost() {
  const queryClient = useQueryClient();
  const { isPending: isEditting, mutate: editPost } = useMutation({
    mutationFn: editPostApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
    onError: (err) => console.log(err?.response?.data?.message),
  });
  return { isEditting, editPost };
}
