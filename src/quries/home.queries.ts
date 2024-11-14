import { useQuery } from "@tanstack/react-query";
import {
  getDataDetailType,
  getDataTypeMovie,
} from "@/services/type_movie/api-type.services";
import { getDataTVShows } from "@/services/tv-shows/api-tv-shows.services";
import { getDataCartoon } from "@/services/cartoon/api_cartoon.services";
import { getDataWatch } from "@/services/watch/api-watch.services";

export const useGetTVShows = () => {
  return useQuery({
    queryKey: ["listMovie"],
    queryFn: () => {
      return getDataTVShows();
    },
  });
};

export const useGetCartoon = () => {
  return useQuery({
    queryKey: ["movieCartoon"],
    queryFn: () => {
      return getDataCartoon();
    },
  });
};
export const useGetTypeMovie = () => {
  return useQuery({
    queryKey: ["typeMovie"],
    queryFn: () => {
      return getDataTypeMovie();
    },
  });
};

export const useGetWatchMovie = (slug: string) => {
  return useQuery({
    queryKey: [`watchMovie-${slug}}`],
    queryFn: () => {
      return getDataWatch(slug);
    },
  });
};

export const useGetTypeDetailMovie = (type: string, page:number) => {
  return useQuery({
    queryKey: [`watchMovieType-${type}-${page}`],
    queryFn: () => {
      return getDataDetailType(type, page);
    },
  });
};

export const useGetTypeTvShows = () => {
  return useQuery({
    queryKey: ["tv-show"],
    queryFn: () => {
      return getDataTVShows();
    },
  });
};
