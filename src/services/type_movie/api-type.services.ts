import { authConfig } from "@/config/auth.config";
import { GenreResponse } from "@/type/genre.type";
import { RootMovie } from "@/type/moive.type";
import { getData } from "@/utils/api";

export const getDataTypeMovie = () => {
  return getData<GenreResponse>(`${authConfig.apiUrl}/v1/api/the-loai`);
};

export const getDataDetailType = (type: string, page: number) => {  
  return getData<RootMovie>(`${authConfig.apiUrl}/v1/api/the-loai/${type}?page=${page}`);
};

export const getDataTvShows= () => {
  return getData<RootMovie>(`${authConfig.apiUrl}/v1/api/danh-sach/tv-shows`);
};
