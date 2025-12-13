import Breadcrumbs from "@/ui/BreadCrumbs";
import React from "react";
import CreatePostForm from "../../create/_/components/CreatePostForm";
import { getPostById } from "@/services/postServices";
import { notFound } from "next/navigation";

async function EditPage({ params: { postId } }) {
  const { post } = await getPostById(postId);
  if (!post) {
    notFound();
  }

  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "پست‌ها", href: "/profile/posts" },
          {
            label: "ویرایش پست",
            href: "/profile/posts/${postId}/edit",
            active: true,
          },
        ]}
      />
      <div className="mx-auto flex max-w-screen-sm justify-center">
        <CreatePostForm postToEdit={post} />
      </div>
    </div>
  );
}

export default EditPage;
