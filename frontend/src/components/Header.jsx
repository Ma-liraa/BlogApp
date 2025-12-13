// "use client";

import Link from "next/link";

// import { useAuth } from "@/context/AuthContext";
// import NavLink from "./NavLink";
// import Link from "next/link";
// import Avatar from "@/ui/Avatar";

function Header() {
  // const { user, isLoading } = useAuth();

  return (
    <nav className="mb-[43px] flex items-center justify-between gap-x-4">
      <Link href="/profile" className="transition-all hover:text-[#3B66FF] hover:scale-105 text-[#1E2A44]">
        <div className="flex items-center gap-x-2">
          <div className="flex items-center justify-center rounded-full bg-[#3B66FF]/10 p-1 shadow-[0_0_20px_rgba(59,102,255,0.5)]">
            <span className="rounded-full bg-[#FCFCFF] p-1.5">
              <svg
                width="45"
                height="44"
                viewBox="0 0 45 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_50_108)">
                  <path
                    d="M22.9026 28.7227C26.9364 28.7227 30.2065 25.5253 30.2065 21.5811C30.2065 17.6369 26.9364 14.4395 22.9026 14.4395C18.8687 14.4395 15.5986 17.6369 15.5986 21.5811C15.5986 25.5253 18.8687 28.7227 22.9026 28.7227Z"
                    fill="#FFB6B6"
                  />
                  <path
                    d="M18.7097 29.7787L18.3797 26.5172L24.9691 25.3125L28.8601 34.5757L22.0932 42.1847L17.2717 32.9215L18.7097 29.7787Z"
                    fill="#FFB6B6"
                  />
                  <path
                    d="M18.2738 28.1498L19.7144 28.4681C19.7144 28.4681 18.582 24.9568 18.9663 24.6216C19.3507 24.2863 20.2927 24.8146 20.2927 24.8146L21.2825 25.8997L22.4882 24.6994C22.4882 24.6994 23.7972 23.1079 24.3097 22.661C24.8222 22.214 23.999 20.555 23.999 20.555C23.999 20.555 31.6026 18.5502 28.7733 14.9442C28.7733 14.9442 27.1145 12.1169 26.5743 13.0379C26.034 13.9589 25.3899 12.4961 25.3899 12.4961L23.4229 12.8619C23.4229 12.8619 19.5409 10.6238 15.8564 15.4117C12.1719 20.1996 18.2738 28.1498 18.2738 28.1498Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M36.6395 39.1162C32.6479 42.2806 27.7097 44.0001 22.5 44.0001C17.7429 44.0001 13.2116 42.5659 9.42126 39.9077C9.42803 39.8382 9.4348 39.7696 9.44072 39.701C9.54138 38.6258 9.63104 37.5804 9.69025 36.7136C9.91948 33.3482 17.9493 31.1052 17.9493 31.1052C17.9493 31.1052 17.9856 31.1408 18.0584 31.2028C18.5016 31.5833 20.3008 32.9628 23.4559 33.3482C26.2692 33.6923 27.1954 32.0605 27.4754 31.2789C27.56 31.0407 27.5854 30.8811 27.5854 30.8811L35.8444 34.6947C36.3832 35.4473 36.5938 37.0684 36.6353 38.8904C36.637 38.9657 36.6387 39.0401 36.6395 39.1162Z"
                    fill="#6C63FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_50_108">
                    <rect width="45" height="44" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <span className="text-base font-[1000] ">
            محمد علی لیراوی
          </span>
        </div>
      </Link>
      <div className="flex items-center justify-center rounded-full bg-[#3B66FF]/10 p-1 shadow-[0_0_20px_rgba(59,102,255,0.5)]">
        <div className="flex items-center rounded-full bg-[#FCFCFF]/50 p-1.5">
          <Link href="/favorit-blogs">
            <div className="flex items-center justify-center p-3">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.16663 9.89847C2.16663 15.1666 6.52101 17.974 9.7085 20.4868C10.8333 21.3735 11.9166 22.2083 13 22.2083C14.0833 22.2083 15.1666 21.3735 16.2914 20.4868C19.4789 17.974 23.8333 15.1666 23.8333 9.89847C23.8333 4.63028 17.8747 0.894192 13 5.95896C8.12513 0.894192 2.16663 4.63028 2.16663 9.89847Z"
                  fill="#1E2A44"
                />
              </svg>
            </div>
          </Link>

          <div className="flex items-center justify-center rounded-full bg-[#C3CDFF] p-3 md:hidden">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.006 12.0864C22.006 17.5649 17.5648 22.0062 12.0863 22.0062C6.60782 22.0062 2.16663 17.5649 2.16663 12.0864C2.16663 6.60794 6.60782 2.16675 12.0863 2.16675C17.5648 2.16675 22.006 6.60794 22.006 12.0864Z"
                fill="#1E2A44"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.4081 20.4081C20.7139 20.1023 21.2099 20.1023 21.5157 20.4081L23.604 22.4964C23.9098 22.8024 23.9098 23.2982 23.604 23.604C23.2982 23.9098 22.8024 23.9098 22.4964 23.604L20.4081 21.5157C20.1023 21.2099 20.1023 20.7139 20.4081 20.4081Z"
                fill="#1E2A44"
              />
            </svg>
          </div>

          <Link href="/profile/posts/create">
            <div className="hidden items-center justify-center rounded-full bg-[#C3CDFF] p-1.5 md:flex">
              <svg
                width="36"
                height="36"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8683 23.8092C12.5678 23.5087 12.378 23.0976 12.378 22.6234C12.3778 21.7064 13.1365 20.9477 14.0535 20.9478L31.9499 20.951C32.8668 20.9511 33.6258 21.7101 33.626 22.6271C33.6262 23.544 32.8674 24.3027 31.9505 24.3026L14.0541 24.2995C13.5956 24.3152 13.1687 24.1096 12.8683 23.8092Z"
                  fill="#1E2A44"
                />
                <path
                  d="M21.818 32.7589C21.5176 32.4585 21.3278 32.0474 21.3277 31.5731L21.3246 13.6767C21.3244 12.7598 22.0832 12.001 23.0001 12.0012C23.9171 12.0014 24.6761 12.7603 24.6762 13.6773L24.6794 31.5737C24.6795 32.4907 23.9208 33.2494 23.0038 33.2492C22.5295 33.2491 22.1185 33.0594 21.818 32.7589Z"
                  fill="#1E2A44"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Header;
