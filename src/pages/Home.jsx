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
import { useLocation } from "react-router-dom";

const Home = () => {
  const [isRotating, setIsRotating] = useState();
  const [currentStage, setCurrentStage] = useState(1);
  const location = useLocation();

  const adjustBackground = () => {
    let screenScale = null;
    let rotation = [0.3, 2.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.1, 0.1, 0.1];
    } else {
      screenScale = [0.2, 0.2, 0.2];
    }

    return [screenScale, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [0.4, 0.4, 0.4];
      screenPosition = [0, 0.3, 4];
    }

    return [screenScale, screenPosition];
  };

  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  const [backgroundScale, backgroundRotation] = adjustBackground();

  const handlePrevStage = () => {
    setCurrentStage((prev) => (prev === 1 ? 4 : prev - 1));
  };

  const handleNextStage = () => {
    setCurrentStage((prev) => (prev === 4 ? 1 : prev + 1));
  };

  return (
    <section
      className={`w-full h-screen relative ${
        isRotating ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
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
          <Plane
            isRotating={isRotating}
            position={planePosition}
            rotation={[0, 20.1, 0]}
            scale={planeScale}
          />
          <Bird isRotating={isRotating} setIsRotating={setIsRotating} />
          <Robot
            onClick={() => location.push("/about")}
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
