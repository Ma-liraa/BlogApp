import ListBox from "@/ui/Listbox";

async function CategoryList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();

  return <ListBox categories={categories} />;
}

export default CategoryList;
