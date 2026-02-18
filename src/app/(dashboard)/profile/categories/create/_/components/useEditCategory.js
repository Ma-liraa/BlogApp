import { editCategoryApi } from "@/services/categoryServie";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useEditCategory() {
  const queryClient = useQueryClient();
  const { isPending: isEditting, mutate: editCategory } = useMutation({
    mutationFn: editCategoryApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
    onError: (err) => console.log(err?.response?.data?.message),
  });
  return { isEditting, editCategory };
}
