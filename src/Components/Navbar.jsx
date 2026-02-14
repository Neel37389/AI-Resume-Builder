const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav
      className={`w-full flex justify-between items-center px-6 py-4 mb-4 ${
        darkMode ? "bg-black  text-[#fafafa]" : "bg-white  text-[#09090b]"
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
            ? "bg-[#27272a] text-[#fafafa] hover:bg-[#3f3f46]"
            : "bg-[#e4e4e7] text-[#09090b] hover:bg-[#d4d4d8]"
        }`}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
};

export default Navbar;
