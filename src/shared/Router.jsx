import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";
import Profile from "../pages/Profile";
import ProtectedRoute from "../context/ProtectedRoute";
import UserProvider from "../context/UserProvider";
import Layout from "../components/Layout";

const Router = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} />
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/Profile" element={<Profile />} />
            <Route path="/TestPage" element={<TestPage />} />
            <Route path="/TestResultPage" element={<TestResultPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default Router;
