"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

// ایمپورت کامپوننت‌های UI
import Modal from "@/ui/Modal";
import ConfirmDelete from "@/ui/ConfirmDelete";
import useDeleteComment from "./useDeleteComment";

/** --- حذف نظر --- **/
export function DeleteComment({ id, title }) {
  const [open, setOpen] = useState(false);
  const { deleteComment, isDeleting } = useDeleteComment();
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        title="حذف نظر"
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 transition-all duration-300 hover:bg-rose-100 active:scale-90"
      >
        <Trash2 className="h-5 w-5" strokeWidth={2} />
      </button>

      <Modal
        title={`حذف نظر: ${title}`}
        open={open}
        onClose={() => setOpen(false)}
      >
        <ConfirmDelete
          resourceName={title}
          onClose={() => setOpen(false)}
          disabled={isDeleting}
          onConfirm={(e) => {
            e.preventDefault();
            deleteComment(id, {
              onSuccess: () => {
                setOpen(false);
                router.refresh();
              },
            });
          }}
        />
      </Modal>
    </>
  );
}
