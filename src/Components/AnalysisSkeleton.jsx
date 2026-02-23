const SkeletonHeading = () => {
  return <div className="h-6 w-48 bg-gray-300 rounded animate-pulse mb-4" />;
};

const SkeletonScore = () => {
  return <div className="h-4 w-32 bg-gray-300 rounded animate-pulse mb-6" />;
};

const SkeletonPills = () => {
  return (
    <div className="flex gap-2 mb-6">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-6 w-20 bg-gray-300 rounded-full animate-pulse"
        />
      ))}
    </div>
  );
};

const SkeletonLines = ({ count = 3 }) => {
  return (
    <div className="space-y-2 mb-6">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="h-4 bg-gray-300 rounded animate-pulse"
          style={{ width: `${80 - i * 10}%` }}
        />
      ))}
    </div>
  );
};

const AnalysisSkeleton = ({ darkMode }) => {
  return (
    <div
      className={`mt-8 p-6 rounded-xl shadow-md border ${
        darkMode
          ? "bg-[#09090b] border-[#27272a] text-[#fafafa]"
          : "bg-white border-[#e4e4e7] text-[#09090b]"
      }`}
    >
      <SkeletonHeading />
      <SkeletonScore />

      {/* Skills Section */}
      <SkeletonHeading />
      <SkeletonPills />

      {/* Resume Highlights Section */}
      <SkeletonHeading />
      <SkeletonLines count={3} />

      {/* Improvements Section */}
      <SkeletonHeading />
      <SkeletonLines count={3} />
    </div>
  );
};

export default AnalysisSkeleton;
