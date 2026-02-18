import Pagination from "@/ui/Pagination";
import Image from "next/image";
import React from "react";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";
import queryString from "query-string";
import { getPostsApi } from "@/services/postServices";
import { toLocalDateShort } from "@/utils/dateFormatter";
import Link from "next/link";
import { getCategoriesApi } from "@/services/categoryServie";
import SortFilter from "@/ui/SortFilter";

const categoryItems = {
  technologie: {
    id: 1,
    title: "تکنولوژی",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_tech)">
          <path
            d="M4.16663 1.87669C3.52121 2.01719 3.03427 2.25166 2.64294 2.643C1.66663 3.61931 1.66663 5.19066 1.66663 8.33335V9.16669C1.66663 11.5237 1.66663 12.7022 2.39886 13.4345C3.13109 14.1667 4.3096 14.1667 6.66663 14.1667H13.3333C15.6903 14.1667 16.8688 14.1667 17.6011 13.4345C18.3333 12.7022 18.3333 11.5237 18.3333 9.16669V8.33335C18.3333 5.19066 18.3333 3.61931 17.357 2.643C16.3807 1.66669 14.8093 1.66669 11.6666 1.66669H8.33329C8.0423 1.66669 7.76478 1.66669 7.49996 1.66746"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M13.3333 18.3333H6.66663"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M10 14.1666L10 18.3333"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M18.3333 10.8333H13.3333M1.66663 10.8333H9.99996"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_tech">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    // Blue-600 & Blue-50
    secondaryColor: "#2563EB",
    primaryColor: "#EFF6FF",
  },
  "games-and-entertainment": {
    id: 2,
    title: "بازی و سرگرمی",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_game)">
          <path
            d="M6.66667 8.33331V11.6666M5 9.99998L8.33333 9.99998"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M13.3333 8.75002C13.3333 9.21026 12.9602 9.58335 12.5 9.58335C12.0397 9.58335 11.6666 9.21026 11.6666 8.75002C11.6666 8.28978 12.0397 7.91669 12.5 7.91669C12.9602 7.91669 13.3333 8.28978 13.3333 8.75002Z"
            fill="currentColor"
          />
          <path
            d="M15 11.25C15 11.7103 14.6269 12.0834 14.1666 12.0834C13.7064 12.0834 13.3333 11.7103 13.3333 11.25C13.3333 10.7898 13.7064 10.4167 14.1666 10.4167C14.6269 10.4167 15 10.7898 15 11.25Z"
            fill="currentColor"
          />
          <path
            d="M10 3.33333V2.5C10 2.03976 10.3731 1.66667 10.8333 1.66667H11.6667C12.1269 1.66667 12.5 1.29357 12.5 0.833333V0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M18.3333 9.99998C18.3333 12.3335 18.3333 13.5003 17.8792 14.3916C17.4797 15.1756 16.8423 15.813 16.0583 16.2125C15.167 16.6666 14.0002 16.6666 11.6666 16.6666H8.33329C5.99974 16.6666 4.83296 16.6666 3.94167 16.2125C3.15766 15.813 2.52024 15.1756 2.12077 14.3916C1.66663 13.5003 1.66663 12.3335 1.66663 9.99998C1.66663 7.66643 1.66663 6.49965 2.12077 5.60835C2.52024 4.82434 3.15766 4.18692 3.94167 3.78745C4.83296 3.33331 5.99974 3.33331 8.33329 3.33331H11.6666C14.0002 3.33331 15.167 3.33331 16.0583 3.78745C16.8423 4.18692 17.4797 4.82434 17.8792 5.60835C18.0359 5.91606 18.1386 6.2566 18.2058 6.66665"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_game">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    // Violet-600 & Violet-50
    secondaryColor: "#7C3AED",
    primaryColor: "#F5F3FF",
  },
  "art-and-books": {
    id: 3,
    title: "هنر و ادبیات",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_art)">
          <path
            d="M5.83329 2.78445C7.05901 2.07356 8.4821 1.66669 9.99996 1.66669C14.6023 1.66669 18.3333 5.40739 18.3333 10.0218C18.3333 16.815 11.5321 12.016 10.2182 14.1057C9.8895 14.6285 10.2448 15.2803 10.6806 15.7173C11.2252 16.2633 11.2252 17.1484 10.6806 17.6944C10.2448 18.1314 9.65129 18.3924 9.03895 18.3219C4.88923 17.8442 1.66663 14.3103 1.66663 10.0218C1.66663 8.49546 2.07484 7.06473 2.78777 5.83335"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle
            cx="14.5834"
            cy="9.58331"
            r="1.25"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="5.41663"
            cy="9.58331"
            r="1.25"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9.23755 5.83313C9.23755 6.52349 8.6779 7.08313 7.98755 7.08313C7.29719 7.08313 6.73755 6.52349 6.73755 5.83313C6.73755 5.14277 7.29719 4.58313 7.98755 4.58313C8.6779 4.58313 9.23755 5.14277 9.23755 5.83313Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M13.3334 5.83331C13.3334 6.52367 12.7737 7.08331 12.0834 7.08331C11.393 7.08331 10.8334 6.52367 10.8334 5.83331C10.8334 5.14296 11.393 4.58331 12.0834 4.58331C12.7737 4.58331 13.3334 5.14296 13.3334 5.83331Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_art">
            <rect width="20" height="20" rx="5" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    // Rose-600 & Rose-50
    secondaryColor: "#E11D48",
    primaryColor: "#FFF1F2",
  },
  "culture-and-history": {
    id: 4,
    title: "فرهنگ و تاریخ",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.1517 11.8244C17.196 11.4126 16.8981 11.0428 16.4862 10.9985C16.0744 10.9542 15.7046 11.2522 15.6603 11.664L16.406 11.7442L17.1517 11.8244ZM3.59404 11.7442L2.84834 11.8244V11.8244L3.59404 11.7442ZM3.44125 10.3237L4.18694 10.2435V10.2435L3.44125 10.3237ZM7.30009 9.11163L7.9551 9.47695V9.47695L7.30009 9.11163ZM8.79133 6.43783L8.13632 6.07252V6.07252L8.79133 6.43783ZM11.2088 6.43783L10.5537 6.80315V6.80315L11.2088 6.43783ZM12.7 9.11163L13.355 8.74632V8.74632L12.7 9.11163ZM13.3365 9.96596L13.0343 10.6524L13.0343 10.6524L13.3365 9.96596ZM14.5588 9.37096L14.0295 8.83959V8.83959L14.5588 9.37096ZM13.7111 10.0182L13.6084 9.27529V9.27529L13.7111 10.0182ZM5.44129 9.37096L4.91199 9.90232L5.44129 9.37096ZM6.28896 10.0182L6.39169 9.27529H6.39169L6.28896 10.0182ZM6.66355 9.96596L6.9658 10.6524H6.9658L6.66355 9.96596ZM4.7601 16.7943L5.26031 16.2355V16.2355L4.7601 16.7943ZM15.24 16.7943L14.7398 16.2355V16.2355L15.24 16.7943ZM16.6519 8.74991L16.6433 9.49986L16.6519 8.74991ZM15.7204 8.31677L16.288 7.82647V7.82647L15.7204 8.31677ZM10.7564 5.65221L10.4156 4.98413L10.7564 5.65221ZM9.24365 5.65221L9.58449 4.98413V4.98413L9.24365 5.65221ZM10.9067 17.5V16.75H9.09343V17.5V18.25H10.9067V17.5ZM3.59404 11.7442L4.33974 11.664L4.18694 10.2435L3.44125 10.3237L2.69555 10.4039L2.84834 11.8244L3.59404 11.7442ZM7.30009 9.11163L7.9551 9.47695L9.44634 6.80315L8.79133 6.43783L8.13632 6.07252L6.64507 8.74632L7.30009 9.11163ZM11.2088 6.43783L10.5537 6.80315L12.045 9.47695L12.7 9.11163L13.355 8.74632L11.8638 6.07251L11.2088 6.43783ZM12.7 9.11163L12.045 9.47695C12.1785 9.71628 12.3061 9.94715 12.431 10.125C12.5601 10.3088 12.7451 10.525 13.0343 10.6524L13.3365 9.96596L13.6388 9.27957C13.7158 9.31349 13.724 9.35614 13.6586 9.26299C13.589 9.16384 13.5044 9.01425 13.355 8.74632L12.7 9.11163ZM14.5588 9.37096L14.0295 8.83959C13.812 9.05629 13.6893 9.17709 13.5949 9.25348C13.5062 9.32529 13.5254 9.28677 13.6084 9.27529L13.7111 10.0182L13.8139 10.7612C14.1266 10.7179 14.3637 10.5609 14.5384 10.4196C14.7074 10.2829 14.8937 10.096 15.0881 9.90232L14.5588 9.37096ZM13.3365 9.96596L13.0343 10.6524C13.2791 10.7602 13.549 10.7978 13.8139 10.7612L13.7111 10.0182L13.6084 9.27529C13.6186 9.27388 13.6291 9.27531 13.6388 9.27956L13.3365 9.96596ZM5.44129 9.37096L4.91199 9.90232C5.10638 10.096 5.29271 10.2829 5.4617 10.4196C5.63635 10.5609 5.87347 10.7179 6.18622 10.7612L6.28896 10.0182L6.39169 9.27529C6.47467 9.28677 6.49392 9.32529 6.40516 9.25348C6.31075 9.17709 6.18812 9.05629 5.97058 8.83959L5.44129 9.37096ZM7.30009 9.11163L6.64507 8.74632C6.49564 9.01425 6.41112 9.16384 6.34149 9.26299C6.27609 9.35614 6.28426 9.31349 6.36129 9.27957L6.66355 9.96596L6.9658 10.6524C7.255 10.525 7.43999 10.3088 7.56908 10.125C7.69395 9.94715 7.82162 9.71628 7.9551 9.47695L7.30009 9.11163ZM6.28896 10.0182L6.18622 10.7612C6.45108 10.7978 6.72101 10.7602 6.9658 10.6524L6.66355 9.96596L6.36129 9.27956C6.37096 9.27531 6.38146 9.27388 6.39169 9.27529L6.28896 10.0182ZM9.09343 17.5V16.75C7.8919 16.75 7.06213 16.7486 6.43138 16.6679C5.82158 16.5898 5.4977 16.448 5.26031 16.2355L4.7601 16.7943L4.2599 17.3531C4.81092 17.8463 5.47206 18.0573 6.241 18.1557C6.98899 18.2514 7.93168 18.25 9.09343 18.25V17.5ZM3.59404 11.7442L2.84834 11.8244C2.97132 12.9678 3.07 14.0997 3.2381 15.0175C3.32304 15.4812 3.43101 15.9233 3.58224 16.3099C3.73198 16.6927 3.94235 17.0689 4.2599 17.3531L4.7601 16.7943L5.26031 16.2355C5.18365 16.1669 5.08264 16.028 4.97916 15.7635C4.87718 15.5028 4.79012 15.1653 4.71356 14.7473C4.55867 13.9016 4.46853 12.8614 4.33974 11.664L3.59404 11.7442ZM16.406 11.7442L15.6603 11.664C15.5316 12.8614 15.4414 13.9016 15.2865 14.7473C15.21 15.1653 15.1229 15.5028 15.0209 15.7635C14.9174 16.028 14.8164 16.1669 14.7398 16.2355L15.24 16.7943L15.7402 17.3531C16.0577 17.0689 16.2681 16.6927 16.4178 16.3099C16.5691 15.9233 16.677 15.4812 16.762 15.0175C16.9301 14.0997 17.0288 12.9678 17.1517 11.8244L16.406 11.7442ZM10.9067 17.5V18.25C12.0684 18.25 13.0111 18.2514 13.7591 18.1557C14.528 18.0573 15.1892 17.8463 15.7402 17.3531L15.24 16.7943L14.7398 16.2355C14.5024 16.448 14.1785 16.5898 13.5687 16.6679C12.938 16.7486 12.1082 16.75 10.9067 16.75V17.5ZM8.33337 4.16667H9.08337C9.08337 3.66041 9.49378 3.25 10 3.25V2.5V1.75C8.66535 1.75 7.58337 2.83198 7.58337 4.16667H8.33337ZM10 2.5V3.25C10.5063 3.25 10.9167 3.66041 10.9167 4.16667H11.6667H12.4167C12.4167 2.83198 11.3347 1.75 10 1.75V2.5ZM17.9167 7.5H17.1667C17.1667 7.77614 16.9428 8 16.6667 8V8.75V9.5C17.7713 9.5 18.6667 8.60457 18.6667 7.5H17.9167ZM15.4167 7.5H16.1667C16.1667 7.22386 16.3906 7 16.6667 7V6.25V5.5C15.5621 5.5 14.6667 6.39543 14.6667 7.5H15.4167ZM16.6667 6.25V7C16.9428 7 17.1667 7.22386 17.1667 7.5H17.9167H18.6667C18.6667 6.39543 17.7713 5.5 16.6667 5.5V6.25ZM3.33337 8.75V8C3.05723 8 2.83337 7.77614 2.83337 7.5H2.08337H1.33337C1.33337 8.60457 2.2288 9.5 3.33337 9.5V8.75ZM2.08337 7.5H2.83337C2.83337 7.22386 3.05723 7 3.33337 7V6.25V5.5C2.2288 5.5 1.33337 6.39543 1.33337 7.5H2.08337ZM3.33337 6.25V7C3.60952 7 3.83337 7.22386 3.83337 7.5H4.58337H5.33337C5.33337 6.39543 4.43794 5.5 3.33337 5.5V6.25ZM16.6667 8.75V8C16.6647 8 16.6627 7.99999 16.6606 7.99996L16.6519 8.74991L16.6433 9.49986C16.6511 9.49995 16.6589 9.5 16.6667 9.5V8.75ZM16.6519 8.74991L16.6606 7.99996C16.5122 7.99825 16.3796 7.93254 16.288 7.82647L15.7204 8.31677L15.1529 8.80708C15.5137 9.22473 16.0473 9.49297 16.6433 9.49986L16.6519 8.74991ZM15.7204 8.31677L16.288 7.82647C16.2119 7.73845 16.1667 7.62545 16.1667 7.5H15.4167H14.6667C14.6667 7.99899 14.8504 8.45695 15.1529 8.80708L15.7204 8.31677ZM14.5588 9.37096L15.0881 9.90232C15.6586 9.33401 15.9365 9.06475 16.1144 8.95499L15.7204 8.31677L15.3265 7.67856C14.9609 7.90419 14.5284 8.34264 14.0295 8.83959L14.5588 9.37096ZM4.58337 7.5H3.83337C3.83337 7.62545 3.78815 7.73845 3.71211 7.82647L4.27965 8.31677L4.84719 8.80708C5.14967 8.45695 5.33337 7.99899 5.33337 7.5H4.58337ZM5.44129 9.37096L5.97058 8.83959C5.47169 8.34265 5.03914 7.90419 4.67358 7.67856L4.27965 8.31677L3.88572 8.95498C4.06355 9.06475 4.34146 9.33401 4.91199 9.90232L5.44129 9.37096ZM4.27965 8.31677L3.71211 7.82647C3.62047 7.93254 3.48791 7.99825 3.33946 7.99996L3.34813 8.74991L3.35681 9.49986C3.95275 9.49297 4.48637 9.22473 4.84719 8.80708L4.27965 8.31677ZM3.34813 8.74991L3.33946 7.99996C3.33743 7.99999 3.3354 8 3.33337 8V8.75V9.5C3.3412 9.5 3.34901 9.49995 3.35681 9.49986L3.34813 8.74991ZM3.44125 10.3237L4.18694 10.2435C4.14566 9.85966 4.11359 9.56045 4.0964 9.31782C4.07874 9.06846 4.08101 8.92776 4.09149 8.84951L3.34813 8.74991L2.60478 8.65032C2.57301 8.8874 2.58108 9.15462 2.60015 9.42382C2.6197 9.69976 2.65531 10.0298 2.69555 10.4039L3.44125 10.3237ZM11.6667 4.16667H10.9167C10.9167 4.52207 10.7146 4.83158 10.4156 4.98413L10.7564 5.65221L11.0973 6.32028C11.8788 5.92154 12.4167 5.10757 12.4167 4.16667H11.6667ZM10.7564 5.65221L10.4156 4.98413C10.2917 5.04734 10.1512 5.08333 10 5.08333V5.83333V6.58333C10.3936 6.58333 10.7672 6.4887 11.0973 6.32028L10.7564 5.65221ZM11.2088 6.43783L11.8638 6.07252C11.6924 5.76523 11.5362 5.48486 11.3925 5.25476L10.7564 5.65221L10.1204 6.04966C10.24 6.24113 10.376 6.48451 10.5537 6.80315L11.2088 6.43783ZM10 5.83333V5.08333C9.84892 5.08333 9.70839 5.04734 9.58449 4.98413L9.24365 5.65221L8.90281 6.32029C9.23291 6.4887 9.60652 6.58333 10 6.58333V5.83333ZM9.24365 5.65221L9.58449 4.98413C9.28548 4.83158 9.08337 4.52207 9.08337 4.16667H8.33337H7.58337C7.58337 5.10757 8.12124 5.92154 8.90281 6.32029L9.24365 5.65221ZM8.79133 6.43783L9.44634 6.80315C9.62406 6.48451 9.76003 6.24113 9.87968 6.04966L9.24365 5.65221L8.60762 5.25476C8.46383 5.48486 8.3077 5.76523 8.13632 6.07252L8.79133 6.43783Z"
          fill="currentColor"
        />
        <path
          d="M4.16663 14.5833H15.8333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    // Amber-600 & Amber-50
    secondaryColor: "#D97706",
    primaryColor: "#FFFBEB",
  },
  "cooking-and-nutrition": {
    id: 5,
    title: "آشپزی و تغذیه",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.13256 17.0254C9.42815 17.3156 9.903 17.3112 10.1932 17.0156C10.4833 16.72 10.479 16.2452 10.1834 15.955L9.65796 16.4902L9.13256 17.0254ZM12.4973 18.2174C12.1986 17.9304 11.7238 17.9399 11.4369 18.2386C11.1499 18.5373 11.1593 19.0121 11.458 19.299L11.9777 18.7582L12.4973 18.2174ZM9.65796 16.4902L10.1834 15.955L4.54396 10.4189L4.01855 10.9541L3.49315 11.4893L9.13256 17.0254L9.65796 16.4902ZM13.2974 20.0263L13.817 19.4855L12.4973 18.2174L11.9777 18.7582L11.458 19.299L12.7777 20.5671L13.2974 20.0263Z"
          fill="currentColor"
        />
        <path
          d="M4.0188 16.5368C2.67293 15.221 2 14.563 2 13.7454C2 13.2089 2.28972 12.7412 2.86916 12.1112C3.46036 11.4685 3.75595 11.1471 3.88968 10.8109C4.02341 10.4748 4.02705 10.0967 4.03433 9.34056L4.06648 5.99923C4.03217 3.81732 5.44093 2.02694 7.21305 2.0003C8.66759 1.97843 9.91482 3.15159 10.3341 4.77929M20.0783 13.3965C22.6406 10.8913 22.6406 6.82951 20.0783 4.32429C17.516 1.81908 13.3618 1.81908 10.7995 4.32429L10.3341 4.77929M10.3341 4.77929L9.37197 5.72001M17.4155 16L16.688 16.7113L13.2976 20.0262C11.9518 21.342 11.2788 22 10.4426 22C9.60638 22 8.93345 21.3421 7.58758 20.0262L6.51695 18.9794"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    // Emerald-600 & Emerald-50
    secondaryColor: "#16A34A",
    primaryColor: "#ECFDF5",
  },
  "travel-and-tourism": {
    id: 6,
    title: "سفر و گردشگری",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6666 8.33335V10C16.6666 13.1427 16.6666 14.7141 15.6903 15.6904C14.714 16.6667 13.1426 16.6667 9.99992 16.6667C6.85722 16.6667 5.28587 16.6667 4.30956 15.6904C3.33325 14.7141 3.33325 13.1427 3.33325 10V8.33335C3.33325 5.19066 3.33325 3.61931 4.30956 2.643C5.28587 1.66669 6.85722 1.66669 9.99992 1.66669C13.1426 1.66669 14.714 1.66669 15.6903 2.643C16.2346 3.18732 16.4754 3.91659 16.582 5.00002"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12.9167 13.3333H14.1667"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83325 13.3333H7.08325"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83333 16.6667L5 18.3334"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.1667 16.6667L15 18.3334"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.33325 1.66669V2.08335C8.33325 3.00383 9.07944 3.75002 9.99992 3.75002C10.9204 3.75002 11.6666 3.00383 11.6666 2.08335V1.66669"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.6667 10.8333H13.3334M3.33342 10.8333H10.0001"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    // Cyan-600 & Cyan-50
    secondaryColor: "#0891B2",
    primaryColor: "#ECFEFF",
  },
  exercise: {
    id: 7,
    title: "ورزش و سلامتی",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="11.6667"
          cy="3.33335"
          r="1.66667"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="5"
          cy="15"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="15"
          cy="15"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M15.4166 8.33331H12.1519C11.8377 8.33331 11.5328 8.22677 11.287 8.03111L9.48837 6.5993C8.43283 5.75903 6.87644 6.05918 6.20907 7.23171C5.56306 8.36672 6.04331 9.81131 7.24028 10.3336M9.99997 15L10.6336 13.5215C10.9747 12.7257 10.6094 11.8038 9.81584 11.4575"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    // Orange-600 & Orange-50
    secondaryColor: "#EA580C",
    primaryColor: "#FFF7ED",
  },
  "home-and-decoration": {
    id: 8,
    title: "خانه و دکوراسیون",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_home)">
          <path
            d="M7.5 13.3333C8.20865 13.8586 9.07047 14.1666 10 14.1666C10.9295 14.1666 11.7914 13.8586 12.5 13.3333"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M18.3333 10.17V11.4375C18.3333 14.6882 18.3333 16.3136 17.357 17.3235C16.3807 18.3334 14.8093 18.3334 11.6666 18.3334H8.33329C5.1906 18.3334 3.61925 18.3334 2.64294 17.3235C1.66663 16.3136 1.66663 14.6882 1.66663 11.4375V10.17C1.66663 8.26293 1.66663 7.30942 2.09929 6.51897C2.53196 5.72853 3.32241 5.23795 4.90332 4.25679L6.56999 3.22241C8.24111 2.18526 9.07668 1.66669 9.99996 1.66669C10.9232 1.66669 11.7588 2.18526 13.4299 3.22241L15.0966 4.25679C16.6775 5.23795 17.468 5.72853 17.9006 6.51897"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_home">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    // Teal-600 & Teal-50
    secondaryColor: "#0D9488",
    primaryColor: "#F0FDFA",
  },
  "fashion-and-lifestyle": {
    id: 9,
    title: "مد و سبک زندگی",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.1865 8.33335C15.1888 7.92195 15.2031 7.6859 15.2956 7.47442C15.4051 7.22398 15.6107 7.03856 16.022 6.66771L16.1764 6.52848C17.0566 5.73477 17.4967 5.33792 17.5 4.76346C17.5033 4.189 17.1129 3.82828 16.3323 3.10684C16.2141 2.99763 16.097 2.89547 15.984 2.80487C15.5911 2.49 15.0359 2.14537 14.611 1.8964C14.2133 1.66343 13.7462 1.60975 13.3046 1.72588L12.8962 1.83329C12.5728 1.91836 12.2911 2.12719 12.1062 2.41901C11.1042 4.00014 8.89576 4.00014 7.8938 2.419C7.70888 2.12719 7.4272 1.91836 7.10378 1.83329L6.69537 1.72588C6.25382 1.60975 5.78667 1.66343 5.38903 1.8964C4.96408 2.14537 4.40885 2.49 4.01603 2.80487C3.90299 2.89547 3.78592 2.99763 3.66774 3.10684C2.88705 3.82828 2.49671 4.189 2.50002 4.76346C2.50333 5.33792 2.94343 5.73477 3.82363 6.52848L3.97803 6.66771C4.38928 7.03856 4.59491 7.22398 4.7044 7.47442C4.81389 7.72487 4.81389 8.00979 4.81389 8.57962V15.2208C4.81389 16.3234 4.81389 16.8747 5.18796 17.343C5.56202 17.8113 6.0091 17.8936 6.90326 18.0581C7.72985 18.2101 8.77706 18.3334 10 18.3334C11.2229 18.3334 12.2702 18.2101 13.0967 18.0581C13.9909 17.8936 14.438 17.8113 14.812 17.343C15.1861 16.8747 15.1861 16.3234 15.1861 15.2208V11.6667"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    // Purple-600 & Purple-50
    secondaryColor: "#9333EA",
    primaryColor: "#F3E8FF",
  },
};
async function page({ searchParams }) {
  const queries = queryString.stringify(await searchParams);
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const { posts, totalPages } = await getPostsApi(queries, options);
  const { posts: lastPosts } = await getPostsApi();

  const { categories } = await getCategoriesApi();

  return (
    <div>
      {/* Last Post */}
      <section className="mt-14 hidden md:block">
        <div className="grid h-[460px] grid-cols-3 grid-rows-2 gap-4">
          {lastPosts?.slice(0, 4)?.map((blog, index) => {
            let gridClass = "";
            if (index === 0) gridClass = "col-start-1 row-start-1 row-span-2";
            if (index === 1) gridClass = "col-start-2 row-start-1";
            if (index === 2) gridClass = "col-start-2 row-start-2";
            if (index === 3) gridClass = "col-start-3 row-start-1 row-span-2";
            return (
              <div
                key={blog._id}
                className={`relative overflow-hidden rounded-[20px] transition-all duration-300 ease-out hover:scale-105 ${gridClass}`}
              >
                {/* Image */}
                <Image
                  src={blog.coverImageUrl}
                  alt={blog.title}
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black/70 from-50% to-transparent"></div>
                {/* Title */}
                <Link href={`/blogs/${blog.slug}`}>
                  <p className="absolute inset-x-0 bottom-0 cursor-pointer p-5 text-lg font-black leading-loose text-white transition-all duration-300 hover:text-[#2251D1] lg:active:scale-95">
                    {blog?.title}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      {/* Categories */}
      <section className="mt-14 hidden md:block">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {categories.map((category) => (
            <li key={category._id}>
              <Link
                href={`/blogs/category/${category.slug}`}
                style={{
                  backgroundColor: categoryItems[category.slug]?.primaryColor,
                }}
                className="flex w-[190px] cursor-pointer items-center gap-x-3 rounded-[25px] p-3 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              >
                {/* بخش آیکون */}
                <span
                  style={{
                    backgroundColor:
                      categoryItems[category.slug]?.secondaryColor,
                    color: categoryItems[category.slug]?.primaryColor,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-[18px] p-2 transition-transform duration-300 group-hover:rotate-12"
                >
                  {categoryItems[category.slug]?.icon}
                </span>

                {/* بخش عنوان */}
                <p
                  style={{
                    color: categoryItems[category.slug]?.secondaryColor,
                  }}
                  className="text-sm font-black tracking-tight"
                >
                  {category?.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {/* divider */}
      <section className="mt-14 hidden items-center gap-x-12 md:flex">
        <div className="h-1 flex-1 rounded-full bg-[#2251D1]/20"></div>
        <p className="text-2xl font-black text-black">وبلاگ</p>
        <div className="h-1 flex-1 rounded-full bg-[#2251D1]/20"></div>
      </section>
      {/* Filter Desctop */}
      <SortFilter />
      {/* Blogs */}
      <section className="mt-10 grid grid-cols-1 gap-4 pb-8 md:grid-cols-3">
        {posts?.map((blog) => (
          <div
            key={blog._id}
            className="transition-all duration-300 ease-out lg:hover:scale-105"
          >
            <div className="relative h-[270px] w-full overflow-hidden rounded-[30px] bg-red-50">
              <Image
                src={blog.coverImageUrl}
                width={2000}
                height={2000}
                className="absolute h-full w-full object-cover"
                alt="image of blog"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black/70 from-50% to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-y-2 p-4">
                <Link href={`/blogs/${blog.slug}`}>
                  <h2 className="cursor-pointer text-lg font-black text-white transition-all duration-300 hover:text-[#2251D1] lg:active:scale-95">
                    {blog.title}
                  </h2>
                </Link>
                <div className="flex items-center justify-between gap-x-2">
                  <div className="flex items-center gap-x-2">
                    {blog.category?.title && (
                      <div className="rounded-[15px] bg-[#003366] p-2 px-3 text-sm font-black text-[#00BFFF]">
                        {blog.category?.title}
                      </div>
                    )}
                    <div className="rounded-[15px] bg-white p-2 px-3 text-sm font-black opacity-70">
                      {toLocalDateShort(blog.createdAt)}
                    </div>
                  </div>
                  <button className="rounded-full bg-white p-4 opacity-70 transition-all duration-300 lg:hover:scale-105 lg:active:scale-95">
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
      {totalPages < 9 && (
        <section className="flex justify-center pb-48 md:pb-8">
          <Pagination totalPages={totalPages} />
        </section>
      )}
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
