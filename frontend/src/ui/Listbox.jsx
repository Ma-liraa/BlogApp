"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CheckIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function ListBox({ categories }) {
  const pathname = usePathname();
  const newCategorys = [{ title: "همه", slug: "/blog" }, ...categories];
  const [selected, setSelected] = useState(newCategorys[0]);

  return (
    <div key={categories._id}>
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className={clsx(
            "relative block w-full rounded-b-2xl rounded-t-[10px] bg-primary-200 py-4 pl-8 pr-4 text-right text-sm text-text",
            "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-text font-bold",
          )}
        >
          {selected.title}
          <ChevronDownIcon
            className="group pointer-events-none absolute left-2.5 top-[18px] size-4 fill-icon"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx("w-[200px] space-y-1 rounded-xl bg-primary-200 p-2")}
        >
          <Link href={"/blogs"}>
            <ListboxOption
              key="/blogs"
              value={newCategorys[0]}
              className={`data-focus:bg-primary-900 group flex cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2 transition-all hover:bg-primary-100 ${"blogs" == pathname.split("/")[1] && pathname.split("/").length === 2 ? "bg-primary-100" : ""}`}
            >
              <div className="text-sm text-text">همه</div>
              {"blogs" == pathname.split("/")[1] &&
              pathname.split("/").length == 2 ? (
                <svg
                  className="h-4 w-4 stroke-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 12.9L10.1429 16.5L18 7.5"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : null}
            </ListboxOption>
          </Link>
          {categories.map((category) => (
            <Link href={`/blogs/category/${category.slug}`}>
              <ListboxOption
                key={category.englishTitle}
                value={category}
                className={`data-focus:bg-primary-900 group flex cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2 transition-all hover:bg-primary-100 ${category.englishTitle == pathname.split("/")[3] ? "bg-primary-100" : ""}`}
              >
                <div className="text-sm text-text">{category.title}</div>
                {category.englishTitle == pathname.split("/")[3] ? (
                  <svg
                    className="h-4 w-4 stroke-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 12.9L10.1429 16.5L18 7.5"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : null}
              </ListboxOption>
            </Link>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
