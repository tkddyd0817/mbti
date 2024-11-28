import { Outlet } from "react-router-dom";
import Header from "./Header";




const Layout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      </>
  
  );
};

export default Layout;

// App.js에서 Router로 페이지 경로를 정의.
// Layout은 페이지마다 공통으로 헤더(Header)를 포함.
// 사용자가 네비게이션 메뉴(홈, 타임라인 등)를 클릭하면
// 해당 경로에 맞는 페이지가 Layout의 children으로 렌더링.
