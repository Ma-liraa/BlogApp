"use client";

import { generatePagination } from "@/utils/generatePagination";
import classNames from "classnames";

import Link from "next/link";

import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }) {
  // const totalPages = Math.ceil(Number(length) / itemsPerPage);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = Number(searchParams.get("limit")) || 6;

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    params.set("limit", itemsPerPage.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="inline-flex">
      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      <div className="flex items-center justify-evenly gap-x-2 rounded-full bg-white p-1">
        {allPages.map((page, index) => {
          // let position: "first" | "last" | "single" | "middle" | undefined;
          let position;
          if (index === 0) position = "first";
          if (index === allPages.length - 1) position = "last";
          if (allPages.length === 1) position = "single";
          if (page === "...") position = "middle";

          return (
            <PaginationNumber
              key={`${page}-${index}`}
              href={createPageURL(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>

      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}

// position?: "first" | "last" | "middle" | "single",

function PaginationNumber({ page, href, isActive, position }) {
  const className = classNames(
    "flex rounded-[15px] font-bold h-[45px] w-[45px] text-[#3072EE] items-center justify-center text-sm",
    {
      "mr-2": position === "first" || position === "single",
      "ml-2": position === "last" || position === "single",
      "z-10 text-xl h-[45px] w-[45px] bg-[#E5F6FF] text-[#3072EE]": isActive,
      "hover:bg-[#E5F6FF] hover:text-[#3072EE]  transition-all":
        !isActive && position !== "middle",
      "": position === "middle",
    },
  );

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

function PaginationArrow({ href, direction, isDisabled }) {
  const className = classNames(
    "flex items-center w-[70px] h-[70px] rounded-[25px] justify-center",
    {
      "pointer-events-none opacity-50": isDisabled,
      "hover:bg-[#2251D1] hover:text-white cursor-pointer action:scale-95 hover:scale-105 transition-all":
        !isDisabled,
      "mr-2 md:mr-4 bg-[#2251D1] text-white": direction === "left",
      "ml-2 md:ml-4 bg-white text-black": direction === "right",
    },
  );

  const icon =
    direction === "left" ? (
      <span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33337 10L8.33337 5M3.33337 10L8.33337 15M3.33337 10H12.0834M16.6667 10H14.5834"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    ) : (
      <span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6666 10L11.6666 15M16.6666 10L11.6666 5M16.6666 10H7.91663M3.33329 10H5.41663"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}
