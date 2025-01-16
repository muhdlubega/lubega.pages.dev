/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";
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
import swipe from "../assets/swipe.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [showPlane, setShowPlane] = useState(true);
  const [currentStage, setCurrentStage] = useState(1);
  const [scaleFactor, setScaleFactor] = useState(1);
  const [positionFactor, setPositionFactor] = useState(1);
  const [showSwipeOverlay, setShowSwipeOverlay] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowSwipeOverlay(true);
      localStorage.setItem("hasVisited", "true");
    } else {
      setShowSwipeOverlay(false);
    }

    const timer = setTimeout(() => {
      setShowSwipeOverlay(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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

  const handleCanvasClick = (event) => {
    const { clientX: x, clientY: y } = event;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const centerRadius = Math.min(screenWidth, screenHeight) * 0.1;
    const centerX = screenWidth / 2;
    const centerY = screenHeight / 2;

    const distance = Math.sqrt(
      Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
    );

    if (distance <= centerRadius) {
      if (currentStage === 2) {
        navigate("/projects");
      } else if (currentStage === 3) {
        navigate("/contact");
      } else if (currentStage === 4) {
        navigate("/about");
      }
    }
  };

  return (
    <section className="w-full h-screen relative">
      {showSwipeOverlay && (
        <div className="absolute backdrop-blur-md inset-0 z-20 flex flex-col text-center items-center justify-center bg-black bg-opacity-60">
          <img src={swipe} alt="Swipe" className="w-96" />
          <p className="text-white text-4xl mx-4 font-semibold">
            Swipe left and right to interact with the characters
          </p>
        </div>
      )}
      <div className="z-10 w-full">
        <div className="absolute bottom-6 left-0 right-0 z-10 flex items-center justify-center">
          {currentStage && <Modal currentStage={currentStage} />}
        </div>
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
        camera={{ near: 0.1, far: 1000 }}
        onClickCapture={(event) => {
          handleCanvasClick(event);
        }}
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
          <Bird
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            scaleFactor={scaleFactor}
            currentStage={currentStage}
          />
          <Fox
            rotation={backgroundRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            scaleFactor={scaleFactor}
            positionFactor={positionFactor}
            currentStage={currentStage}
          />
          <Robot
            rotation={backgroundRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            scaleFactor={scaleFactor}
            positionFactor={positionFactor}
            currentStage={currentStage}
          />
          <Cactus
            rotation={backgroundRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            scaleFactor={scaleFactor}
            currentStage={currentStage}
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
