import { useState } from "react";
import { aiService } from "../Services/aiService";

export function useAI() {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const reset = () => {
    setAnalysis(null);
    setError(null);
  };

  const analyse = async (repos, targetRole) => {
    if (loading) return;
    try {
      setAnalysis(null);
      setLoading(true);
      setError(null);

      const result = await aiService(repos, targetRole);
      setAnalysis(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { analyse, analysis, loading, error, reset };
}
