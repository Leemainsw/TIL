import axios from ".";
import { UserType } from "../../types/user";

// 회원가입 body
interface SignUpAPIBody {
    email: string;
    firstname: string;
    lastname: string;
    birthday: string;
    password: string;
}

// 회원가입 api
export const signupAPI = (body: SignUpAPIBody) => axios.post<UserType>("/api/auth/signup", body);

// 로그인 api
export const loginAPI = (body: { email: string; password: string }) => axios.post<UserType>("api/auth/login", body);

// 쿠키의 accessToken의 유저 정보를 받아오는 API
export const meAPI = () => axios.get<UserType>("/api/auth/me");
