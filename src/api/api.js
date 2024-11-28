import axios from "axios";

// API 인스턴스 생성
export const API = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // 토큰 가져오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Authorization 헤더 추가
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
