import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import { Footer } from "./components/Footer";
import About from "./components/About";

export function App() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </main>
          }
        />

        <Route
          path="/project/:id"
          element={<ProjectDetails />}
        />
      </Routes>

      <Footer />
    </div>
  );
}