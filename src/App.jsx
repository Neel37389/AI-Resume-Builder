import SearchBar from "./Components/SearchBar";
import RepoList from "./Components/RepoList";
import { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function getUser(user) {
    setUsername(user);
  }

  useEffect(() => {
    if (!username) return;
    async function fetchRepos() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`,
        );
        if (!response.ok) {
          throw new Error("User not found");
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, [username]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4 text-center">
          AI Resume Analyzer
        </h1>
        <main>
          <SearchBar GetUser={getUser} />
          <RepoList repos={repos} />
        </main>
      </div>
    </div>
  );
}

export default App;
