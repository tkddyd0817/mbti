import { createContext, useEffect, useState } from "react";
import { login as apiLogin } from "../api/auth";
// 1. UserContext 생성
export const UserContext = createContext();

// 2. UserProvider 컴포넌트 정의
const UserProvider = ({ children }) => {
  // 3. 사용자 상태를 관리하기 위한 useState 훅 사용

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // 로그인 함수
  const login = async (userid, password) => {
    try {
      const { userId, nickname, token } = await apiLogin(userid, password);

      // 상태 업데이트
      setIsLoggedIn(true);
      setUser({ userId, nickname, token });

      return { userId, nickname, token }; // 필요 시 반환
    } catch (error) {
      console.error("Login failed in AuthContext:", error);
      throw error;
    }
  };

  // 로그아웃 함수
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    alert.success("로그아웃이 완료되었습니다.");
    setIsLoggedIn(false);
    setUser(null);
  };
  // 초기 사용자 상태 설정
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(storedUser);
    }
  }, []);
  return (
    <UserContext.Provider value={{ isLoggedIn, setUser, user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
