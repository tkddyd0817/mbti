import {
  updateTestResultVisibility,
  deleteTestResult,
} from "../api/testResults";

const TestResultItem = ({ results, onUpdate, currentUserId }) => {
  const { id, userid, mbti, description, createdAt, visibility, username } =
    results;

  const handleToggleVisibility = async () => {
    try {
      const updatedResult = await updateTestResultVisibility(id, !visibility);
      onUpdate(id, updatedResult); // 상태 갱신
    } catch (error) {
      console.error("Error toggling visibility:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTestResult(id);
      onUpdate(id, null); // 상태 갱신: null은 삭제된 결과 의미
    } catch (error) {
      console.error("Error deleting test result:", error);
    }
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{username}</h2>
        <p className="text-sm text-gray-400">
          {new Date(createdAt).toLocaleString()}
        </p>
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-yellow-500">{mbti}</h3>
      <p className="text-gray-300">{description}</p>
      {currentUserId === userid && (
        <div className="flex justify-end space-x-4 mt-4">
          <button
            onClick={handleToggleVisibility}
            className={`px-4 py-2 rounded-md font-semibold ${
              visibility
                ? "bg-blue-600 hover:bg-blue-500"
                : "bg-green-600 hover:bg-green-500"
            }`}
          >
            {visibility ? "비공개 전환" : "공개 전환"}
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500"
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;
