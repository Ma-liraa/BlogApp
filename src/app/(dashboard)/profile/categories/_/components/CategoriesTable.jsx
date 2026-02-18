// CategoriesTable.jsx
import Empty from "@/ui/Empty";
import Table from "@/ui/Table";
import { getCategoriesApi } from "@/services/categoryServie";
import CategoriesRow from "./CategoriesRow";

async function CategoriesTable() {
  const { categories } = await getCategoriesApi();
  if (!categories?.length) return <Empty resourceName="کامنت" />;

  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان</th>
          <th>توضیحات</th>
          <th>عنوان انگلیسی</th>
          <th>تاریخ</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {categories.map((category, index) => {
            return (
              <CategoriesRow
                key={category._id}
                category={category}
                index={index}
              />
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
export default CategoriesTable;
