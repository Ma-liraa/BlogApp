"use client";

import Link from "next/link";
import SideBarNavs from "./SideBarNavs";
import { Hexagon, UserCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

function SideBar({ onClose }) {
  const { user } = useAuth();

  return (
    <div className="flex h-full flex-col justify-between overflow-y-auto bg-white">
      <div className="space-y-8">
        {/* لوگو */}
        <Link href="/">
          <div className="flex items-center justify-start gap-x-3 py-2 md:justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-blue-50 text-blue-600">
              <Hexagon className="h-8 w-8 stroke-[2.5]" />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-800">
              وبلاگینو
            </span>
          </div>
        </Link>

        {/* بخش کاربر */}
        <div className="rounded-[28px] bg-slate-50 p-3 ring-1 ring-slate-100">
          <div className="flex items-center gap-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
              <UserCircle className="h-7 w-7 text-blue-600" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-black text-slate-800">
                {user?.name}
              </span>
              <span className="text-[10px] font-bold text-slate-400">
                مدیر پنل
              </span>
            </div>
          </div>
        </div>

        {/* منوها */}
        <SideBarNavs onClose={onClose} />
      </div>
    </div>
  );
}

export default SideBar;
