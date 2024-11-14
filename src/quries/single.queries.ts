import { getDataNewMoive } from "@/services/new_moive/api_new_movie.services";
import { getDataSeriesMovie, getDataSingleMovie } from "@/services/single_movie/api-single-moive.services";
import { useQuery } from "@tanstack/react-query";

export const useGetSingleMovie = (page: number) => {
  return useQuery({
    queryKey: [`singleMovie-${page}`],
    queryFn: () => {
      return getDataSingleMovie(page);
    },
  });
};

export const useGetSeriesMovie = (page: number) => {
  return useQuery({
    queryKey: [`seriesMovie-page-${page}`],
    queryFn: () => {
      return getDataSeriesMovie(page);
    },
  });
};

export const useGetNewMovie = () => {
  return useQuery({
    queryKey: ["newMovie"],
    queryFn: () => {
      return getDataNewMoive();
    }
  })
}

