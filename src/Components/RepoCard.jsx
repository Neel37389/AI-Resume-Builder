const RepoCard = ({ repo }) => {
  return (
    <div className="border p-3 mb-3 rounded">
      <h3 className="font-bold">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          {repo.name}
        </a>
      </h3>
      <p className="text-gray-600">{repo.description || "No Description"}</p>
      <div className="felx justify-between items-center text-sm text-gray500 my-3">
        <span className="p-4">⭐️ {repo.stargazers_count}</span>
        <span>{repo.language || "N/A"}</span>
      </div>
      <p className="text-xs text-gray-400 mt-2">
        Updated:{" "}
        {new Date(repo.updated_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
    </div>
  );
};

export default RepoCard;
