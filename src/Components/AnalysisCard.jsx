import jsPDF from "jspdf";

export default function AnalysisCard({ data, darkMode }) {
  if (!data) return null;

  const handleDownload = () => {
    const doc = new jsPDF();

    let y = 20;

    doc.setFontSize(18);
    doc.text("Github AI Resume Summary", 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.text(`Overall Score ${data.overallScore}`, 20, y);
    y += 10;

    doc.text("Skills:", 20, y);
    y += 8;
    doc.text(data.detectedSkills.join(", "), 20, y);
    y += 12;

    doc.text("Resume Highlights:", 20, y);
    y += 8;
    data.resumeBullets.forEach((bullet) => {
      doc.text(`• ${bullet}`, 20, y);
      y += 8;
    });

    y += 4;

    doc.text("Recommended Improvements:", 20, y);
    y += 8;
    data.improvements.forEach((item) => {
      doc.text(`• ${item}`, 20, y);
      y += 8;
    });

    doc.save("github-ai-resume-summary.pdf");
  };

  return (
    <div
      className={`mt-8 p-6 rounded-xl shadow-md border ${
        darkMode
          ? "bg-[#09090b] border-[#27272a] text-[#fafafa]"
          : "bg-white border-[#e4e4e7] text-[#09090b]"
      }`}
    >
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
        <ul
          className={`list-disc pl-5 space-y-1 ${
            darkMode ? "text-[#a1a1aa]" : "text-[#71717a]"
          }`}
        >
          {data.resumeBullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Recommended Improvements</h3>
        <ul
          className={`list-disc pl-5 space-y-1 ${
            darkMode ? "text-[#a1a1aa]" : "text-[#71717a]"
          }`}
        >
          {data.improvements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <button
        className="mt-4 w-full bg-[#6b7f4e] dark:bg-emerald-600
      text-white py-3 rounded-lg
      hover:bg-[#5a6c42] hover:dark:bg-emerald-700
        transition"
        onClick={handleDownload}
      >
        Download PDF
      </button>
    </div>
  );
}
