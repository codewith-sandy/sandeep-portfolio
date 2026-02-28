import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";
import WaveDivider from "../components/WaveDivider";

function Home() {
  return (
    <div className="space-y-32">
<section className="min-h-screen flex items-center px-6 md:px-20">

  <div className="grid md:grid-cols-2 gap-12 items-center w-full">

    {/* LEFT SIDE */}
    <div>

      <p className="text-accent uppercase tracking-wider text-sm mb-6">
        Artificial Intelligence | Intelligent Systems
      </p>

      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        Building <span className="text-accent">Intelligent</span> Systems
        <br />
        for Real-World Impact
      </h1>

      <p className="mt-8 text-gray-300 text-lg max-w-xl">
        I design AI-driven systems using Computer Vision,
        LSTM-based prediction models, and scalable backend
        architectures that solve real-world challenges.
      </p>

      <div className="mt-10 flex gap-4">
        <Link
          to="/projects"
          className="bg-accent text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          View Projects
        </Link>

        <a
          href="/Sandeep_Yadav_Resume.pdf"
          download
          className="border border-accent px-6 py-3 rounded-full text-accent hover:bg-accent hover:text-black transition"
        >
          Resume
        </a>
      </div>

    </div>

    {/* RIGHT SIDE VISUAL */}
    <div className="relative">

      <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent opacity-20 blur-3xl rounded-full"></div>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="AI Visual"
          className="rounded-2xl"
        />
      </div>

    </div>

  </div>
</section>
<WaveDivider />
<SectionWrapper>
  <section className="px-6 md:px-20">

    <h2 className="text-4xl font-bold mb-12">
      What I <span className="text-accent">Do</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-10">

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
        <h3 className="text-xl font-semibold mb-4">AI Model Development</h3>
        <p className="text-gray-300">
          Designing LSTM, YOLO, and ML-based predictive systems for
          real-time intelligent decision making.
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
        <h3 className="text-xl font-semibold mb-4">Backend Architecture</h3>
        <p className="text-gray-300">
          Building scalable APIs and structured backend systems
          using FastAPI and Python.
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
        <h3 className="text-xl font-semibold mb-4">Full Stack Applications</h3>
        <p className="text-gray-300">
          Creating responsive React applications with smooth
          UI/UX and modern animation systems.
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
        <h3 className="text-xl font-semibold mb-4">System Optimization</h3>
        <p className="text-gray-300">
          Integrating reinforcement learning and optimization
          strategies for adaptive system control.
        </p>
      </div>

    </div>

  </section>
</SectionWrapper>
<WaveDivider />
      <SectionWrapper>
  <section className="max-w-4xl mx-auto text-center px-4">

    <h2 className="text-3xl font-semibold mb-8">
      About Me
    </h2>

    <p className="text-gray-300 leading-relaxed text-lg">
      I am a Computer Science undergraduate specializing in Artificial Intelligence
      with hands-on experience in building ML-driven real-time systems.
      My work includes developing traffic optimization systems using YOLO and LSTM,
      and AI-powered crop price prediction platforms using deep learning.
    </p>

    <p className="text-gray-300 leading-relaxed text-lg mt-6">
      I have practical exposure to full-stack development, backend APIs,
      model deployment concepts, and system-level thinking.
      I enjoy designing solutions that integrate data processing,
      predictive modeling, and intuitive user interfaces.
    </p>

    <p className="text-gray-300 leading-relaxed text-lg mt-6">
      I am actively seeking opportunities in AI/ML Engineering,
      backend development, and intelligent systems where I can contribute
      to building scalable and impactful products.
    </p>

  </section>
</SectionWrapper>

      <WaveDivider />

      <SectionWrapper>
  <section className="px-4">
    <h2 className="text-3xl font-semibold text-center mb-12">
      Technical Skills
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="relative bg-[#0b1c3d]/60 backdrop-blur-xl border border-cyan-400/40 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,255,255,0.15)]">
        <h3 className="text-accent font-semibold mb-4">Programming</h3>
        <ul className="text-gray-300 space-y-2">
          <li>Java</li>
          <li>Python</li>
        </ul>
      </div>

      <div className="relative bg-[#0b1c3d]/60 backdrop-blur-xl border border-cyan-400/40 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,255,255,0.15)]">
        <h3 className="text-accent font-semibold mb-4">Machine Learning & AI</h3>
        <ul className="text-gray-300 space-y-2">
          <li>LSTM Networks</li>
          <li>YOLO (Computer Vision)</li>
          <li>TensorFlow</li>
          <li>Scikit-Learn</li>
        </ul>
      </div>

      <div className="relative bg-[#0b1c3d]/60 backdrop-blur-xl border border-cyan-400/40 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,255,255,0.15)]">
        <h3 className="text-accent font-semibold mb-4">Web & Tools</h3>
        <ul className="text-gray-300 space-y-2">
          <li>HTML, CSS, JavaScript</li>
          <li>Flask</li>
          <li>SQL</li>
          <li>Power BI</li>
          <li>Excel</li>
        </ul>
      </div>

      <div className="relative bg-[#0b1c3d]/60 backdrop-blur-xl border border-cyan-400/40 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,255,255,0.15)]">
        <h3 className="text-accent font-semibold mb-4">Core CS</h3>
        <ul className="text-gray-300 space-y-2">
          <li>Data Structures & Algorithms</li>
          <li>Object-Oriented Programming</li>
        </ul>
      </div>

      <div className="relative bg-[#0b1c3d]/60 backdrop-blur-xl border border-cyan-400/40 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,255,255,0.15)]">
        <h3 className="text-accent font-semibold mb-4">Soft Skills</h3>
        <ul className="text-gray-300 space-y-2">
          <li>Leadership</li>
          <li>Communication</li>
          <li>Problem-Solving</li>
          <li>Team Collaboration</li>
        </ul>
      </div>

    </div>
  </section>
</SectionWrapper>
<WaveDivider />
<SectionWrapper>
  <section className="max-w-4xl mx-auto px-4">
    <h2 className="text-3xl font-semibold mb-8 text-center">
      Internship Experience
    </h2>

    <div className="space-y-8">

      <div className="relative bg-[#0b1c3d]/60 backdrop-blur-xl border border-cyan-400/40 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,255,255,0.15)]">
        <h3 className="text-xl font-semibold text-accent">
          Web Development Intern – EIsystems Technologies
        </h3>
        <p className="text-gray-400 text-sm">July 2025 – Sept 2025</p>
        <p className="text-gray-300 mt-4">
          Developed responsive front-end interfaces using HTML, CSS,
          and Bootstrap while ensuring UI consistency and usability.
        </p>
      </div>

      <div className="relative bg-[#0b1c3d]/60 backdrop-blur-xl border border-cyan-400/40 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,255,255,0.15)]">
        <h3 className="text-xl font-semibold text-accent">
          Software Testing Intern – IGCF
        </h3>
        <p className="text-gray-400 text-sm">Aug 2025 – Sept 2025</p>
        <p className="text-gray-300 mt-4">
          Conducted functional and defect testing for a mobile application,
          ensuring stability, performance, and improved user experience.
        </p>
      </div>

    </div>
  </section>
</SectionWrapper>
<WaveDivider />
<SectionWrapper>
  <section className="max-w-4xl mx-auto px-4">
    <h2 className="text-3xl font-semibold mb-8 text-center">
      Achievements
    </h2>

    <div className="space-y-6">

      <div className="relative bg-[#0b1c3d]/60 backdrop-blur-xl border border-cyan-400/40 rounded-3xl p-6 shadow-[0_0_30px_rgba(0,255,255,0.15)]">
        <p className="text-gray-300">
          🏆 Secured 2nd Place at IEEE YESIST12 International Project Contest (2025)
          for developing an Adaptive Traffic Flow Control System using YOLO and LSTM.
        </p>
        
      </div>

      <div className="relative bg-[#0b1c3d]/60 backdrop-blur-xl border border-cyan-400/40 rounded-3xl p-6 shadow-[0_0_30px_rgba(0,255,255,0.15)]">
        <p className="text-gray-300">
          ⚡ Participated in RapteeHV CodeVolt National-Level Hackathon (2025),
          demonstrating strong technical and problem-solving capabilities.
        </p>
      </div>

    </div>
  </section>
</SectionWrapper>

      <WaveDivider />

      {/* PROJECT PREVIEW SECTION */}
      <SectionWrapper>
        <section className="px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Traffic Project */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-lg transition"
            >
<div className="bg-[#0b1c3d]/70 border border-cyan-400/40 rounded-3xl p-10 shadow-[0_0_40px_rgba(0,255,255,0.12)]">                <img
                  src="/public/Screenshot 2026-02-24 132454.png"
                  alt="Traffic AI"
                  className="w-full h-56 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-accent mb-4">
                  Adaptive Traffic Flow System
                </h3>
                <p className="text-gray-300 mb-6">
                  AI-powered traffic optimization using Computer Vision,
                  LSTM prediction, and Reinforcement Learning.
                </p>
                <Link
                  to="/traffic"
                  className="text-accent font-semibold hover:underline"
                >
                  View Case Study →
                </Link>
              </div>
            </motion.div>
            {/* AutoSales Project Card */}
<motion.div
  whileHover={{ scale: 1.03 }}
  className="bg-[#0b1c3d]/60 backdrop-blur-xl border border-cyan-400/40 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.15)] transition"
>

 {/* IMAGE SECTION */}
<div className="relative overflow-hidden h-56">
  <img
    src="/autosales-preview1.png"
    alt="Dashboard"
    className="absolute w-full h-full object-cover transition-opacity duration-500 hover:opacity-0"
  />
  <img
    src="/autosales-preview2.png"
    alt="Reports"
    className="w-full h-full object-cover"
  />
</div>

  {/* CONTENT */}
  <div className="p-8 space-y-6">

    <h3 className="text-2xl font-semibold text-cyan-400">
      AutoSales Dashboard
    </h3>

    <p className="text-gray-300">
      A Flask-based sales automation dashboard that analyzes,
      visualizes, and generates automated Excel & PDF reports
      using interactive charts.
    </p>

    <div className="flex flex-wrap gap-2">
      {["Flask", "Pandas", "Chart.js", "ReportLab"].map((tech, i) => (
        <span
          key={i}
          className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-semibold"
        >
          {tech}
        </span>
      ))}
    </div>

    <Link
      to="/projects"
      className="inline-block text-cyan-400 font-semibold hover:underline"
    >
      View Details →
    </Link>

  </div>
</motion.div>

            {/* Cropsmart Project */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-lg transition"
            >
<div className="bg-[#0b1c3d]/70 border border-cyan-400/40 rounded-3xl p-10 shadow-[0_0_40px_rgba(0,255,255,0.12)]">                <img
                  src="/Screenshot 2025-07-07 230351.png"
                  alt="Agriculture ML"
                  className="w-full h-56 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-accent mb-4">
                  Cropsmart ML Platform
                </h3>
                <p className="text-gray-300 mb-6">
                  Machine learning-based crop price prediction system
                  providing actionable market intelligence.
                </p>
                <Link
                  to="/cropsmart"
                  className="text-accent font-semibold hover:underline"
                >
                  View Case Study →
                </Link>
              </div>
            </motion.div>

          </div>
        </section>
      </SectionWrapper>

    </div>
  );
}

export default Home;