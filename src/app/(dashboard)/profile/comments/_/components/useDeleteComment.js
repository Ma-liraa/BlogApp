import { removeCommentsApi } from "@/services/commentService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useDeleteComment() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteComment } = useMutation({
    mutationFn: removeCommentsApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["comment"],
      });
    },
    onError: (err) => console.log(err?.response?.data?.message),
  });
  return { isDeleting, deleteComment };
}
