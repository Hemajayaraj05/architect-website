import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ContactUs from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <Navbar />

      {/* Main should NOT add spacing */}
      <main className="scroll-smooth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
