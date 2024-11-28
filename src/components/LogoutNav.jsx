import { Link } from "react-router-dom";

const LogoutNav = () => {
  return (
    <Link
      to="/login"
      className="text-gray-800 hover:text-red-600 font-semibold text-lg"
    >
      로그인
    </Link>
  );
};

export default LogoutNav;