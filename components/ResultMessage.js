const ResultMessage = ({ result }) => (
    <div className="mt-4 text-center">
      {result.potability === 1 ? (
        <p className="text-green-600 font-bold">Congratulations! The water is safe for drinking.</p>
      ) : (
        <p className="text-red-600 font-bold">Warning! The water is not safe for drinking.</p>
      )}
    </div>
  );
  
  export default ResultMessage;
  