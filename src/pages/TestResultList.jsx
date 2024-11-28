import { useContext } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import TestResultItem from "../components/TestResultItem";
import { UserContext } from "../context/UserProvider";

const TestResultList = ({ results, setResults }) => {
  console.log(results);
  const { user } = useContext(UserContext);
  const currentUserId = user.userId;
  console.log(user);
  const handleUpdate = (id, updatedResult) => {
    if (updatedResult === null) {
      // 삭제된 결과 제거
      setResults((prevResults) =>
        prevResults.filter((result) => result.id !== id)
      );
    } else {
      // 상태 갱신
      setResults((prevResults) =>
        prevResults.map((result) => (result.id === id ? updatedResult : result))
      );
    }
  };

  // 에러는 나지 않아 -> results는 배열이긴 해 
  // 지금 데이터가 화면에 안나와 -> results 에 데이터가 없나??
  console.log(results)
  return (
    <div>
      <ul>
        {results
          .filter(
            (result) => result.visibility || result.userid === currentUserId
          )
          .map((result) => (
            <TestResultItem
              onUpdate={handleUpdate}
              key={result.id}
              results={result}
              currentUserId={currentUserId}
            />
          ))}
      </ul>
      <ScrollToTopButton />
    </div>
  );
};

export default TestResultList;
