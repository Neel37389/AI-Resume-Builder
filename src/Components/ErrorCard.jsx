const ErrorCard = ({ message, onRetry }) => {
  return (
    <div className="mt-8 p-6 rounded-xl shadow-md border border-red-500 bg-red-100">
      <h3 className="text-2xl font-bold mb-4">Analysis Failed!</h3>
      <p className="text-red-700 mb-4">{message}</p>
      <button
        className="px-4 py-2 bg-red-600 text-white rounded-xl"
        onClick={onRetry}
      >
        Retry
      </button>
    </div>
  );
};

export default ErrorCard;
