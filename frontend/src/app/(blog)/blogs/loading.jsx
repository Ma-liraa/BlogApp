import Spinner from "@/ui/Spinner";

function Loading() {
  return (
    <div className="grid items-center justify-center gap-x-4">
      <span className="text-secondary-500 text-lg">
        در حال بارگذاری اطلاعات
      </span>
      <Spinner />
    </div>
  );
}
export default Loading;
