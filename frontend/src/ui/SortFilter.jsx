"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function SortFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSort = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    // معمولاً وقتی سورت تغییر می‌کند، بهتر است صفحه به 1 برگردد
    params.set("page", "1");

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // تابع کمکی برای تشخیص دکمه فعال (اختیاری برای استایل‌دهی بهتر در آینده)
  const currentSort = searchParams.get("sort") || "latest";

  return (
    <section className="mt-14 hidden md:block">
      <div className="flex items-center justify-center">
        <div className="flex w-fit items-center gap-x-2 rounded-full bg-white p-2">
          <button
            onClick={() => handleSort("popular")}
            className="rounded-[15px] bg-[#FFF3D0] p-3 text-sm font-extrabold text-[#EEBB30] transition-all duration-300 ease-out lg:hover:scale-105 lg:active:scale-95"
          >
            بیشترین لایک
          </button>

          <button
            onClick={() => handleSort("oldest")}
            className="rounded-[15px] bg-[#E5F6FF] p-3 text-sm font-extrabold text-[#3072EE] transition-all duration-300 ease-out lg:hover:scale-105 lg:active:scale-95"
          >
            قدیمی ترین
          </button>

          <button
            onClick={() => handleSort("latest")}
            className="rounded-[15px] bg-[#F8F5FF] p-3 text-sm font-extrabold text-[#6054A2] transition-all duration-300 ease-out lg:hover:scale-105 lg:active:scale-95"
          >
            جدیدترین
          </button>
        </div>
      </div>
    </section>
  );
}

export default SortFilter;
