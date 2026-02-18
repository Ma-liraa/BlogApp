"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search as SearchIcon } from "lucide-react"; // استفاده از آیکون استاندارد برای زیبایی بیشتر

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const formSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search;
    const searchValue = search.value;
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", "1");
    if (searchValue) {
      newParams.set("search", searchValue);
    } else {
      newParams.delete("search");
    }
    router.push(pathname + "?" + newParams.toString(), { scroll: false });
  };

  return (
    <form className="w-full max-w-md" onSubmit={formSubmit}>
      <div className="group relative flex items-center gap-x-2 rounded-2xl border border-slate-200 bg-white px-4 shadow-sm transition-all duration-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 hover:border-slate-300">
        {/* دکمه جستجو (آیکون) */}
        <button
          type="submit"
          className="flex items-center justify-center py-3 text-slate-400 transition-colors group-focus-within:text-blue-600"
        >
          <SearchIcon className="h-5 w-5 stroke-[2.5]" />
        </button>

        {/* ورودی متن */}
        <input
          type="text"
          name="search"
          defaultValue={searchParams.get("search") || ""}
          placeholder="دنبال چی میگردی؟"
          autoComplete="off"
          className="flex-1 bg-transparent py-3 text-sm font-bold text-slate-700 outline-none placeholder:font-medium placeholder:text-slate-400"
        />

        {/* کلید میانبر ظاهری (اختیاری برای زیبایی CMS) */}
        <div className="hidden items-center rounded-lg border border-slate-100 bg-slate-50 px-1.5 py-0.5 text-[10px] font-black text-slate-400 md:flex">
          <span>Enter</span>
        </div>
      </div>
    </form>
  );
}
