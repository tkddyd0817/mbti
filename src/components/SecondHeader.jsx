import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../context/UserProvider";

const HeaderContainer = styled.header`
  background-color: #f5f5f5;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
`;

// const SiteTitle = styled.h1`
//   font-size: 1.5rem;
//   color: #333;
// `;

const NavMenu = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  color: #333;
  font-weight: bold;

  &:hover {
    color: #4267b2;
  }
`;

const SecondHeader = () => {
  // const navigate = useNavigate();

  // const logout = () => {
  //   const confirmLogout = window.confirm("로그아웃 하시겠습니까?");
  //   if(confirmLogout){
  //     removeToken();
  //     navigate("/")
  //   }
  // }
  const { logout } = useContext(UserContext);
  return (
    <HeaderContainer>
      <NavMenu>
        <NavItem to="/">홈</NavItem>
        <NavItem to="/Profile">프로필</NavItem>
        <NavItem to="/Login">테스트</NavItem>
        <NavItem to="/TestResultPage">결과보기</NavItem>
        <NavItem onClick={logout} to="/Login">
          로그아웃
        </NavItem>
      </NavMenu>
    </HeaderContainer>
  );
};

export default SecondHeader;
