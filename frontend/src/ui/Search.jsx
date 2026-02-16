"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
    // router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  return (
    <form
      className="mb-4 w-full max-w-sm break-inside-avoid justify-self-end md:mb-0"
      onSubmit={formSubmit}
    >
      <div className="flex items-center gap-x-2 rounded-2xl bg-white text-base font-bold text-[#1E2A44]">
        <button
          type="submit"
          className={`flex items-center justify-center py-4 pl-0 pr-3`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_14_80)">
              <path
                d="M18.1766 17.479C18.1243 17.5579 18.0299 17.6523 17.8411 17.8411C17.6522 18.03 17.5578 18.1244 17.4789 18.1767C17.0168 18.4827 16.3915 18.325 16.1299 17.8363C16.0852 17.7529 16.0469 17.625 15.9702 17.3692C15.8864 17.0896 15.8446 16.9499 15.8365 16.8515C15.7888 16.2723 16.2723 15.7889 16.8514 15.8365C16.9498 15.8446 17.0895 15.8865 17.3691 15.9703C17.6249 16.0469 17.7528 16.0853 17.8363 16.1299C18.3249 16.3916 18.4826 17.0168 18.1766 17.479Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M5.62508 2.72578C6.78952 2.05219 8.14145 1.66667 9.58342 1.66667C13.9557 1.66667 17.5001 5.21108 17.5001 9.58334C17.5001 13.9556 13.9557 17.5 9.58342 17.5C5.21116 17.5 1.66675 13.9556 1.66675 9.58334C1.66675 8.14137 2.05227 6.78944 2.72586 5.62501"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_14_80">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>

        <input
          type="text"
          name="search"
          placeholder="جستجو در وبلاگینو"
          autoComplete="off"
          className="flex-1 bg-transparent py-3 text-xs font-bold text-[#1E2A44] placeholder:font-bold placeholder:text-[#1E2A44]/80"
        />
      </div>
    </form>
  );
}
