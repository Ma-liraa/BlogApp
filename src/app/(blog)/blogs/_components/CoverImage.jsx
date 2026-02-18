import Image from "next/image";
import Link from "next/link";
import React from "react";

function CoverImage({ coverImageUrl, title, slug }) {
  return (
    <div className="relative h-[200px] overflow-hidden rounded-2xl">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={coverImageUrl}
          alt={`cover of ${title}`}
          fill
          className="object-cover object-center transition-all hover:scale-110"
        />
      </Link>
    </div>
  );
}

export default CoverImage;
