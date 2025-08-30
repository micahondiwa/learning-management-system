import axios from "axios";
import { getRefreshedToken, isAccessTokenExpired, setAuthUser } from "./auths";
import { API_BASE_URL } from "./constants";
import Cookies from "js-cookie";

const useAxios = () => {
    const accessToken = Cookies.get("access_token");
    const refreshToken = Cookies.get("refresg_token");

    const axiosInstance = axios.create({
        baseURL: API_BASE_URL,
        headers: { Authorization: `Bearer ${accessToken}` },
    });

    axiosInstance.interceptors.request.use(async, (req) => {
        if (!isAccessTokenExpired) {
            return req;
        }

        const response = await getRefreshedToken(refreshToken);
        setAuthUser(response.access, response.refresh)
        refreshToken.headers.Authorization = `Bearer ${response.data?.access}`
        return req;
    });

    return axiosInstance;
};

export default useAxios;