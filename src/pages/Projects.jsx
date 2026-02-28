import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import AnimatedCounter from "../components/AnimatedCounter";
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

function Projects() {
  return (
    <div className="py-24 space-y-40 px-6 md:px-20">

      {/* PAGE TITLE */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          Featured <span className="text-cyan-400">Projects</span>
        </h1>
      </motion.section>
            {/* ================= AUTOSALES ================= */}
<SectionWrapper>
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    className="space-y-16 relative"
  >

    {/* Decorative Glow */}
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full float-animation"></div>

    <h2 className="text-4xl font-bold">
      AutoSales – Sales Automation Dashboard
    </h2>

    <p className="text-gray-300 max-w-3xl">
      A modern Flask-based sales automation system designed to analyze,
      visualize, and automate business sales reporting using interactive
      dashboards and automated Excel/PDF report generation.
    </p>

    {/* GitHub + Demo */}
    <div className="flex gap-4 flex-wrap">
      <a
        href="https://github.com/codewith-sandy/AutoSales"
        target="_blank"
        className="px-6 py-3 bg-cyan-400 text-black rounded-full font-semibold hover:scale-105 transition"
      >
        GitHub
      </a>

      <a
        href="https://autosales-sb6h.onrender.com"
        target="_blank"
        className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition"
      >
        Live Demo
      </a>
    </div>

    {/* Core Features */}
    <div className="bg-[#0b1c3d]/60 backdrop-blur-xl border border-cyan-400/40 rounded-3xl p-10 space-y-6">

      <h3 className="text-2xl font-semibold text-cyan-400">
        Core Features
      </h3>

      <ul className="grid md:grid-cols-2 gap-4 text-gray-300 list-disc list-inside">
        <li>CSV Upload & Automatic Column Detection</li>
        <li>Interactive Chart.js Visualizations</li>
        <li>Multiple Time Analysis Modes (Date / Year / Month)</li>
        <li>Automated Excel (.xlsx) Report Generation</li>
        <li>Automated PDF Report Generation</li>
        <li>Chart History Saving & Reloading</li>
        <li>Admin Panel & Configurable Storage</li>
        <li>KPI Analytics Dashboard</li>
      </ul>

    </div>

    {/* Architecture Flow */}
    <div className="bg-[#0b1c3d]/60 backdrop-blur-xl border border-cyan-400/40 rounded-3xl p-12">

      <h3 className="text-2xl font-semibold text-cyan-400 mb-8">
        System Architecture
      </h3>

      <div className="grid md:grid-cols-5 gap-6 text-center">

        {[
          "CSV Upload",
          "Pandas Data Processing",
          "Flask Backend Logic",
          "Chart.js Visualization",
          "Report Generation (PDF / Excel)"
        ].map((step, i) => (
          <div
            key={i}
            className="bg-white/5 border border-cyan-400/30 p-4 rounded-xl"
          >
            {step}
          </div>
        ))}

      </div>

    </div>

    {/* Tech Stack */}
    <div className="bg-[#0b1c3d]/60 backdrop-blur-xl border border-cyan-400/40 rounded-3xl p-10">

      <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
        Tech Stack
      </h3>

      <div className="flex flex-wrap gap-4">
        {[
          "Python",
          "Flask",
          "Pandas",
          "Chart.js",
          "Tailwind CSS",
          "ReportLab",
          "OpenPyXL",
          "SQL"
        ].map((tech, i) => (
          <span
            key={i}
            className="bg-cyan-400 text-black px-4 py-2 rounded-full font-semibold"
          >
            {tech}
          </span>
        ))}
      </div>

    </div>

    {/* Performance Metrics */}
    <div className="grid md:grid-cols-4 gap-10 text-center">

      <div>
        <AnimatedCounter value="100" suffix="%" />
        <p className="text-gray-300 mt-2">Automated Report Accuracy</p>
      </div>

      <div>
        <AnimatedCounter value="24" suffix="/7" />
        <p className="text-gray-300 mt-2">Dashboard Accessibility</p>
      </div>

      <div>
        <AnimatedCounter value="10" suffix="+" />
        <p className="text-gray-300 mt-2">Interactive Chart Types</p>
      </div>

      <div>
        <AnimatedCounter value="2" suffix="" />
        <p className="text-gray-300 mt-2">Report Formats (PDF & Excel)</p>
      </div>

    </div>

  </motion.section>
</SectionWrapper>

      {/* ================= TRAFFIC PROJECT ================= */}
      <SectionWrapper>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-12"
        >

          <h2 className="text-4xl font-bold">
            Adaptive Traffic Flow Control System
          </h2>

          {/* GitHub + Demo */}
          <div className="flex gap-4">
            <a
              href="https://github.com/codewith-sandy/project-ATFCS"
              target="_blank"
              className="px-6 py-3 bg-cyan-400 text-black rounded-full font-semibold hover:scale-105 transition"
            >
              GitHub
            </a>

            <a
              href="#"
              className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition"
            >
              Live Demo
            </a>
          </div>

          {/* Architecture Diagram */}
          <div className="bg-[#0b1c3d]/60 backdrop-blur-xl border border-cyan-400/40 rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-cyan-400 mb-6">
              System Architecture
            </h3>

            <div className="grid md:grid-cols-5 gap-4 text-center">

              {[
                "CCTV Input",
                "YOLO Detection",
                "Vehicle Count",
                "LSTM Prediction",
                "RL Signal Control"
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-cyan-400/30 p-4 rounded-xl"
                >
                  {step}
                </div>
              ))}

            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div className="text-center">
                <AnimatedCounter value="30" suffix="%" />
                <p className="text-gray-300 mt-2">Reduced Waiting Time</p>
            </div>

            <div className="text-center">
              <AnimatedCounter value="25" suffix="%" />
              <p className="text-gray-300 mt-2">Fuel Consumption Reduction</p>
            </div>

            <div className="text-center">
              <AnimatedCounter value="100" suffix="ms" />
              <p className="text-gray-300 mt-2">Average Response Time</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-cyan-400">Real-Time</h3>
              <p className="text-gray-300 mt-2">Adaptive Learning</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">Emergency</h3>
              <p className="text-gray-300 mt-2">Vehicle Prioritization</p>
            </div>

          </div>

        </motion.section>
      </SectionWrapper>

      {/* ================= CROPSMART ================= */}
      <SectionWrapper>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-12"
        >

          <h2 className="text-4xl font-bold">
            Cropsmart – AI AgriTech Platform
          </h2>

          {/* GitHub + Demo */}
          <div className="flex gap-4">
            <a
              href="https://github.com/yourusername/cropsmart"
              target="_blank"
              className="px-6 py-3 bg-cyan-400 text-black rounded-full font-semibold hover:scale-105 transition"
            >
              GitHub
            </a>

            <a
              href="#"
              className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition"
            >
              Live Demo
            </a>
          </div>

          {/* Architecture Diagram */}
          <div className="bg-[#0b1c3d]/60 backdrop-blur-xl border border-cyan-400/40 rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-cyan-400 mb-6">
              System Architecture
            </h3>

            <div className="grid md:grid-cols-4 gap-4 text-center">

              {[
                "Market Data",
                "Data Preprocessing",
                "Random Forest / LSTM",
                "Prediction Dashboard"
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-cyan-400/30 p-4 rounded-xl"
                >
                  {step}
                </div>
              ))}

            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div className="text-center">   
              <AnimatedCounter value="20" suffix="%" />
              <p className="text-gray-300 mt-2">Income Potential Increase</p>
            </div>  

            <div className="text-center">
              <AnimatedCounter value="100" suffix="%" />
              <p className="text-gray-300 mt-2">Accuracy</p>
            </div>

            <div className="text-center">
              <AnimatedCounter value="100" suffix="%" />
              <p className="text-gray-300 mt-2">Predictive Accuracy</p>
            </div>

          </div>

        </motion.section>
      </SectionWrapper>


    </div>
  );
}

export default Projects;