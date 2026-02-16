"use client";

import Link from "next/link";
import SideBarNavs from "./SideBarNavs";

function SideBar() {
  return (
    <div className="sticky top-4 h-full overflow-y-auto rounded-[35px] bg-white p-4">
      <div className={`flex h-full flex-col justify-between gap-y-4`}>
        <div className="flex w-full flex-col gap-y-4">
          <Link href="/">
            <div className={`flex items-center gap-x-2`}>
              <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#E5F6FF] font-[1000] transition-all duration-300 ease-out hover:scale-95 active:scale-95">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5095 8.36548L13.9997 14L12.49 19.6346"
                    stroke="#3072EE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8.16659 3.89412C9.8826 2.90146 11.8749 2.33333 13.9999 2.33333C20.4432 2.33333 25.6666 7.55667 25.6666 14C25.6666 20.4433 20.4432 25.6667 13.9999 25.6667C7.5566 25.6667 2.33325 20.4433 2.33325 14C2.33325 11.875 2.90139 9.88267 3.89404 8.16666"
                    stroke="#3072EE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <span className="text-[20px] font-[1000] text-[#3072EE] transition-all duration-300 ease-out hover:scale-95 active:scale-95">
                وبلاگینو
              </span>
            </div>
          </Link>
          <div className="h-[3px] w-[45px] self-center rounded-full bg-[#2251D1]/20"></div>
          {/* user */}
          <div>
            <Link href="#">
              <button
                className={`relative flex w-full cursor-pointer items-center gap-x-2 rounded-full bg-[#E5F6FF] px-4 py-2.5 transition-all duration-300 ease-out hover:scale-105 active:scale-95`}
              >
                <div className="flex w-full items-center justify-between gap-x-2">
                  <div className="flex items-center gap-x-2">
                    <div
                      className={`flex h-[42px] w-[42px] items-center justify-center rounded-[15px] bg-[#3072EE]`}
                    >
                      <span className={`text-[#E5F6FF]`}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="10.0001"
                            cy="4.99999"
                            r="3.33333"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M16.6645 15C16.6666 14.8632 16.6666 14.7242 16.6666 14.5833C16.6666 12.5123 13.6818 10.8333 9.99992 10.8333C6.31802 10.8333 3.33325 12.5123 3.33325 14.5833C3.33325 16.6544 3.33325 18.3333 9.99992 18.3333C11.8591 18.3333 13.1998 18.2028 14.1666 17.9695"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </div>
                    <span
                      className={`flex items-center justify-center text-xs font-[1000] text-[#3072EE]`}
                    >
                      محمد علی لیراوی
                    </span>
                  </div>
                  <div className={`text-[#3072EE]`}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_13_114)">
                        <path
                          d="M13.8768 2.87921L14.4175 2.33853C15.3133 1.4427 16.7657 1.4427 17.6615 2.33853C18.5574 3.23435 18.5574 4.68678 17.6615 5.58261L17.1209 6.12329M13.8768 2.87921C13.8768 2.87921 13.9444 4.02815 14.9581 5.04193C15.9719 6.0557 17.1209 6.12329 17.1209 6.12329M13.8768 2.87921L8.90606 7.84993C8.56938 8.18661 8.40105 8.35495 8.25627 8.54056C8.08549 8.75951 7.93908 8.99642 7.81961 9.24709C7.71834 9.45958 7.64306 9.68543 7.49249 10.1371L7.01043 11.5833M17.1209 6.12329L14.6355 8.60865M12.1501 11.094C11.8135 11.4307 11.6451 11.599 11.4595 11.7438C11.2406 11.9146 11.0037 12.061 10.753 12.1805C10.5405 12.2817 10.3146 12.357 9.86294 12.5076L8.41675 12.9896M8.41675 12.9896L7.48099 13.3016C7.2587 13.3757 7.01363 13.3178 6.84795 13.1521C6.68227 12.9864 6.62441 12.7414 6.69851 12.5191L7.01043 11.5833M8.41675 12.9896L7.01043 11.5833"
                          stroke="#3072EE"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M19.0834 9.99999C19.0834 9.58577 18.7476 9.24999 18.3334 9.24999C17.9192 9.24999 17.5834 9.58577 17.5834 9.99999H18.3334H19.0834ZM10.0001 2.41666C10.4143 2.41666 10.7501 2.08087 10.7501 1.66666C10.7501 1.25244 10.4143 0.916656 10.0001 0.916656V1.66666V2.41666ZM6.20896 16.5693C5.85041 16.3619 5.39162 16.4844 5.18421 16.8429C4.9768 17.2015 5.09932 17.6603 5.45787 17.8677L5.83341 17.2185L6.20896 16.5693ZM2.13239 14.5422C2.3398 14.9007 2.7986 15.0233 3.15714 14.8159C3.51569 14.6085 3.63821 14.1497 3.4308 13.7911L2.7816 14.1667L2.13239 14.5422ZM18.3334 9.99999H17.5834C17.5834 14.1881 14.1882 17.5833 10.0001 17.5833V18.3333V19.0833C15.0167 19.0833 19.0834 15.0166 19.0834 9.99999H18.3334ZM10.0001 1.66666V0.916656C4.98349 0.916656 0.916748 4.9834 0.916748 9.99999H1.66675H2.41675C2.41675 5.81183 5.81192 2.41666 10.0001 2.41666V1.66666ZM5.83341 17.2185L5.45787 17.8677C6.79467 18.641 8.34686 19.0833 10.0001 19.0833V18.3333V17.5833C8.61758 17.5833 7.3236 17.2141 6.20896 16.5693L5.83341 17.2185ZM1.66675 9.99999H0.916748C0.916748 11.6532 1.3591 13.2054 2.13239 14.5422L2.7816 14.1667L3.4308 13.7911C2.78602 12.6765 2.41675 11.3825 2.41675 9.99999H1.66675Z"
                          fill="#3072EE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_13_114">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </button>
            </Link>
          </div>
          <div className="h-[3px] w-[45px] self-center rounded-full bg-[#2251D1]/20"></div>
          {/* list items */}
          <SideBarNavs />
        </div>

        <button
          className={`relative flex h-[50px] w-full cursor-pointer items-center gap-x-2 rounded-full bg-[#FFF0E9] px-4 py-2.5 transition-all duration-300 ease-out hover:scale-105 active:scale-95`}
        >
          <div className="flex items-center gap-x-1">
            <span className={`text-[#EB5738]`}>
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.33342 9.5H16.6667M16.6667 9.5L14.1667 7.125M16.6667 9.5L14.1667 11.875"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.33333 9.50002C3.33333 6.00222 6.3181 3.16669 10 3.16669M10 15.8334C7.89468 15.8334 6.01729 14.9063 4.79552 13.4584"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span
              className={`flex items-center justify-center text-xs font-bold text-[#EB5738]`}
            >
              خروج از اکانت
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
export default SideBar;
