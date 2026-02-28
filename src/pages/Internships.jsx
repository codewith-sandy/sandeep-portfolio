import SectionWrapper from "../components/SectionWrapper";

function Internships() {
  return (
    <div className="py-16 space-y-24 px-4">

      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-accent">
          Internship Experience
        </h1>
      </section>

      <SectionWrapper>
        <section className="max-w-4xl mx-auto bg-card p-8 rounded-xl">
          <h2 className="text-xl font-semibold text-accent">
            Web Development Intern – EIsystems Technologies
          </h2>
          <p className="text-gray-400 text-sm">July 2025 – Sept 2025</p>
          <p className="text-gray-300 mt-4">
            Developed responsive UI components using HTML, CSS, and Bootstrap.
            Ensured consistency and usability across multiple device sizes.
          </p>
        </section>
      </SectionWrapper>

      <SectionWrapper>
        <section className="max-w-4xl mx-auto bg-card p-8 rounded-xl">
          <h2 className="text-xl font-semibold text-accent">
            Software Testing Intern – IGCF
          </h2>
          <p className="text-gray-400 text-sm">Aug 2025 – Sept 2025</p>
          <p className="text-gray-300 mt-4">
            Conducted functional testing and defect validation for mobile
            applications to ensure stable performance and user satisfaction.
          </p>
        </section>
      </SectionWrapper>

    </div>
  );
}

export default Internships;