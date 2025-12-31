
import About from "./pages/About";
import ContactUs from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

function App() {
  return (
    <>
      

      <main className="relative z-10 scroll-smooth">
        <Home />
        <About />
        <Projects />
        <Services />
        <ContactUs />
      </main>
    </>
  );
}

export default App;
