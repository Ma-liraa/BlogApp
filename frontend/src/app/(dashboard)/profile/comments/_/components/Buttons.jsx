"use client";
import { removeCommentsApi } from "@/services/commentService";
import ButtonIcon from "@/ui/ButtonIcon";
import { TrashIcon } from "@heroicons/react/24/outline";

export function DeleteComment({ commentId }) {
  return (
    <>
      <ButtonIcon variant="red" onClick={() => console.log(commentId)}>
        <TrashIcon />
      </ButtonIcon>
    </>
  );
}
