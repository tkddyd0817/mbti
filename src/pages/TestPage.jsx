import { useState } from "react";
import TestForm from "../components/TestForm";
import SecondHeader from "../components/SecondHeader";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const TestPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  console.log(user);
  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult); //결과상태 업데이트

    //API를 이용해 결과 저장

    try {
      const resultPayload = {
        userid: user.userId,
        username: user.nickname,
        mbti: mbtiResult,
        description: mbtiDescriptions[mbtiResult],
        createdAt: new Date().toISOString(),
        visibility: true, // 기본값: 공개
      };
      await createTestResult(resultPayload);
      console.log("Test result 저장 성공했습니다.");
    } catch (error) {
      console.error("test result 를 저장하는 중에 오류가 발생했습니다.", error);
    }
  };

  const handleNavigateToResults = () => {
    navigate("/TestResultPage", { state: { mbtiResult: result } });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <SecondHeader />
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="w-full bg-primary-color text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F]"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default TestPage;
