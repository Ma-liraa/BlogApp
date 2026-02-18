"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  CheckIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Fragment, useState } from "react";

export default function ListBox({
  categories,
  label = "دسته‌بندی",
  paramName = "category",
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // تبدیل دسته‌بندی‌ها به ساختار مناسب برای منو
  const options = [
    { title: "همه موارد", slug: "all", englishTitle: "all" },
    ...categories,
  ];

  // پیدا کردن گزینه فعال بر اساس URL
  const currentSlug = pathname.split("/").pop();
  const activeOption =
    options.find((opt) => opt.slug === currentSlug) || options[0];

  const [selected, setSelected] = useState(activeOption);

  const handleSelect = (option) => {
    setSelected(option);
    if (option.slug === "all") {
      router.push("/blogs");
    } else {
      router.push(`/blogs/category/${option.slug}`);
    }
  };

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={handleSelect}>
        <div className="relative mt-1">
          <ListboxButton className="relative w-full cursor-pointer rounded-2xl border border-slate-200 bg-white py-3.5 pl-10 pr-4 text-right shadow-sm transition-all hover:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-500/10 sm:text-sm">
            <span className="flex items-center gap-2 truncate font-bold text-slate-700">
              <Squares2X2Icon className="h-5 w-5 text-blue-500" />
              {selected.title}
            </span>
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
              <ChevronDownIcon
                className="h-5 w-5 text-slate-400"
                aria-hidden="true"
              />
            </span>
          </ListboxButton>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-2xl bg-white p-1 text-base shadow-2xl ring-1 ring-slate-200 focus:outline-none sm:text-sm">
              {options.map((option) => (
                <ListboxOption
                  key={option.englishTitle || option.slug}
                  className={({ active, selected }) =>
                    `relative cursor-pointer select-none rounded-xl py-3 pl-10 pr-4 transition-colors ${
                      active ? "bg-blue-50 text-blue-700" : "text-slate-600"
                    } ${selected ? "bg-blue-50/50 font-bold text-blue-600" : ""}`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? "font-bold" : "font-medium"}`}
                      >
                        {option.title}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
