function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-slate-400">
      © {new Date().getFullYear()} PathPilot AI • Built with React + LangGraph + Gemini
    </footer>
  );
}

export default Footer;