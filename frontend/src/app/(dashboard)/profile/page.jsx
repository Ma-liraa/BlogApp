import React, { Suspense } from "react";
import Fallback from "@/ui/Fallback";
import LatestPosts from "./_components/LatestPosts";
import Stats from "./_components/Stats";

async function Profile() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-8 rounded-b-[25px] rounded-t-[35px] md:bg-white md:p-8">
        <h1 className="font-[1000] text-[#1E2A44] md:text-[28px]">داشبورد</h1>
        <Suspense fallback={<Fallback />}>
          <Stats />
        </Suspense>
      </div>
      <div className="h-[3px] w-[45px] self-center rounded-full bg-[#2251D1]/20"></div>
      <div className="flex flex-col gap-y-8 rounded-b-[35px] rounded-t-[25px] md:bg-white md:p-8">
        <h2 className="font-[1000] text-[#1E2A44] md:text-[28px]">
          آخرین پست‌ها
        </h2>
        <Suspense fallback={<Fallback />}>
          <LatestPosts />
        </Suspense>
      </div>
    </div>
  );
}

export default Profile;
