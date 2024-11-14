import { RootMovie } from "@/type/moive.type";
import { authConfig } from "../../config/auth.config"
import { getData } from "../../utils/api"

export const  getDataTVShows = ()=>{    
    return getData<RootMovie>(`${authConfig.apiUrl}/v1/api/danh-sach/tv-shows`);
}


