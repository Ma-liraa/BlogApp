"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Users,
  Tags,
  MessageSquare,
  ChevronLeft,
} from "lucide-react";

const sidebarNavs = [
  {
    id: 1,
    title: "داشبورد",
    icon: LayoutDashboard,
    href: "/profile",
    color: "blue",
  },
  {
    id: 2,
    title: "مقالات",
    icon: FileText,
    href: "/profile/posts",
    color: "amber",
  },
  {
    id: 3,
    title: "کاربران",
    icon: Users,
    href: "/profile/users",
    color: "purple",
  },
  {
    id: 4,
    title: "دسته‌بندی‌ها",
    icon: Tags,
    href: "/profile/categories",
    color: "green",
  },
  {
    id: 5,
    title: "نظرات",
    icon: MessageSquare,
    href: "/profile/comments",
    color: "orange",
  },
];

const colorVariants = {
  blue: "bg-blue-50 text-blue-600 ring-blue-100",
  amber: "bg-amber-50 text-amber-600 ring-amber-100",
  purple: "bg-purple-50 text-purple-600 ring-purple-100",
  green: "bg-emerald-50 text-emerald-600 ring-emerald-100",
  orange: "bg-orange-50 text-orange-600 ring-orange-100",
};

export default function SideBarNavs({ onClose }) {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-y-3">
      {sidebarNavs.map((nav) => {
        const Icon = nav.icon;
        const isActive = pathname === nav.href;

        return (
          <li key={nav.id}>
            <Link
              href={nav.href}
              onClick={onClose}
              className={`group relative flex items-center justify-between rounded-[24px] p-2 transition-all duration-300 ${
                isActive
                  ? "bg-slate-900 shadow-lg shadow-slate-200"
                  : "hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-x-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-[18px] transition-transform group-hover:scale-110 ${
                    isActive
                      ? "bg-white/10 text-white"
                      : colorVariants[nav.color]
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <span
                  className={`text-sm font-bold ${isActive ? "text-white" : "text-slate-600"}`}
                >
                  {nav.title}
                </span>
              </div>

              <ChevronLeft
                className={`h-4 w-4 transition-all ${
                  isActive
                    ? "translate-x-1 text-white"
                    : "text-slate-300 opacity-0 group-hover:opacity-100"
                }`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
