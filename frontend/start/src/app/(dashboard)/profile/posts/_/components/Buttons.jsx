"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import useDeletePost from "./useDeletePost";
import { useRouter } from "next/navigation";

export function CreatePost() {
  return (
    <Link
      href="/profile/posts/create"
      className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-secondary-0 
      transition-colors hover:bg-primary-700"
    >
      <span className="hidden md:block">ایجاد پست</span>{" "}
      <PlusIcon className="w-5" />
    </Link>
  );
}

export function DeletePost({ post: { _id, title } }) {
  const [open, setOpen] = useState(false);
  const { deletePost, isDeleting } = useDeletePost();
  const router = useRouter();
  return (
    <>
      <ButtonIcon variant="red" onClick={() => setOpen(true)}>
        <TrashIcon />
      </ButtonIcon>
      <Modal title={`حذف ${title}`} open={open} onClose={() => setOpen(false)}>
        <ConfirmDelete
          resourceName={title}
          onClose={() => setOpen(false)}
          onConfirm={(e) => {
            e.preventDefault();
            deletePost(_id, {
              onSuccess: () => {
                setOpen(false);
                router.refresh();
              },
            });
          }}
          disabled={isDeleting}
        />
      </Modal>
    </>
  );
}

export function UpdatePost({ id }) {
  return (
    <Link href={`/profile/posts/${id}/edit`}>
      <ButtonIcon variant="secondary">
        <PencilIcon />
      </ButtonIcon>
    </Link>
  );
}
