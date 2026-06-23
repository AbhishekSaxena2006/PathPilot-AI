function HowItWorks() {
  const steps = [
    "Enter Your Goal",
    "AI Analyzes Skills",
    "Generate Roadmap",
    "Track Progress",
  ];

  return (
    <section
      id="how"
      className="bg-slate-950 px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-14 text-center text-4xl font-bold">
          How It Works
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center"
            >
              <div className="mb-4 text-5xl font-bold text-violet-500">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;