import Image from "next/image";

function Avatar({ src, width = 24 }) {
  return (
    <Image
      src={src || "/images/avatar.svg"}
      width={width}
      height={width}
      className="rounded-lg"
      alt={src || "-"}
    />
  );
}
export default Avatar;
