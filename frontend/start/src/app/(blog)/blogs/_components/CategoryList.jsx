import Link from "next/link";

async function CategoryList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();

  return (
    <ul className="flex flex-col gap-y-4">
      <Link href={"/blogs"}>همه</Link>
      {categories.map((category) => (
        <li key={category._id}>
          <Link href={`/blogs/category/${category.slug}`}>
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
