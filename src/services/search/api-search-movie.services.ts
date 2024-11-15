import { authConfig } from "@/config/auth.config"
import { RootMovie } from "@/type/moive.type"
import { getData } from "@/utils/api"


export const getDataSeach = (key: string) => {
    return getData<RootMovie>(`${authConfig.apiUrl}/v1/api/tim-kiem?keyword=${key}`)
}