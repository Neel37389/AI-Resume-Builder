const RepoCard = ({ repo, darkMode }) => {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className={`block p-4 rounded-xl border transition-all duration-200 hover:shadow-lg ${
        darkMode
          ? "bg-[#020617] border-[#1e293b] text-[#f8fafc] hover:bg-[#0f172a]"
          : "bg-white border-[#e2e8f0] text-[#020617] hover:bg-[#f1f5f9]"
      }`}
    >
      <h3 className="font-bold text-lg mb-1">{repo.name}</h3>

      <p
        className={`text-sm mb-2 ${
          darkMode ? "text-[#94a3b8]" : "text-[#64748b]"
        }`}
      >
        {repo.description || "No description"}
      </p>

      <div className="flex justify-between text-sm mt-3">
        <span>⭐ {repo.stargazers_count}</span>
        <span>{repo.language || "N/A"}</span>
      </div>

      <p
        className={`text-xs mt-2 ${
          darkMode ? "text-[#64748b]" : "text-[#94a3b8]"
        }`}
      >
        Updated: {new Date(repo.updated_at).toLocaleDateString()}
      </p>
    </a>
  );
};

export default RepoCard;
