import { useAuthStore } from "../store/auth";
import axios from './axios';
import jwt_decode from 'jwt-decode';
import Cookie from 'js-cookie';
import Swal from 'sweetalert2';

export const login = async (email, password) => {
    try {
        const { data, status } = await axios.post('user/token/', {
            email,
            password,
        })

        if (status === 200) {
            setAuthUser(data.access, data.refresh);
            alert("Login Successful")
        }
        return { data, error: null }
    } catch (error) {
        return {
            data: null,
            eorr: error.response.data?.deatil || "Something went wrong",
        }
    };

};

export const register = async (full_name, email, password, password2) => {
    try {
        const { data } = await axios.post('user/register/', {
            full_name,
            email,
            password,
            password2,
        });

        await login(email, password);
        alert("Registration Successful")
        return { data, error.null }
    } catch (error) {
        return {
            data: null,
            error: error.response.data?.deatil || "Something went wrong",
        };

    }
};

export const logout = () => {
    Cookie.remove("access_token");
    Cookie.remove("refresh_token");
    useAuthStore.getState().setUser(null);

    alert("You have been logged out");
}

export const setUser = async () => {
    const access_token = Cookie.get('access_token');
    const refresh_token = Cookie.get('refresh_token');

    if (!access_token || !refresh_token) {
        alert("Tokens do not exists")
        return;
    }

    if (isAccessTokenExpired(access_token)) {
        const response = getRefreshedToken(refresh_token);
        setAuthUser(response.access, response.refresh);
    } else {
        setAuthUser(access_token, refresh_token);
    }
};

export const setAuthUser = (access_token, refresh_token) => {
    Cookie.set('access_token', access_token, {
        expires: 1,
        secure: true,
    });

    Cookie.set('access_refresh', refresh_token, {
        expires: 7,
        secure: true,
    });
};