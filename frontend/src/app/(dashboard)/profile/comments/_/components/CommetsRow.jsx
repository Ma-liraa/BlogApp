// CommetsRow.jsx
import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/trancateText";
import { DeleteComment } from "./DeleteComment";

const statusStyle = {
  1: { label: "در انتظار تایید", className: "badge--warning" },
  2: { label: "تایید شده", className: "badge--success" },
  0: { label: "رد شده", className: "badge--danger" },
};

function CommetsRow({ index, comment, postName }) {
  const { content, user, createdAt, status, _id } = comment;

  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td title={content.text}>{truncateText(content.text, 30)}</td>
      <td>{user.name}</td>
      <td>{postName ? truncateText(postName, 20) : "نامشخص"}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>
        <span className={`badge ${statusStyle[status]?.className}`}>
          {statusStyle[status]?.label}
        </span>
      </td>
      <td>
        <div className="flex items-center gap-x-2">
          <DeleteComment commentId={_id} />
          {/* می‌توانید دکمه تایید یا پاسخ را اینجا اضافه کنید */}
        </div>
      </td>
    </Table.Row>
  );
}
export default CommetsRow;
