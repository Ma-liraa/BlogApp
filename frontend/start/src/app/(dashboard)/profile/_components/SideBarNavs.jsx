"use client";
import {
  ChatBubbleBottomCenterIcon,
  DocumentTextIcon,
  HomeIcon,
  RectangleGroupIcon,
  Squares2X2Icon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";

const sidebarNavs = [
  {
    id: 1,
    title: "خانه",
    icon: <HomeIcon className="w-5 h-5" />,
    href: "/",
  },
  {
    id: 2,
    title: "داشبورد",
    icon: <RectangleGroupIcon className="w-5 h-5" />,
    href: "/profile",
  },

  {
    id: 3,
    title: "پست ها",
    icon: <DocumentTextIcon className="w-5 h-5" />,
    href: "/profile/posts",
  },
  {
    id: 4,
    title: "نظرات",
    icon: <ChatBubbleBottomCenterIcon className="w-5 h-5" />,
    href: "/profile/comments",
  },
  {
    id: 5,
    title: "دسته بندی ها",
    icon: <Squares2X2Icon className="w-5 h-5" />,
    href: "/profile/categories",
  },
  {
    id: 6,
    title: "کاربران",
    icon: <UsersIcon className="w-5 h-5" />,
    href: "/profile/users",
  },
];

export default function SideBarNavs() {
  const router = useRouter();
  return (
    <ul className="space-y-2 w-full">
      {sidebarNavs.map((nav) => {
        return (
          <li key={nav.id}>
            <Link
              href={nav.href}
              className={classNames(
                "flex items-center px-4 gap-x-2 rounded-xl font-medium w-full hover:bg-primary-100 hover:text-primary-900 transition-all duration-200 text-secondary-700 py-3",
                {
                  "bg-primary-100/40 !font-bold text-primary-900":
                    router.pathname === nav.href,
                }
              )}
            >
              {nav.icon}
              {nav.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
