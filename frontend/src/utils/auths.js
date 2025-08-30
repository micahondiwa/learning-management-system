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
        })
    } catch (error) {
        console.log

    }
};