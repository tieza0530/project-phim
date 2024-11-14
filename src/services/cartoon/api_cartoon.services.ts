import { authConfig } from "@/config/auth.config"
import { RootMovie } from "@/type/moive.type"
import { getData } from "@/utils/api"

export const getDataCartoon = () => {
    return getData<RootMovie>(`${authConfig.apiUrl}/v1/api/danh-sach/hoat-hinh`);
}