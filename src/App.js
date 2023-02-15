import "./App.css";
import { Routes, Route } from "react-router-dom";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
// pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  return (
    <div>
      <Header />
      {/* Pages/ Routing */}
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
