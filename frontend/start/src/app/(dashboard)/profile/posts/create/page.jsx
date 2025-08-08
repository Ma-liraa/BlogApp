import Breadcrumbs from "@/ui/BreadCrumbs";
import React from "react";
import CreatePostForm from "./_/components/CreatePostForm";

function page() {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "پست‌ها", href: "/profile/posts" },
          { label: "ایجاد پست", href: "/profile/posts/create", active: true },
        ]}
      />
      <div className="flex justify-center">
        <CreatePostForm />
      </div>
    </div>
  );
}

export default page;
