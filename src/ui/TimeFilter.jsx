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
  ClockIcon,
} from "@heroicons/react/20/solid";
import { useRouter, useSearchParams } from "next/navigation";
import { Fragment, useState } from "react";

const sortOptions = [
  { id: 1, title: "جدیدترین‌ها", value: "latest" },
  { id: 2, title: "قدیمی‌ترین‌ها", value: "earliest" },
  { id: 3, title: "محبوب‌ترین‌ها", value: "popular" },
];

export function TimeFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort") || "latest";

  const [selected, setSelected] = useState(
    sortOptions.find((opt) => opt.value === currentSort) || sortOptions[0],
  );

  const handleSort = (option) => {
    setSelected(option);
    const params = new URLSearchParams(searchParams);
    params.set("sort", option.value);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={handleSort}>
        <div className="relative">
          <ListboxButton className="relative w-full cursor-pointer rounded-2xl border border-slate-200 bg-white py-3.5 pl-10 pr-4 text-right shadow-sm transition-all hover:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-500/10 sm:text-sm">
            <span className="flex items-center gap-2 truncate font-bold text-slate-700">
              <ClockIcon className="h-5 w-5 text-amber-500" />
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
            <ListboxOptions className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-2xl bg-white p-1 shadow-2xl ring-1 ring-slate-200 focus:outline-none sm:text-sm">
              {sortOptions.map((option) => (
                <ListboxOption
                  key={option.value}
                  className={({ active, selected }) =>
                    `relative cursor-pointer select-none rounded-xl py-3 pl-10 pr-4 transition-colors ${
                      active ? "bg-amber-50 text-amber-700" : "text-slate-600"
                    } ${selected ? "bg-amber-50/50 font-bold text-amber-600" : ""}`
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
                      {selected && (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
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
