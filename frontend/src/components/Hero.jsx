import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="flex min-h-[85vh] items-center justify-center bg-slate-950 px-6 text-center">
      <div className="max-w-4xl">
        <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
          Build Your Future With AI
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 md:text-xl">
          Generate personalized learning roadmaps, projects, and study plans
          tailored to your goals.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/chat"
            className="rounded-xl bg-violet-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-violet-700"
          >
            Start Building 🚀
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;