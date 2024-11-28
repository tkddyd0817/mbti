프로젝트 리드미
개요
이 프로젝트는 사용자가 성격 유형을 테스트하고 그 결과를 저장 및 공유할 수 있는 웹 어플리케이션입니다. 사용자 인증, 프로필 관리, 테스트 제출 및 결과 조회 기능을 제공합니다.

기술 스택
Frontend: React, React Router, Tailwind CSS
Backend: (API 호출을 위한) Axios
Context API: 상태 관리
주요 기능
사용자 인증

로그인 및 회원가입 기능
사용자 프로필 수정
성격 테스트

MBTI 성격 테스트 제공
테스트 결과 저장 및 조회
결과 공유

사용자별 결과 리스트 조회 및 공개/비공개 설정
결과 삭제 기능
파일 구조
src/
├── api/              # API 호출 관련 함수
├── components/       # 재사용 가능한 UI 컴포넌트
├── context/          # Context API 관련 파일
├── pages/            # 각 페이지 컴포넌트
├── shared/           # 공통된 라우터 및 레이아웃
├── data/             # 테스트 질문 데이터
└── utils/            # 유틸리티 함수

주요 컴포넌트 설명
Router.js
애플리케이션의 라우팅을 담당하며, 보호된 경로를 설정합니다.
UserProvider.js
사용자 상태를 관리하는 Context API를 설정합니다.
ProtectedRoute.js
로그인한 사용자만 접근할 수 있는 경로를 정의합니다.
AuthForm.js
로그인 및 회원가입 폼을 처리합니다.
Profile.js
사용자 프로필을 수정하는 페이지입니다.
TestPage.js
MBTI 테스트를 제출하고 결과를 보여주는 페이지입니다.
TestResultPage.js
모든 테스트 결과를 조회하는 페이지입니다.

API.js

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
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;

설명: 기본 API 인스턴스를 생성하며, 모든 요청에 Authorization 헤더를 추가하는 인터셉터를 설정합니다.

사용자 관련 API
auth.js

import axios from "axios";

const instance = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

// 회원가입
export const register = async (userData) => {
  const response = await instance.post("/register", userData);
  return response.data;
};

// 로그인
export const login = async (userData) => {
  const response = await instance.post("/login", userData);
  const { accessToken, userId, nickname } = response.data;
  localStorage.setItem("user", JSON.stringify({ userId, nickname }));
  localStorage.setItem("token", accessToken);
  return { userId, nickname, token: accessToken };
};

// 사용자 프로필 조회
export const getUserProfile = async (token) => {
  const response = await instance.get("/profile", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// 프로필 업데이트
export const updateProfile = async (nickname, token) => {
  const formData = new FormData();
  formData.set("nickname", nickname);
  const response = await instance.patch("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

기능:
회원가입: 사용자의 정보를 서버에 전송하여 새로운 계정을 생성합니다.
로그인: 사용자의 로그인 정보를 서버에 전송하고, 성공 시 사용자 정보를 로컬 스토리지에 저장합니다.
프로필 조회/업데이트: 사용자의 프로필 정보를 조회하고, 닉네임을 업데이트합니다.
테스트 결과 관련 API
testResults.js
javascript


import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// 테스트 결과 조회
export const getTestResults = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

// 테스트 결과 생성
export const createTestResult = async (resultData) => {
  const response = await axios.post(`${API_URL}`, resultData);
  return response.data;
};

// 테스트 결과 삭제
export const deleteTestResult = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

// 테스트 결과 가시성 업데이트
export const updateTestResultVisibility = async (id, visibility) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, { visibility });
    return response.data;
  } catch (error) {
    console.error("Error updating test result visibility:", error);
    throw error;
  }
};
기능:
조회: 모든 테스트 결과를 서버로부터 가져옵니다.
생성: 새로운 테스트 결과를 서버에 전송하여 저장합니다.
삭제: 특정 테스트 결과를 삭제합니다.
가시성 업데이트: 특정 테스트 결과의 공개 여부를 업데이트합니다.
사용법
API 인스턴스를 통해 HTTP 요청을 보냅니다.
사용자 인증 관련 API를 통해 로그인 및 프로필 관리를 수행합니다.
테스트 결과 관련 API를 사용하여 결과를 생성, 조회, 삭제 및 업데이트합니다.
