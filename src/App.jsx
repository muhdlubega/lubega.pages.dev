import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home, About, Contact, Projects } from "./pages";
import Navbar from "./components/Navbar";
import sakura from "./assets/sakura.mp3";
import "./index.css";
import { useEffect, useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const App = () => {
  const [music, setMusic] = useState(true);

  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.1;
  audioRef.current.loop = true;

  useEffect(() => {
    if (music) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [music]);

  return (
    <main className="bg-slate-900">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home music={music} setMusic={setMusic} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <button
        onClick={() => setMusic(!music)}
        className="absolute bottom-2 left-2"
      >
        {music ? <FaVolumeUp color="white" /> : <FaVolumeMute color="white" />}
      </button>
    </main>
  );
};

export default App;
