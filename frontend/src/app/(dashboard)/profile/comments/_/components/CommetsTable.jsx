import { getAllCommentsApi } from "@/services/commentService";
import Empty from "@/ui/Empty";
import Table from "@/ui/Table";
import CommetsRow from "./CommetsRow";

async function CommentsTable({ query = "" }) {
  const { comments } = await getAllCommentsApi(query);
  if (!comments.length) return <Empty resourceName="پستی" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>متن</th>
        <th>نام نویسنده</th>
        <th>پست</th>

        {/* <th>ایمیل</th> */}
        {/* <th>شماره موبایل</th> */}
        {/* <th>نقش</th> */}
        {/* <th>وضعیت</th> */}
        <th>تاریخ</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {comments.map((comment, index) => (
          <CommetsRow key={comment._id} comment={comment} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default CommentsTable;
// removeCommentsApi
