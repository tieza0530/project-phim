import { authConfig } from "@/config/auth.config"
import { RootMovie } from "@/type/moive.type"
import { getData } from "@/utils/api"

export const getDataSingleMovie = (page: number) => {
    return getData<RootMovie>(`${authConfig.apiUrl}/v1/api/danh-sach/phim-le?page=${page}`)
}

export const getDataSeriesMovie = (page: number) => {
    return getData<RootMovie>(`${authConfig.apiUrl}/v1/api/danh-sach/phim-bo?page=${page}`)
}
