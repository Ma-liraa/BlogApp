"use client";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import Link from "next/link";
import { useState } from "react";
import useDeletePost from "./useDeletePost";
import { useRouter } from "next/navigation";

export function CreatePost() {
  return (
    <div>
      <Link
        className="mb-4 break-inside-avoid justify-self-end md:mb-0"
        href="/profile/posts/create"
      >
        <div className="flex items-center gap-x-2 rounded-2xl bg-white px-6 py-4 text-base font-bold text-[#1E2A44] transition-colors hover:text-[#3B66FF]">
          <span className="hidden md:block">ایجاد پست</span>
          <svg
            className="h-8 w-8"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8683 23.8092C12.5678 23.5087 12.378 23.0976 12.378 22.6234C12.3778 21.7064 13.1365 20.9477 14.0535 20.9478L31.9499 20.951C32.8668 20.9511 33.6258 21.7101 33.626 22.6271C33.6262 23.544 32.8674 24.3027 31.9505 24.3026L14.0541 24.2995C13.5956 24.3152 13.1687 24.1096 12.8683 23.8092Z"
              fill="currentColor"
            />
            <path
              d="M21.818 32.7589C21.5176 32.4585 21.3278 32.0474 21.3277 31.5731L21.3246 13.6767C21.3244 12.7598 22.0832 12.001 23.0001 12.0012C23.9171 12.0014 24.6761 12.7603 24.6762 13.6773L24.6794 31.5737C24.6795 32.4907 23.9208 33.2494 23.0038 33.2492C22.5295 33.2491 22.1185 33.0594 21.818 32.7589Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
}

export function DeletePost({ post: { _id, title } }) {
  const [open, setOpen] = useState(false);
  const { deletePost, isDeleting } = useDeletePost();
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center rounded-[10px] bg-rose-400/20 px-3 py-1.5 text-rose-600 transition-all hover:text-rose-700"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6.52381C3 6.12932 3.32671 5.80952 3.72973 5.80952H8.51787C8.52437 4.9683 8.61554 3.81504 9.45037 3.01668C10.1074 2.38839 11.0081 2 12 2C12.9919 2 13.8926 2.38839 14.5496 3.01668C15.3844 3.81504 15.4756 4.9683 15.4821 5.80952H20.2703C20.6733 5.80952 21 6.12932 21 6.52381C21 6.9183 20.6733 7.2381 20.2703 7.2381H3.72973C3.32671 7.2381 3 6.9183 3 6.52381Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5956 22H12.4044C15.1871 22 16.5785 22 17.4831 21.1141C18.3878 20.2281 18.4803 18.7749 18.6654 15.8685L18.9321 11.6806C19.0326 10.1036 19.0828 9.31511 18.6289 8.81545C18.1751 8.31579 17.4087 8.31579 15.876 8.31579H8.12404C6.59127 8.31579 5.82488 8.31579 5.37105 8.81545C4.91722 9.31511 4.96744 10.1036 5.06788 11.6806L5.33459 15.8685C5.5197 18.7749 5.61225 20.2281 6.51689 21.1141C7.42153 22 8.81289 22 11.5956 22ZM10.2463 12.1885C10.2051 11.7546 9.83753 11.4381 9.42537 11.4815C9.01321 11.5249 8.71251 11.9117 8.75372 12.3456L9.25372 17.6087C9.29494 18.0426 9.66247 18.3591 10.0746 18.3157C10.4868 18.2724 10.7875 17.8855 10.7463 17.4516L10.2463 12.1885ZM14.5746 11.4815C14.9868 11.5249 15.2875 11.9117 15.2463 12.3456L14.7463 17.6087C14.7051 18.0426 14.3375 18.3591 13.9254 18.3157C13.5132 18.2724 13.2125 17.8855 13.2537 17.4516L13.7537 12.1885C13.7949 11.7546 14.1625 11.4381 14.5746 11.4815Z"
            fill="currentColor"
          />
        </svg>
      </button>
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
      <button className="flex items-center justify-center rounded-[10px] bg-[#2251D1]/20 px-3 py-1.5 text-[#2251D1] transition-all hover:text-[#3B66FF]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4001 18.1612L11.4001 18.1612L18.796 10.7653C17.7894 10.3464 16.5972 9.6582 15.4697 8.53068C14.342 7.40298 13.6537 6.21058 13.2348 5.2039L5.83882 12.5999L5.83879 12.5999C5.26166 13.1771 4.97307 13.4657 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L7.47918 20.5844C8.25351 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5343 19.0269 10.823 18.7383 11.4001 18.1612Z"
            fill="currentColor"
          />
          <path
            d="M20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178L14.3999 4.03882C14.4121 4.0755 14.4246 4.11268 14.4377 4.15035C14.7628 5.0875 15.3763 6.31601 16.5303 7.47002C17.6843 8.62403 18.9128 9.23749 19.85 9.56262C19.8875 9.57563 19.9245 9.58817 19.961 9.60026L20.8482 8.71306Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </Link>
  );
}
