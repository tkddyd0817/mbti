import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SecondHeader from "../components/SecondHeader";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";
function Home() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      {user ? <SecondHeader /> : <Header />}
      <div className="bg-gray-50 min-h-screen mt-16">
        <div className="container mx-auto py-10 px-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            무료 성격 테스트
          </h1>
          <p className="text-center text-gray-600 mb-12">
            자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                성격 유형 검사
              </h2>
              <p className="text-gray-600">
                자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을
                미치는지 알아보세요.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                성격 유형 이해
              </h2>
              <p className="text-gray-600">
                다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수
                있습니다.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                팀 평가
              </h2>
              <p className="text-gray-600">
                팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
                배워보세요.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => {
                navigate(user ? "/TestPage" : "/Login");
              }}
            >
              나의 MBTi 알아보기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
