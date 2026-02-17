import { useState } from "react";
import { aiService } from "../Services/aiService";
import { useCallback } from "react";

export function useAI() {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const reset = useCallback(() => {
    setAnalysis(null);
    setError(null);
  }, []);

  const analyse = async () => {
    if (loading) return;
    try {
      setAnalysis(null);
      setLoading(true);
      setError(null);

      const result = await aiService();
      setAnalysis(result);
      console.log(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { analyse, analysis, loading, error, reset };
}
