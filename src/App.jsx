import SearchBar from "./Components/SearchBar";
import RepoList from "./Components/RepoList";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AnalysisSkeleton from "./Components/AnalysisSkeleton";
import { useGithub } from "./Hooks/useGithub";
import { useState, useEffect } from "react";
import AnalysisCard from "./Components/AnalysisCard";
import { useAI } from "./Hooks/useAI";
import ErrorCard from "./Components/ErrorCard";

function App() {
  const [username, setUsername] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const {
    analysis,
    loading: aiLoading,
    error: aiError,
    analyse,
    reset,
  } = useAI();

  // Save theme
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const { repos, loading, error } = useGithub(username);

  function getUser(user) {
    reset();
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
            {repos.length > 0 && !loading && !error && (
              <div className="mt-4">
                <button
                  onClick={() => analyse(repos)}
                  disabled={aiLoading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  {aiLoading ? "Amalysing..." : "Analyze Repos"}
                </button>
              </div>
            )}
            {aiLoading ? (
              <AnalysisSkeleton />
            ) : aiError ? (
              <ErrorCard message={aiError} />
            ) : analysis ? (
              <AnalysisCard data={analysis} />
            ) : null}

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
