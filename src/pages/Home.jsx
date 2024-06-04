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
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [showPlane, setShowPlane] = useState(true);
  const [currentStage, setCurrentStage] = useState(1);
  const [scaleFactor, setScaleFactor] = useState(1);
  const [positionFactor, setPositionFactor] = useState(1);

  const adjustBackground = () => {
    let screenScale = null;
    let rotation = [0.3, 2.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [
        scaleFactor * 0.12,
        scaleFactor * 0.12,
        scaleFactor * 0.12,
      ];
    } else {
      screenScale = [scaleFactor * 0.2, scaleFactor * 0.2, scaleFactor * 0.2];
    }

    return [screenScale, rotation];
  };

  const [backgroundScale, backgroundRotation] = adjustBackground();

  const handleRotateLeft = () => {};

  const handleRotateRight = () => {};

  return (
    <section className="w-full h-screen relative">
      <div className="z-10 w-full">
        <div className="absolute top-1/2 left-4 z-10">
          <button
            onClick={handleRotateLeft}
            className="bg-transparent p-2 rounded-full hover:bg-teal-500"
          >
            <FaChevronCircleLeft color="white" size={28} />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 z-10">
          <button
            onClick={handleRotateRight}
            className="bg-transparent p-2 rounded-full hover:bg-teal-500"
          >
            <FaChevronCircleRight color="white" size={28} />
          </button>
        </div>
        <div className="absolute bottom-6 left-0 right-0 z-10 flex items-center justify-center">
          {currentStage && <Modal currentStage={currentStage} />}
        </div>
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
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
          {showPlane && <Plane isRotating={isRotating} />}
          <Bird isRotating={isRotating} setIsRotating={setIsRotating} />
          <Robot
            rotation={backgroundRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            scaleFactor={scaleFactor}
            positionFactor={positionFactor}
            currentStage={currentStage}
          />
          <Fox
            rotation={backgroundRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            scaleFactor={scaleFactor}
            positionFactor={positionFactor}
          />
          <Cactus
            rotation={backgroundRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            scaleFactor={scaleFactor}
            positionFactor={positionFactor}
          />
          <Sky isRotating={isRotating} />
          <Background
            scale={backgroundScale}
            rotation={backgroundRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            currentStage={currentStage}
            setShowPlane={setShowPlane}
            setScaleFactor={setScaleFactor}
            setPositionFactor={setPositionFactor}
            positionFactor={positionFactor}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
