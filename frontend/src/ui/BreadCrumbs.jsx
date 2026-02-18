import Link from "next/link";
import { ChevronLeft, Home } from "lucide-react";

export default function Breadcrumbs({ breadcrumbs }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 mt-8 block w-full overflow-x-auto pb-2"
    >
      <ol className="flex items-center whitespace-nowrap text-sm font-bold md:text-base">
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <li
              key={breadcrumb.href}
              aria-current={breadcrumb.active ? "page" : undefined}
              className="flex items-center"
            >
              <Link
                href={breadcrumb.href}
                className={`flex items-center gap-x-1 rounded-lg px-2 py-1 transition-all duration-200 ${
                  breadcrumb.active
                    ? "pointer-events-none bg-blue-50 text-blue-600 shadow-sm  border border-blue-100"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {/* اگر لیبل "خانه" بود، آیکون نشان بده، وگرنه متن */}
                {breadcrumb.label === "خانه" ? (
                  <Home className="h-4 w-4" />
                ) : (
                  breadcrumb.label
                )}
              </Link>

              {/* جداکننده (به جز آیتم آخر) */}
              {!isLast && (
                <ChevronLeft className="mx-1 h-3.5 w-3.5 text-slate-300 rtl:rotate-0" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
