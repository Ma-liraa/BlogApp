"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PencilLine, Trash2 } from "lucide-react";

// ایمپورت کامپوننت‌های مشترک UI
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import useDeleteCategory from "./useDeleteCategory";

/** --- ایجاد دسته‌بندی جدید --- **/
export function CreateCategory() {
  return (
    <div>
      <Link
        className="mb-4 break-inside-avoid justify-self-end md:mb-0"
        href="/profile/categories/create"
      >
        <div className="flex items-center gap-x-2 rounded-2xl bg-white px-6 py-4 text-base font-bold text-[#1E2A44] transition-colors hover:text-[#3B66FF]">
          <span className="hidden md:block">ایجاد دسته‌بندی</span>
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

/** --- حذف دسته‌بندی --- **/
export function DeleteCategory({ title, id }) {
  const [open, setOpen] = useState(false);
  const { deleteCategory, isDeleting } = useDeleteCategory();
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        title="حذف دسته‌بندی"
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 transition-all duration-300 hover:bg-rose-100 active:scale-90"
      >
        <Trash2 className="h-5 w-5" strokeWidth={2} />
      </button>

      <Modal
        title={`حذف دسته‌بندی: ${title}`}
        open={open}
        onClose={() => setOpen(false)}
      >
        <ConfirmDelete
          resourceName={title}
          onClose={() => setOpen(false)}
          disabled={isDeleting}
          onConfirm={(e) => {
            e.preventDefault();
            deleteCategory(id, {
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

/** --- ویرایش دسته‌بندی --- **/
export function UpdateCategory({ id }) {
  return (
    <Link href={`/profile/categories/${id}/edit`} title="ویرایش دسته‌بندی">
      <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 hover:bg-blue-100 active:scale-90">
        <PencilLine className="h-5 w-5" strokeWidth={2} />
      </button>
    </Link>
  );
}
