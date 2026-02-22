const TargetRole = ({ targetRole, setTargetRole }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your desired role..."
        className="w-full p-3 border border-[#ddd6c8] bg-[#faf8f3]
dark:bg-[#020617] dark:border-[#1e293b] dark:text-gray-100
rounded-lg focus:outline-none focus:ring-2
focus:ring-emerald-500 mb-4"
        value={targetRole}
        onChange={(e) => setTargetRole(e.target.value)}
      />
    </div>
  );
};

export default TargetRole;
