import axios from "axios";

// const API_URL = 'https://moneyfulpublicpolicy.co.kr';

const instance = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

export const register = async (userData) => {
  const response = await instance.post("/register", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await instance.post("/login", userData);

  const { accessToken, userId, nickname } = response.data;
  // 로컬 스토리지에 사용자 데이터와 토큰 저장
  localStorage.setItem("user", JSON.stringify({ userId, nickname }));
  localStorage.setItem("token", accessToken);

  // 사용자 데이터 반환
  return { userId, nickname, token: accessToken };
  //응답에 사용자 정보와 토큰이 포함되어 있다고 가정
};

export const getUserProfile = async (token) => {
  const response = await instance.get("/profile", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, //Authorization 헤더에 토큰을 포함합니다.
    },
  });
  return response.data; //응답에 사용자 프로필 데이터가 포함되어 있다고 가정
};

export const updateProfile = async (nickname, token) => {
  const formData = new FormData();
  formData.set("nickname", nickname); // 닉네임 설정
  const response = await instance.patch("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`, //Authorization 헤더에 토큰을 포함합니다.
    },
  });
  return response.data; //응답에 업데이트된 프로필 데이터가 포함되어 있다고 가정
};
