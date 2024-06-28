// components/ResultMessage.js

const ResultMessage = ({ result }) => {
  const isSafe = result === 1;
  return (
    <div
      className={`mt-6 p-4 text-center rounded-md ${
        isSafe ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      }`}
    >
      {isSafe ? (
        <p>Congratulations! The water is safe for drinking.</p>
      ) : (
        <p>Warning! The water is not safe for drinking.</p>
      )}
    </div>
  );
};

export default ResultMessage;
