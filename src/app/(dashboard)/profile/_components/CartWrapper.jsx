import React from "react";
import Card from "./Card";
import { fetchCardData } from "@/services/data";

async function CartWrapper() {
  const { numOfComments, numOfPosts, numOfUsers } = await fetchCardData();

  return (
    <div className="grid md:grid-cols-3 mb-8 gap-6">
      <Card title="کاربر" type="users" value={numOfUsers} />
      <Card title="پست‌ها" type="posts" value={numOfPosts} />
      <Card title="کامنت‌ها" type="comments" value={numOfComments} />
    </div>
  );
}

export default CartWrapper;
