import { toast } from "react-hot-toast";
import { bookmarkPostApi } from "@/services/postServices";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
export default function useBookmark() {
  const router = useRouter();

  const { isPending: isBookmarking, mutate: bookmarkPost } = useMutation({
    mutationFn: bookmarkPostApi,
    onSuccess: (data) => {
      toast.success(data.message);
      router.refresh();
    },
    onError: (err) =>
      toast.error(err?.response?.data?.message || "خطایی رخ داد"),
  });

  return { isBookmarking, bookmarkPost };
}
