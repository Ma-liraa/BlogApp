import { getPostsApi } from "@/services/postServices";
import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/trancateText";

// const typeStyle = {
//   1: {
//     label: "رایگان",
//     className: "badge--success",
//   },
//   2: {
//     label: "پولی",
//     className: "badge--primary",
//   },
// };

async function CommetsRow({ index, comment }) {
  // console.log(comment);
  const { posts } = await getPostsApi({});
  const { content, user, createdAt, post } = comment;
  const postName = posts.find((item) => item._id == post);

  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{truncateText(content.text, 30)}</td>
      <td>{user.name}</td>
      {postName ? <td>{truncateText(postName.title, 30)}</td> : <td>...</td>}
      <td>{toLocalDateShort(createdAt)}</td>
      {/* <td>
        <span className={`badge ${typeStyle[stutus].className}`}>
          {typeStyle[type].label}
        </span>
      </td> */}
      {/* <td> */}
      <td>...</td>
      {/* <DeletePost id={comment._id} /> */}
      {/* </td> */}
    </Table.Row>
  );
}
export default CommetsRow;
