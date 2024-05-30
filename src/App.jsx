import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home, About, Contact, Projects } from "./pages";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  return (
    <main className="bg-slate-200">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
