import { getAllCommentsApi } from "@/services/commentService";
import ButtonIcon from "@/ui/ButtonIcon";
import Empty from "@/ui/Empty";
import { TrashIcon } from "@heroicons/react/24/outline";
import { DeleteComment } from "./Buttons";

async function CommentsTable({ query = "" }) {
  const { comments, commentsCount } = await getAllCommentsApi(query);
  console.log(comments, commentsCount);

  if (!comments.length) return <Empty resourceName="پستی" />;

  return (
    <ul className="flex flex-col gap-y-4">
      {comments.map((comment, index) => (
        <li
          key={comment._id}
          className="flex items-center justify-between gap-x-4 bg-secondary-50 p-3 rounded-xl"
        >
          <div className="flex items-center gap-x-4">
            <span className="flex justify-center items-center bg-secondary-100 rounded-lg font-bold text-secondary-700 w-10 h-10">
              {index + 1}
            </span>
            <span className="text-lg text-secondary-700">
              {comment.content.text}
            </span>
          </div>

          <DeleteComment id={comment._id} />
        </li>
      ))}
    </ul>
  );
}
export default CommentsTable;
// removeCommentsApi
