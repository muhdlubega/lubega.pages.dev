/* eslint-disable react/no-unknown-property */
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import Background from "../models/Background";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Robot from "../models/Robot";
import Plane from "../models/Plane";
import Fox from "../models/Fox";
import Cactus from "../models/Cactus";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustBackground = () => {
    let screenScale = null;
    let rotation = [0.3, 2.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.12, 0.12, 0.12];
    } else {
      screenScale = [0.2, 0.2, 0.2];
    }

    return [screenScale, rotation];
  };

  const [backgroundScale, backgroundRotation] = adjustBackground();

  const handlePrevStage = () => {
    setCurrentStage((prev) => (prev === 1 ? 4 : prev - 1));
    setIsRotating(true);
  };

  const handleNextStage = () => {
    setCurrentStage((prev) => (prev === 4 ? 1 : prev + 1));
    setIsRotating(true);
  };

  return (
    <section
      className={`w-full h-screen relative ${
        isRotating ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      <div className="absolute top-1/2 left-4 z-10">
        <button onClick={handlePrevStage} className="bg-white p-2 rounded-full">
          &lt;
        </button>
      </div>
      <div className="absolute top-1/2 right-4 z-10">
        <button onClick={handleNextStage} className="bg-white p-2 rounded-full">
          &gt;
        </button>
      </div>
      <div className="absolute bottom-6 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && (
          <Modal
            handlePrevStage={handlePrevStage}
            handleNextStage={handleNextStage}
            currentStage={currentStage}
          />
        )}
      </div>
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Plane isRotating={isRotating} />
          <Bird isRotating={isRotating} setIsRotating={setIsRotating} />
          <Robot
            rotation={backgroundRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <Fox
            rotation={backgroundRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <Cactus
            rotation={backgroundRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <Sky isRotating={isRotating} />
          <Background
            scale={backgroundScale}
            rotation={backgroundRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            currentStage={currentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
