import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Internships from "./pages/Internships";
import Contact from "./pages/Contact";
import Traffic from "./pages/Traffic";
import Cropsmart from "./pages/Cropsmart";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ScrollProgress />

      <div className="min-h-screen px-6 md:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
          <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/internships" element={<Internships />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/traffic" element={<Traffic />} />
                <Route path="/cropsmart" element={<Cropsmart />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
    </>
  );
}

export default App;