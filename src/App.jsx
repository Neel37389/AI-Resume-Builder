import SearchBar from "./Components/SearchBar";
import RepoList from "./Components/RepoList";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useGithub } from "./Hooks/useGithub";
import { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

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
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-black text-[#fafafa]" : "bg-white text-[#09090b]"
      }`}
    >
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col items-center px-4">
        {/* Subtitle */}
        <p
          className={`text-center mb-10 max-w-xl mt-6 ${
            darkMode ? "text-[#94a3b8]" : "text-[#64748b]"
          }`}
        >
          Enter a GitHub username to analyze their repositories and projects.
        </p>

        {/* Main Card */}
        <div
          className={`w-full max-w-7xl p-8 rounded-2xl border transition-all ${
            darkMode
              ? `
              bg-[#111111]
              border-[#27272a]
              shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_50px_rgba(0,0,0,0.9)]
            `
              : `
              bg-[#fafafa]
              border-[#e4e4e7]
              shadow-[0_20px_40px_rgba(0,0,0,0.15)]
            `
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
            {!loading && !error && (
              <RepoList repos={repos} darkMode={darkMode} />
            )}
          </main>
        </div>
      </div>
      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
