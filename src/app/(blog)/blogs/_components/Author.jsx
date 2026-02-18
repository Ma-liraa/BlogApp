import Avatar from "@/ui/Avatar";

function Author({ name, avatarUrl }) {
  return (
    <div className="flex items-center gap-x-3">
      <Avatar width={30} src={avatarUrl} />
      <span className="text-text font-bold text-sm">{name}</span>
    </div>
  );
}
export default Author;
