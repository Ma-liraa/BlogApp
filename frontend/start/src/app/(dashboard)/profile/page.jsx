import { fetchCardData } from "@/services/data";
import React, { Suspense } from "react";
import Card from "./_components/Card";
import PostsTable from "./posts/_/components/PostsTable";
import Fallback from "@/ui/Fallback";
import CartWrapper from "./_components/CartWrapper";
import LatestPosts from "./_components/LatestPosts";

async function Profile() {
  return (
    <div>
      <h1 className="text-secondary-700 font-bold md:text-xl mb-8">داشبورد</h1>
      <Suspense fallback={<Fallback />}>
        <CartWrapper />
      </Suspense>
      <h2 className="text-secondary-700 font-bold md:text-xl mb-8">
        آخرین پست‌ها
      </h2>
      <Suspense fallback={<Fallback />}>
        <LatestPosts />
      </Suspense>
    </div>
  );
}

export default Profile;
