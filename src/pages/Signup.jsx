import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
// import { useContext } from "react";
// import { UserContext } from "../context/UserProvider";

const Signup = () => {
  // const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      //회원가입 API 호출
      const data = await register(formData);
      if (data.success) {
        //회원가입 유저 상태 업데이트
        navigate("/Login"); //회원가입 성공후 리다이렉트
        alert("회원가입 성공 축하드립니다");
      }
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.", error);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <h1>회원가입</h1>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <div>
          <p>
            이미 계정이 있으신가요? <Link to="/login">로그인</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
