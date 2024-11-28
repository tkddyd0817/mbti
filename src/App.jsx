import UserProvider from "./context/UserProvider";
import Router from "./shared/Router";
// import GlobalStyle from "./styles/GlobalStyle";
// import AuthProvider from "../context/AuthContext";
// import  {   Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import { MbtiProvider } from "./context/MbtiContext";

function App() {
  return (
    <>
   
      <UserProvider>
      {/* <GlobalStyle /> */}
        <Router />
        </UserProvider>
    </>
  );
}

export default App;
