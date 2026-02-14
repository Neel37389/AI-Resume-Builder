import { useState } from "react";

const SearchBar = ({ GetUser }) => {
  const [user, setUser] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!user.trim()) return;

    GetUser(user);
    setUser("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username..."
        className="w-full p-3 border border-[#ddd6c8] bg-[#faf8f3]
dark:bg-[#020617] dark:border-[#1e293b] dark:text-gray-100
rounded-lg focus:outline-none focus:ring-2
focus:ring-emerald-500"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <button
        className="mt-4 w-full bg-[#6b7f4e] dark:bg-emerald-600
text-white py-3 rounded-lg
hover:bg-[#5a6c42] hover:dark:bg-emerald-700
transition"
      >
        Find Profile
      </button>
    </form>
  );
};

export default SearchBar;
