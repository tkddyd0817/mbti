import AuthForm from "../components/AuthForm";

import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const Login = () => {
  const { setUser, login } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogin = async (formData) => {
    try {
      const { id, password } = formData;
      const data = await login({ id, password }); // 로그인 API 호출

      setUser(data); // 사용자 상태 업데이트
      navigate("/"); // 로그인 성공 후 리다이렉트
      alert("로그인에 성공하였습니다");
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.", error);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <h1>로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div>
          <p>
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
