// DeleteComment.jsx
"use client";
import { removeCommentsApi } from "@/services/commentService";
import ButtonIcon from "@/ui/ButtonIcon";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function DeleteComment({ commentId }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm("آیا از حذف این مورد اطمینان دارید؟")) {
      try {
        await removeCommentsApi(commentId);
        toast.success("کامنت با موفقیت حذف شد");
        router.refresh(); // بروزرسانی لیست بدون رفرش کامل صفحه
      } catch (err) {
        toast.error(err?.response?.data?.message || "خطایی رخ داد");
      }
    }
  };

  return (
    <ButtonIcon variant="red" onClick={handleDelete}>
      <TrashIcon className="h-5 w-5" />
    </ButtonIcon>
  );
}
