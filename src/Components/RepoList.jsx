import RepoCard from "./RepoCard";

const RepoList = ({ repos, darkMode }) => {
  return (
    <div className="grid gap-4 mt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} darkMode={darkMode} />
      ))}
    </div>
  );
};

export default RepoList;
