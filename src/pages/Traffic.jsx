import SectionWrapper from "../components/SectionWrapper";

function Traffic() {
  return (
    <div className="py-16 space-y-24">

      <section className="text-center">
  <h1 className="text-4xl md:text-6xl font-bold text-accent">
    Adaptive Traffic Flow Management System
  </h1>

  <p className="mt-6 max-w-3xl mx-auto text-gray-300">
    An AI-powered system that dynamically controls traffic signals using
    real-time vehicle detection, traffic prediction, and reinforcement learning.
  </p>

  <div className="mt-8 flex flex-wrap justify-center gap-4">
    <a
      href="https://your-live-demo-link.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-accent text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
    >
      Live Demo
    </a>

    <a
      href="https://github.com/yourusername/traffic-project"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-accent px-6 py-3 rounded-lg text-accent hover:bg-accent hover:text-black transition"
    >
      GitHub Repository
    </a>
  </div>
</section>
      {/* PROBLEM */}
      <SectionWrapper>
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Problem Statement</h2>
          <p className="text-gray-300 leading-relaxed">
            Traditional traffic lights operate on fixed timers and cannot adapt
            to real-time congestion levels. This leads to inefficient signal
            timing, increased waiting time, fuel wastage, and delayed emergency
            vehicle movement.
          </p>
        </section>
      </SectionWrapper>

      {/* SOLUTION */}
      <SectionWrapper>
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Proposed Solution</h2>
          <p className="text-gray-300 leading-relaxed">
            I designed a real-time intelligent traffic management system that:
          </p>
          <ul className="mt-4 space-y-3 text-gray-300 list-disc list-inside">
            <li>Detects vehicles using YOLOv5</li>
            <li>Predicts traffic density using LSTM</li>
            <li>Optimizes signal timing using Q-Learning</li>
            <li>Prioritizes emergency vehicles dynamically</li>
          </ul>
        </section>
      </SectionWrapper>

      {/* ARCHITECTURE */}
      <SectionWrapper>
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">System Architecture</h2>
          <div className="bg-card p-8 rounded-xl">
            Camera Feed → YOLO Detection → Vehicle Count → LSTM Prediction →
            Q-Learning Optimization → Smart Signal Control
          </div>
        </section>
      </SectionWrapper>

      {/* TECH STACK */}
      <SectionWrapper>
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-4">
            {[
              "YOLOv5",
              "LSTM",
              "Q-Learning",
              "Python",
              "FastAPI",
              "Streamlit",
              "Docker",
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-accent text-black px-4 py-2 rounded-full font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </SectionWrapper>

      {/* IMPACT */}
      <SectionWrapper>
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Impact & Results</h2>
          <p className="text-gray-300 leading-relaxed">
            The system demonstrated improved traffic adaptability in simulated
            environments by dynamically adjusting signal durations based on
            congestion levels. Reinforcement learning enabled continuous
            improvement through experience.
          </p>
        </section>
      </SectionWrapper>

    </div>
  );
}

export default Traffic;