"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ path, children, icon = "" }) {
  const pathname = usePathname();

  return (
    <Link
      className={`flex items-center gap-x-1 px-3 py-1 transition-all hover:text-primary-900 ${pathname === path ? "text-primary-900" : ""} `}
      href={path}
    >
      {icon ? <span>{icon}</span> : null}
      <span>{children}</span>
    </Link>
  );
}

export default NavLink;
