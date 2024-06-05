import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home, About, Contact, Projects, Error404 } from "./pages";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
