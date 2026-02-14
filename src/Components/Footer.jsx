const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`w-full mt-8 py-8 text-center text-sm border-t ${
        darkMode
          ? "bg-black border-white/10 text-[#a1a1aa]"
          : "bg-white border-black/10 text-[#71717a]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <p>© {new Date().getFullYear()} AI Resume Analyzer</p>
        <p className="mt-2">Built with React • GitHub API • By Neel Patel</p>
      </div>
    </footer>
  );
};

export default Footer;
