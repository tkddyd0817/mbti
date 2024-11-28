import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./UserProvider";

// 1. ProtectedRoute 컴포넌트를 만듭니다.
const ProtectedRoute = () => {
  // 2. 로그인 시 저장했던 user state를 불러옵니다.
  //    만약 context가 아니라 redux, useState(props-drilling) 등 다른 방식으로 저장했다면 아래 코드를 수정합니다.
  const { user } = useContext(UserContext);
  // console.log(user);
  // 3. user가 없다면 로그인 페이지로 리다이렉트합니다.
  //    이때 Navigate 컴포넌트는 페이지를 이동하는 컴포넌트입니다.
  if (!user) {
    return <Navigate to="/login" />;
  }
  // 4. user가 있다면 자식 컴포넌트를 반환합니다.
  return <Outlet />;

  
};

export default ProtectedRoute;
