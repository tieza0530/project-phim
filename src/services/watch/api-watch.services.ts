import { authConfig } from "@/config/auth.config"
import { RootItem } from "@/type/itemMovie";
import { getData } from "@/utils/api"

export const getDataWatch= (slug: string) => {
    return getData<RootItem>(`${authConfig.apiUrl}/phim/${slug}`);
}