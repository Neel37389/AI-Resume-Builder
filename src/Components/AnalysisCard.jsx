export default function AnalysisCard({ data }) {
  if (!data) return null;

  return (
    <div className="mt-8 p-6 rounded-xl shadow-md border bg-white">
      <h2 className="text-2xl font-bold mb-4">AI Portfolio Summary</h2>

      <p className="mb-4">
        <span className="font-semibold">Overall Score:</span>{" "}
        {data.overallScore}/10
      </p>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Skills Detected</h3>
        <div className="flex flex-wrap gap-2">
          {data.detectedSkills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Resume Highlights</h3>
        <ul className="list-disc pl-5 space-y-1">
          {data.resumeBullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Recommended Improvements</h3>
        <ul className="list-disc pl-5 space-y-1">
          {data.improvements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
