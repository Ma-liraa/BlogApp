import Image from "next/image";
import Link from "next/link";
import React from "react";

function CoverImage({ coverImageUrl, title, slug }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl mb-4">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={coverImageUrl}
          alt={`cover of ${title}`}
          fill
          className="object-cover object-center hover:scale-110 transition-all ease-out"
        />
      </Link>
    </div>
  );
}

export default CoverImage;
