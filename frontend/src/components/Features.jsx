function Features() {
  const features = [
    "🧠 Personalized Roadmaps",
    "📚 Resource Recommendations",
    "📈 Progress Tracking",
    "🎯 Skill Gap Analysis",
  ];

  return (
    <section
      id="features"
      className="bg-slate-950 px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-14 text-center text-4xl font-bold">
          Features
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;