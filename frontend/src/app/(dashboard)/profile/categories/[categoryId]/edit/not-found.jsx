import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="text-secondary-400 w-10" />
      <p>پستی با این مشخصات پیدا نشد</p>
      <Link
        href="/profile/posts"
        className="bg-primary-500 hover:bg-primary-400 mt-4 rounded-md px-4 py-2 text-sm text-white transition-colors"
      >
        برگشت
      </Link>
    </main>
  );
}
