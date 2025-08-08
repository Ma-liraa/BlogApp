import Table from "@/ui/Table";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/trancateText";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { DeletePost, UpdatePost } from "./Buttons";

const typeStyle = {
  free: {
    label: "رایگان",
    className: "badge--success",
  },
  premium: {
    label: "پولی",
    className: "badge--primary",
  },
};

function PostRow({ index, post }) {
  const { title, category, author, createdAt, type } = post;
  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{category.title}</td>
      <td>{author.name}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>
        <span className={`badge ${typeStyle[type].className}`}>
          {typeStyle[type].label}
        </span>
      </td>
      <td>
        <div className="flex items-center gap-x-3">
          <UpdatePost id={post._id} />
          <DeletePost post={post} />
        </div>
      </td>
    </Table.Row>
  );
}
export default PostRow;
