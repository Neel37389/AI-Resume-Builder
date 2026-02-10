import { useState } from "react";

const SearchBar = (props) => {
  const { GetUser } = props;
  const [user, setUser] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!user.trim()) return;
    GetUser(user);
    setUser("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your username text here..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Find Profile
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
