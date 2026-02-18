import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/trancateText";
import { DeleteCategory, UpdateCategory } from "./Buttons";

function CategoriesRow({ index, category }) {
  const { createdAt, description, englishTitle, title, _id } = category;

  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{title}</td>
      <td>{truncateText(description, 30)}</td>
      <td>{englishTitle}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>
        <div className="jus flex items-center gap-x-1">
          <UpdateCategory id={_id} />
          <DeleteCategory title={title} id={_id} />
        </div>
      </td>
    </Table.Row>
  );
}
export default CategoriesRow;
