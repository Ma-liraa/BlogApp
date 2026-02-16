import { getAllUserApi } from "@/services/authService";
import { useQuery } from "@tanstack/react-query";

export function useUsers() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUserApi,
  });

  const { users } = data || [];

  return { isLoading, users };
}
