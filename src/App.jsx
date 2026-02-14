import SearchBar from "./Components/SearchBar";
import RepoList from "./Components/RepoList";
import Navbar from "./Components/Navbar";
import { useGithub } from "./Hooks/useGithub";
import { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Load theme once
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Save theme
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const { repos, loading, error } = useGithub(username);

  function getUser(user) {
    setUsername(user);
  }

  return (
    <div
      className={`min-h-screen flex flex-col items-center ${
        darkMode ? "bg-[#020617] text-[#f8fafc]" : "bg-white text-[#020617]"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Subtitle */}
      <p
        className={`text-center mb-8 max-w-xl ${
          darkMode ? "text-[#94a3b8]" : "text-[#64748b]"
        }`}
      >
        Enter a GitHub username to analyze their repositories and projects.
      </p>

      {/* Main Card */}
      <div
        className={`w-full max-w-7xl p-8 rounded-2xl shadow-xl border ${
          darkMode
            ? "bg-[#0f172a] border-[#1e293b]"
            : "bg-[#f8fafc] border-[#e2e8f0]"
        }`}
      >
        <main>
          <SearchBar GetUser={getUser} />

          {/* Loading */}
          {loading && (
            <div className="grid gap-4 mt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className={`h-32 rounded-xl animate-pulse ${
                    darkMode ? "bg-[#2a3024]" : "bg-[#eee8dc]"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Error */}
          {error && <p className="text-red-500 mt-4">{error}</p>}

          {/* Repo List */}
          {!loading && !error && <RepoList repos={repos} darkMode={darkMode} />}
        </main>
      </div>
    </div>
  );
}

export default App;
