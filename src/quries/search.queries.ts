import { getDataSeach } from "@/services/search/api-search-movie.services";
import { useQuery } from "@tanstack/react-query";

export const useGetSearch = (key: string) => {
  return useQuery({
    queryKey: [`keysearch-${key}`],
    queryFn: () => {
      return getDataSeach(key);
    },
  });
};
