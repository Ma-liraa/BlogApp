import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavigationBar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="fixed bottom-4 left-6 right-6 flex items-center justify-center md:hidden">
      <div className="flex items-center gap-x-2">
        <Link href="/profile/posts/create">
          <button className="flex h-[70px] w-[70px] items-center justify-center rounded-[25px] bg-[#4F46E5] transition-all duration-300 active:scale-95 lg:hover:scale-105">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.75 8.75007L8.75 8.75007M8.75 8.75007L0.75 8.75007M8.75 8.75007L8.75 0.75M8.75 8.75007L8.75 16.75"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </Link>
        <div className="flex items-center gap-x-2 rounded-[25px] bg-white p-0.5">
          <Link href="/">
            <button
              className={`flex h-[66px] w-[66px] items-center justify-center rounded-[23px] ${pathname === "/" ? "bg-black text-white" : "bg-transparent text-black"} transition-all duration-300 active:scale-95 lg:hover:scale-105`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15L12 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M21.6359 12.9581L21.3572 14.8955C20.8697 18.2829 20.626 19.9766 19.451 20.9884C18.2759 22.0002 16.5526 22.0002 13.1061 22.0002H10.8939C7.44737 22.0002 5.72409 22.0002 4.54903 20.9884C3.37396 19.9766 3.13025 18.2829 2.64284 14.8955L2.36407 12.9581C1.98463 10.3211 1.79491 9.00253 2.33537 7.87519C2.87583 6.74785 4.02619 6.06258 6.32691 4.69205L7.71175 3.86711C9.80104 2.62253 10.8457 2.00024 12 2.00024C13.1543 2.00024 14.199 2.62253 16.2882 3.86711L17.6731 4.69205C19.9738 6.06258 21.1242 6.74785 21.6646 7.87519"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </Link>
          <Link href="/blogs">
            <button
              className={`flex h-[66px] w-[66px] items-center justify-center rounded-[23px] ${pathname === "/blogs" ? "bg-black text-white" : "bg-transparent text-black"} transition-all duration-300 active:scale-95 lg:hover:scale-105`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.4825 19C21.4436 19.9362 21.3183 20.5101 20.9142 20.9142C20.3284 21.5 19.3856 21.5 17.5 21.5C15.6144 21.5 14.6716 21.5 14.0858 20.9142C13.5 20.3284 13.5 19.3856 13.5 17.5V15.5C13.5 13.6144 13.5 12.6716 14.0858 12.0858C14.6716 11.5 15.6144 11.5 17.5 11.5C19.3856 11.5 20.3284 11.5 20.9142 12.0858C21.4458 12.6173 21.495 13.4428 21.4995 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M2 8.5C2 10.3856 2 11.3284 2.58579 11.9142C3.17157 12.5 4.11438 12.5 6 12.5C7.88562 12.5 8.82843 12.5 9.41421 11.9142C10 11.3284 10 10.3856 10 8.5V6.5C10 4.61438 10 3.67157 9.41421 3.08579C8.82843 2.5 7.88562 2.5 6 2.5C4.11438 2.5 3.17157 2.5 2.58579 3.08579C2 3.67157 2 4.61438 2 6.5V8.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M15.5 2.51343C15.1727 2.53017 14.9385 2.56777 14.7346 2.65224C14.2446 2.85522 13.8552 3.24457 13.6522 3.73463C13.5 4.10217 13.5 4.56811 13.5 5.49999C13.5 6.43188 13.5 6.89782 13.6522 7.26536C13.8552 7.75542 14.2446 8.14477 14.7346 8.34775C15.1022 8.49999 15.5681 8.49999 16.5 8.49999H18.5C19.4319 8.49999 19.8978 8.49999 20.2654 8.34775C20.7554 8.14477 21.1448 7.75542 21.3478 7.26536C21.5 6.89782 21.5 6.43188 21.5 5.49999C21.5 4.56811 21.5 4.10217 21.3478 3.73463C21.1448 3.24457 20.7554 2.85522 20.2654 2.65224C20.0615 2.56777 19.8273 2.53017 19.5 2.51343"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M2 18.5C2 19.4319 2 19.8978 2.15224 20.2654C2.35523 20.7554 2.74458 21.1448 3.23463 21.3478C3.60218 21.5 4.06812 21.5 5 21.5H7C7.93188 21.5 8.39782 21.5 8.76537 21.3478C9.25542 21.1448 9.64477 20.7554 9.84776 20.2654C10 19.8978 10 19.4319 10 18.5C10 17.5681 10 17.1022 9.84776 16.7346C9.64477 16.2446 9.25542 15.8552 8.76537 15.6522C8.39782 15.5 7.93188 15.5 7 15.5H5C4.06812 15.5 3.60218 15.5 3.23463 15.6522C2.74458 15.8552 2.35523 16.2446 2.15224 16.7346C2 17.1022 2 17.5681 2 18.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
