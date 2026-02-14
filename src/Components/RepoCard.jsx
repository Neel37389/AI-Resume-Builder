const RepoCard = ({ repo, darkMode }) => {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className={`block p-4 rounded-xl border transition-all duration-200 hover:shadow-lg ${
        darkMode
          ? "bg-[#09090b] border-[#27272a] text-[#fafafa] hover:bg-[#111]"
          : "bg-white border-[#e4e4e7] text-[#09090b] hover:bg-[#f4f4f5]"
      }`}
    >
      <h3 className="font-bold text-lg mb-1">{repo.name}</h3>

      <p
        className={`text-sm mb-2 ${
          darkMode ? "text-[#a1a1aa]" : "text-[#71717a]"
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
