const ErrorCard = ({ message }) => {
  return (
    <div className="mt-8 p-6 rounded-xl shadow-md border border-red-500 bg-red-100">
      <h3 className="text-2xl font-bold mb-4">Analysis Failed!</h3>
      <p className="text-red-700">{message}</p>
    </div>
  );
};

export default ErrorCard;
