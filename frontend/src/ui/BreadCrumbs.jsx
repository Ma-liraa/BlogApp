import Link from "next/link";

export default function Breadcrumbs({ breadcrumbs }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 block px-2">
      <ol className="flex gap-x-2 text-base font-[1000]">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={`${
              breadcrumb.active ? "text-[#3B66FF]" : "text-[#1E2A44]"
            } flex gap-x-2`}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
