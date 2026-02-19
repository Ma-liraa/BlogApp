import { useState } from "react";
import ChangeUserStatus from "./ChangeUserStatus";
import Modal from "@/ui/Modal";
import { toPersianDigits } from "@/utils/numberFormatter";
import Table from "@/ui/Table";
import Image from "next/image";
import { toLocalDateShort } from "@/utils/dateFormatter";

const statusStyle = {
  0: {
    label: "رد شده",
    className: "badge--danger",
  },
  1: {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  2: {
    label: "تایید شده",
    className: "badge--success",
  },
};
function UserRow({ user, index }) {
  const [open, setOpen] = useState(false);
  const { status } = user;
  const statusConfig = statusStyle[user.status] || {
    label: "نامشخص",
    className: "badge--secondary",
  };

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>
        {user.avatarUrl ? (
          <div className="relative h-10 w-10 overflow-hidden rounded-[15px]">
            <Image
              src={user.avatarUrl}
              width={1000}
              height={1000}
              className="absolute h-full w-full object-cover"
              alt={`image of ${user.name}`}
            />
          </div>
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-[15px] bg-slate-100">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="9.99996"
                cy="4.99999"
                r="3.33333"
                stroke="#1F2937"
                strokeWidth="1.5"
              />
              <path
                d="M12.5 17.1792C11.7422 17.3849 10.8946 17.5 9.99996 17.5C6.7783 17.5 4.16663 16.0076 4.16663 14.1667C4.16663 12.3257 6.7783 10.8333 9.99996 10.8333C13.2216 10.8333 15.8333 12.3257 15.8333 14.1667C15.8333 14.4544 15.7695 14.7337 15.6495 15"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
      </td>
      <td>{user.name || "بدون نام"}</td>
      <td>{user.email || "بدون ایمیل"}</td>
      <td>{toLocalDateShort(user.createdAt)}</td>
    </Table.Row>
  );
}
export default UserRow;
