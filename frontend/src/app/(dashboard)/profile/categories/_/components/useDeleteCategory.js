import { deleteCategoryApi } from "@/services/categoryServie";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useDeleteCategory() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteCategory } = useMutation({
    mutationFn: deleteCategoryApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
    onError: (err) => console.log(err?.response?.data?.message),
  });
  return { isDeleting, deleteCategory };
}
