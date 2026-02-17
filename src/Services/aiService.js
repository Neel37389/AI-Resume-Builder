export async function aiService() {
  // simulate API delay
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  // return mock AI result
  return {
    overallScore: 8,
    detectedSkills: ["React", "Next.js", "Tailwind"],
    resumeBullets: [
      "Built a GitHub AI Resume Analyzer using Next.js",
      "Implemented clean service-layer architecture",
    ],
    improvements: ["Add authentication", "Add unit testing"],
  };
}
