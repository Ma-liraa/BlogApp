import { useMutation } from "@tanstack/react-query";
import { likePostApi } from "@/services/postServices";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation"; // حتما از navigation باشد

export default function useLike() {
  const router = useRouter();
  
  const { isPending: isLiking, mutate: likePost } = useMutation({
    mutationFn: likePostApi,
    onSuccess: (data) => {
      toast.success(data.message);
      router.refresh();
    },
    onError: (err) =>
      toast.error(err?.response?.data?.message || "خطایی رخ داد"),
  });

  return { isLiking, likePost };
}
