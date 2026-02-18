import { useRouter } from "next/navigation";

function useMoveBack() {
  const router = useRouter();
  return () => router.back();
}

export default useMoveBack;
