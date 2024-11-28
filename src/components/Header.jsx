import { Link } from "react-router-dom";
import LoginNav from "./LoginNav";
import LogoutNav from "./LogoutNav";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const Header = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <header className="bg-gray-100 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        <div>
          <Link
            to="/"
            className="text-gray-800 hover:text-red-600 font-semibold text-lg"
          >
            홈
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          {isLoggedIn ? <LoginNav /> : <LogoutNav />}
        </div>
      </div>
    </header>
  );
};

export default Header;
