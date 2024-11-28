import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { createTestResult, getTestResults } from "../api/testResults"; // Adjust the path as necessary
import SecondHeader from "../components/SecondHeader";
import TestResultList from "./TestResultList";

const TestResultPage = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const { mbtiResult } = location.state || {}; // state가 없을 경우를 대비

  useEffect(() => {
    const saveResult = async () => {
      const data = await getTestResults();

      setResults(data);
      console.log(data);
    };
    saveResult();
  }, []);

  return (
    <>
      <div>
        <SecondHeader />
      </div>
      <div>
        <h1>모든 테스트결과</h1>
        <TestResultList results={results} setResults={setResults} />
      </div>
    </>
  );
};

export default TestResultPage;
