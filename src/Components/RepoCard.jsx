const RepoCard = ({ repo }) => {
  return (
    <div className="border p-3 mb-3 rounded">
      <h3 className="font-bold">{repo.name}</h3>
      <p className="text-gray-600">{repo.description || "No Description"}</p>
    </div>
  );
};

export default RepoCard;
