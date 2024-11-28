import { useContext, useState } from "react";
import { updateProfile } from "../api/auth";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import SecondHeader from "../components/SecondHeader";

const Profile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [nickname, setNickname] = useState(user?.nickname || "");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await updateProfile(nickname, user.token);
      if (data.success) {
        alert("프로필 수정에 성공하셨습니다.");
        setUser({ ...user, nickname, avatar: data.avatar });
        navigate("/");
      }
    } catch (error) {
      alert("프로필 수정에 실패했습니다 다시 수정해주세요", error.massage);
    }
  };

  return (
    <div>
      <div>
        <SecondHeader />
        <h1>프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>닉네임</label>
            <input onChange={handleNicknameChange} />
          </div>
          <button type="submit">프로필 업데이트</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
