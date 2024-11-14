import axios, { AxiosRequestConfig } from "axios";


export const apiClient = axios.create();

export const getData = <Data>(url: string, config?: AxiosRequestConfig) => {
    const request = apiClient
    .get<Data>(url, {
        ...config,
    })
    .then((res) => res.data)
    .catch((err) => {
        if(!axios.isCancel(err)){
            throw err;
        }
    })
    return request as Promise<Data>;
}