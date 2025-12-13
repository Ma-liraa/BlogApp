"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchSideBar({ sideBarOpen, setSideBarOpen }) {
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
    // router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  return (
    <form className="relative" onSubmit={formSubmit}>
      <div
        className={`flex w-full items-center gap-x-2 rounded-2xl bg-[#C3CDFF] ${sideBarOpen ? "justify-start" : "justify-center"}`}
      >
        <button
          onClick={
            !sideBarOpen
              ? () => setSideBarOpen(true)
              : () => setSideBarOpen(true)
          }
          type="submit"
          className={`flex items-center justify-center py-3 pl-0 ${sideBarOpen ? "pr-3" : ""}`}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.0062 12.0862C22.0062 17.5647 17.5649 22.0059 12.0864 22.0059C6.60794 22.0059 2.16675 17.5647 2.16675 12.0862C2.16675 6.60769 6.60794 2.1665 12.0864 2.1665C17.5649 2.1665 22.0062 6.60769 22.0062 12.0862Z"
              fill="#1E2A44"
              fillOpacity="0.9"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.4081 20.4081C20.7139 20.1023 21.2099 20.1023 21.5157 20.4081L23.604 22.4964C23.9098 22.8024 23.9098 23.2982 23.604 23.604C23.2982 23.9098 22.8024 23.9098 22.4964 23.604L20.4081 21.5157C20.1023 21.2099 20.1023 20.7139 20.4081 20.4081Z"
              fill="#1E2A44"
              fillOpacity="0.9"
            />
          </svg>
        </button>
        {sideBarOpen && (
          <input
            type="text"
            name="search"
            placeholder="جستجو در وبلاگینو"
            autoComplete="off"
            className="flex-1 bg-transparent py-3 text-xs font-[1000] text-[#1E2A44] placeholder:font-[1000] placeholder:text-[#1E2A44]/80"
          />
        )}
      </div>
    </form>
  );
}
