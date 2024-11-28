import { Link, useNavigate } from "react-router-dom";
import   { UserContext }  from "../context/UserProvider";
import { useContext } from "react";

const LoginNav = () => {
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);
  

  return (
    <>
      <Link
        to="/profile"
        className="text-gray-800 hover:text-red-600 font-semibold text-lg"
      >
        프로필
      </Link>
      <Link
        to="/test"
        className="text-gray-800 hover:text-red-600 font-semibold text-lg"
      >
        테스트
      </Link>
      <Link
        to="/results"
        className="text-gray-800 hover:text-red-600 font-semibold text-lg"
      >
        결과 보기
      </Link>
      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
        className="bg-red-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-600"
      >
        로그아웃
      </button>
    </>
  );
};

export default LoginNav