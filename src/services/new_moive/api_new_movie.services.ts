import { authConfig } from "@/config/auth.config"
import { RMoive } from "@/type/moive.type"
import { getData } from "@/utils/api"

export const getDataNewMoive = () => {
    return getData<RMoive>(`${authConfig.apiUrl}/danh-sach/phim-moi-cap-nhat`);
}
