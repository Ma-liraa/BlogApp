import Button from "@/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-center text-2xl md:text-5xl text-secondary-800 my-20">
        اپلیکیشن مدیریت بلاگ
      </h1>

      <div>
        <p className="text-center text-secondary-500 text-lg leading-loose">
          جایی که قراره بتونی یه اپلیکیشن بلاگ کامل رو مدیریت کنی!
          <br /> بتونی بلاگ بسازی - کامنت بگذاری و در پنلت همه اتفاقات رو رصد
          کنی!
        </p>
        <div className="flex justify-center gap-x-8 w-full mt-10">
          <Link href="/blogs">
            <Button variant="outline">مطالعه بلاگ ها</Button>
          </Link>
          <Link href="/profile">
            <Button variant="primary">مدیریت بلاگ ها</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
