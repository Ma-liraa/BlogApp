// CommentsTable.jsx
import { getAllCommentsApi } from "@/services/commentService";
import { getPostsApi } from "@/services/postServices";
import Empty from "@/ui/Empty";
import Table from "@/ui/Table";
import CommetsRow from "./CommetsRow";

async function CommentsTable({ query = "" }) {
  const [{ comments }, { posts }] = await Promise.all([
    getAllCommentsApi(query),
    getPostsApi({}),
  ]);

  if (!comments.length) return <Empty resourceName="کامنت" />;

  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Header>
          <th>#</th>
          <th>متن</th>
          <th>نویسنده</th>
          <th>برای پست</th>
          <th>تاریخ</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {comments.map((comment, index) => {
            const postTitle = posts.find((p) => p._id === comment.post)?.title;
            return (
              <CommetsRow
                key={comment._id}
                comment={comment}
                index={index}
                postName={postTitle}
              />
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
export default CommentsTable;
