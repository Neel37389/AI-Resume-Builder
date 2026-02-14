import { useState, useEffect } from "react";
import { getUserRepos } from "../Services/github";

export function useGithub(username) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    async function fetchRepos() {
      try {
        setLoading(true);
        setError(null);

        const data = await getUserRepos(username);
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, [username]);

  return { repos, loading, error };
}
