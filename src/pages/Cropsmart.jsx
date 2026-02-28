import SectionWrapper from "../components/SectionWrapper";

function Cropsmart() {
  return (
    <div className="py-16 space-y-24">

      {/* HERO */}
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-accent">
          Cropsmart – ML Crop Intelligence Platform
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-gray-300">
          A machine learning platform designed to help farmers predict crop
          prices and make informed selling decisions.
        </p>
      </section>
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
    href="https://github.com/yourusername/cropsmart"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-accent px-6 py-3 rounded-lg text-accent hover:bg-accent hover:text-black transition"
  >
    GitHub Repository
  </a>
</div>

      {/* PROBLEM */}
      <SectionWrapper>
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Problem Statement</h2>
          <p className="text-gray-300 leading-relaxed">
            Farmers often lack access to real-time price intelligence and rely
            on middlemen, resulting in financial losses and poor decision-making.
          </p>
        </section>
      </SectionWrapper>

      {/* SOLUTION */}
      <SectionWrapper>
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Solution Approach</h2>
          <ul className="space-y-3 text-gray-300 list-disc list-inside">
            <li>Collected structured crop market datasets</li>
            <li>Performed preprocessing and label encoding</li>
            <li>Trained Random Forest regression model</li>
            <li>Built interactive prediction dashboard using Streamlit</li>
          </ul>
        </section>
      </SectionWrapper>

      {/* TECH STACK */}
      <SectionWrapper>
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-4">
            {[
              "Random Forest",
              "Python",
              "Pandas",
              "Streamlit",
              "Data Preprocessing",
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
          <h2 className="text-3xl font-semibold mb-6">Impact</h2>
          <p className="text-gray-300 leading-relaxed">
            The platform empowers farmers with predictive price insights,
            reducing dependency on intermediaries and enabling data-driven
            selling strategies.
          </p>
        </section>
      </SectionWrapper>

    </div>
  );
}

export default Cropsmart;