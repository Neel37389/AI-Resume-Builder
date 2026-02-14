const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav
      className={`w-full flex justify-between items-center px-6 py-4 border-b ${
        darkMode
          ? "bg-[#020617] border-[#1e293b] text-[#f8fafc]"
          : "bg-white border-[#e2e8f0] text-[#020617]"
      }`}
    >
      {/* Title */}
      <span className="font-bold text-xl tracking-tight">
        AI Resume Analyzer
      </span>

      {/* Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`px-3 py-1 rounded-md text-sm transition ${
          darkMode
            ? "bg-[#1e293b] text-[#f8fafc] hover:bg-[#334155]"
            : "bg-[#e2e8f0] text-[#020617] hover:bg-[#cbd5e1]"
        }`}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
};

export default Navbar;
