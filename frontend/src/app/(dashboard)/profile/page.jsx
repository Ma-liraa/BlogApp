import { fetchCardData } from "@/services/data";
import React, { Suspense } from "react";
import Card from "./_components/Card";
import PostsTable from "./posts/_/components/PostsTable";
import Fallback from "@/ui/Fallback";
import CartWrapper from "./_components/CartWrapper";
import LatestPosts from "./_components/LatestPosts";
import Stats from "./_components/Stats";

async function Profile() {
  return (
    <div className="p-4">
      <h1 className="mb-8 font-[1000] text-[#1E2A44] md:text-xl">داشبورد</h1>
      <Suspense fallback={<Fallback />}>
        <Stats />
      </Suspense>
      <h2 className="mb-8 font-[1000] text-[#1E2A44] md:text-xl">
        آخرین پست‌ها
      </h2>
      <Suspense fallback={<Fallback />}>
        <LatestPosts />
      </Suspense>
    </div>
  );
}

export default Profile;
