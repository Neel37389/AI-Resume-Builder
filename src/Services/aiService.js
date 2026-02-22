export const aiService = async (repos, targetRole) => {
  const response = await fetch("http://localhost:3000/api/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ repos, targetRole }),
  });

  if (!response.ok) {
    throw new Error("Failed to analyze repositories");
  }
  return response.json();
};
