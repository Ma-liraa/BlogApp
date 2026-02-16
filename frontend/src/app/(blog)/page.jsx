import Pagination from "@/ui/Pagination";
import Image from "next/image";
import React from "react";

const blogs = [
  {
    id: 1,
    title: "دومین بتای عمومی macOS 26.2 با قابلیت جدید Edge Light منتشر شد",
    imgUrl: "/images/img.png",
    like: true,
    category: "دیجیتال",
    date: "14 آبان 1404",
  },
  {
    id: 2,
    title: "دومین بتای عمومی macOS 26.2 با قابلیت جدید Edge Light منتشر شد",
    imgUrl: "/images/img.png",
    like: true,
    category: "دیجیتال",
    date: "14 آبان 1404",
  },
  {
    id: 3,
    title: "دومین بتای عمومی macOS 26.2 با قابلیت جدید Edge Light منتشر شد",
    imgUrl: "/images/img.png",
    like: true,
    category: "دیجیتال",
    date: "14 آبان 1404",
  },
  {
    id: 4,
    title: "دومین بتای عمومی macOS 26.2 با قابلیت جدید Edge Light منتشر شد",
    imgUrl: "/images/img.png",
    like: true,
    category: "دیجیتال",
    date: "14 آبان 1404",
  },
];

function page() {
  return (
    <div>
      {/* Header Mobile */}
      <header className="block pt-4 md:hidden">
        <nav className="flex gap-x-2">
          {/* User */}
          <button className="rounded-full bg-white p-4 transition-all active:scale-95 lg:hover:scale-105">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="9.99996"
                cy="4.99999"
                r="3.33333"
                stroke="#1F2937"
                stroke-width="1.5"
              />
              <path
                d="M12.5 17.1792C11.7422 17.3849 10.8946 17.5 9.99996 17.5C6.7783 17.5 4.16663 16.0076 4.16663 14.1667C4.16663 12.3257 6.7783 10.8333 9.99996 10.8333C13.2216 10.8333 15.8333 12.3257 15.8333 14.1667C15.8333 14.4544 15.7695 14.7337 15.6495 15"
                stroke="#1F2937"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
          {/* search */}
          <div className="flex flex-1 items-center gap-x-1 rounded-full bg-white p-4">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_8_72)">
                  <path
                    d="M18.1767 17.479C18.1245 17.5579 18.03 17.6523 17.8412 17.8412C17.6523 18.03 17.5579 18.1244 17.479 18.1767C17.0169 18.4827 16.3916 18.325 16.13 17.8363C16.0853 17.7529 16.047 17.625 15.9703 17.3692C15.8866 17.0896 15.8447 16.9499 15.8366 16.8515C15.7889 16.2724 16.2724 15.7889 16.8515 15.8366C16.9499 15.8446 17.0897 15.8865 17.3692 15.9703C17.625 16.047 17.7529 16.0853 17.8364 16.13C18.325 16.3916 18.4828 17.0168 18.1767 17.479Z"
                    stroke="#1F2937"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M5.62496 2.72577C6.7894 2.05218 8.14132 1.66666 9.58329 1.66666C13.9555 1.66666 17.5 5.21107 17.5 9.58332C17.5 13.9556 13.9555 17.5 9.58329 17.5C5.21104 17.5 1.66663 13.9556 1.66663 9.58332C1.66663 8.14135 2.05215 6.78943 2.72573 5.62499"
                    stroke="#1F2937"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8_72">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <input
              type="text"
              placeholder="دنبال چی میگردی..."
              className="bg-transparent text-sm font-bold placeholder:text-sm placeholder:text-[#555555] focus:outline-0"
            />
          </div>
        </nav>
      </header>
      {/* Blogs */}
      <section className="mt-8 flex flex-col gap-4">
        {blogs.map((blog) => (
          <div key={blog.id}>
            <div className="relative h-[270px] w-full overflow-hidden rounded-[30px] bg-red-50">
              <Image
                src={blog.imgUrl}
                width={2000}
                height={2000}
                className="absolute h-full w-full object-cover"
                alt="image of blog"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black/70 from-50% to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-y-2 p-4">
                <h2 className="text-lg font-black text-white">{blog.title}</h2>
                <div className="flex items-center justify-between gap-x-2">
                  <div className="flex items-center gap-x-2">
                    <div className="rounded-[15px] bg-[#003366] p-2 px-3 text-sm font-black text-[#00BFFF]">
                      {blog.category}
                    </div>
                    <div className="rounded-[15px] bg-white p-2 px-3 text-sm font-black opacity-70">
                      {blog.date}
                    </div>
                  </div>
                  <button className="rounded-full bg-white p-4 opacity-70 transition-all active:scale-95 lg:hover:scale-105">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.46807 15.7591L7.93238 15.1701L7.46807 15.7591ZM9.99996 4.58386L9.45959 5.10396C9.60098 5.25086 9.79607 5.33386 9.99996 5.33386C10.2038 5.33386 10.3989 5.25086 10.5403 5.10396L9.99996 4.58386ZM12.5318 15.7591L12.9962 16.3481L12.5318 15.7591ZM5.91323 13.5876C5.59341 13.3244 5.12076 13.3702 4.85754 13.6901C4.59432 14.0099 4.64021 14.4825 4.96003 14.7458L5.43663 14.1667L5.91323 13.5876ZM1.84194 11.2362C2.0407 11.5996 2.49643 11.7331 2.85984 11.5343C3.22326 11.3356 3.35673 10.8799 3.15797 10.5164L2.49996 10.8763L1.84194 11.2362ZM1.66663 7.61425H2.41663C2.41663 5.86863 3.40282 4.41123 4.73889 3.80051C6.02768 3.2114 7.77661 3.3554 9.45959 5.10396L9.99996 4.58386L10.5403 4.06376C8.47344 1.91635 6.0557 1.54931 4.1153 2.43628C2.22216 3.30164 0.916626 5.30743 0.916626 7.61425H1.66663ZM7.46807 15.7591L7.00375 16.3481C7.42947 16.6837 7.89443 17.048 8.36758 17.3245C8.84048 17.6009 9.39289 17.8333 9.99996 17.8333V17.0833V16.3333C9.77369 16.3333 9.49277 16.2447 9.12437 16.0294C8.75621 15.8143 8.37189 15.5165 7.93238 15.1701L7.46807 15.7591ZM12.5318 15.7591L12.9962 16.3481C14.1776 15.4167 15.7111 14.3327 16.9128 12.9795C18.1403 11.5974 19.0833 9.87454 19.0833 7.61425H18.3333H17.5833C17.5833 9.4064 16.8515 10.7895 15.7913 11.9835C14.7052 13.2064 13.338 14.1685 12.0675 15.1701L12.5318 15.7591ZM18.3333 7.61425H19.0833C19.0833 5.30743 17.7778 3.30164 15.8846 2.43628C13.9442 1.54931 11.5265 1.91635 9.45959 4.06376L9.99996 4.58386L10.5403 5.10396C12.2233 3.3554 13.9722 3.2114 15.261 3.80051C16.5971 4.41123 17.5833 5.86863 17.5833 7.61425H18.3333ZM12.5318 15.7591L12.0675 15.1701C11.628 15.5165 11.2437 15.8143 10.8755 16.0294C10.5071 16.2447 10.2262 16.3333 9.99996 16.3333V17.0833V17.8333C10.607 17.8333 11.1594 17.6009 11.6323 17.3245C12.1055 17.048 12.5704 16.6837 12.9962 16.3481L12.5318 15.7591ZM7.46807 15.7591L7.93238 15.1701C7.26469 14.6437 6.59634 14.1498 5.91323 13.5876L5.43663 14.1667L4.96003 14.7458C5.65272 15.3159 6.38927 15.8636 7.00375 16.3481L7.46807 15.7591ZM2.49996 10.8763L3.15797 10.5164C2.69953 9.67823 2.41663 8.73011 2.41663 7.61425H1.66663H0.916626C0.916626 9.00148 1.27268 10.1954 1.84194 11.2362L2.49996 10.8763Z"
                        fill="#1F2937"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      {/* Pagination */}
      <section className="mt-8 flex justify-center pb-48">
        <Pagination totalPages={4} />
      </section>
      {/* Filter */}
      <section className="fixed bottom-28 left-0 right-0 z-20 block md:hidden">
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center gap-x-2 rounded-full bg-white p-2">
            <button className="rounded-[15px] bg-[#FFF3D0] p-3 text-sm font-extrabold text-[#EEBB30] transition-all active:scale-95 lg:hover:scale-105">
              بیشترین لایک
            </button>
            <button className="rounded-[15px] bg-[#E5F6FF] p-3 text-sm font-extrabold text-[#3072EE] transition-all active:scale-95 lg:hover:scale-105">
              قدیمی ترین
            </button>
            <button className="rounded-[15px] bg-[#F8F5FF] p-3 text-sm font-extrabold text-[#6054A2] transition-all active:scale-95 lg:hover:scale-105">
              جدیدترین
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
