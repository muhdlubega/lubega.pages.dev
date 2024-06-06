/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { animated } from "@react-spring/three";
import { useRotation } from "../utils/rotationUtils";

import backgroundScene from "../assets/background.glb";
import { useFrame } from "@react-three/fiber";

const Background = ({
  isRotating,
  setIsRotating,
  setCurrentStage,
  setScaleFactor,
  positionFactor,
  setPositionFactor,
  setShowPlane,
  ...props
}) => {
  const backgroundRef = useRef();
  const rotationSpeed = useRef(0);
  const { scene } = useGLTF(backgroundScene);

  useRotation(isRotating, setIsRotating, backgroundRef);
  const dampingFactor = 0.1;

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      backgroundRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = backgroundRef.current.rotation.y;

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      switch (true) {
        case normalizedRotation >= 4.7 && normalizedRotation <= 5.1:
          setCurrentStage(4);
          setScaleFactor(2);
          setPositionFactor(window.innerWidth < 768 ? 1.2 : 3);
          setShowPlane(false);
          break;
        case normalizedRotation >= 5.7 && normalizedRotation <= 6.1:
          setCurrentStage(3);
          setScaleFactor(4);
          setPositionFactor(2);
          setShowPlane(false);
          break;
        case normalizedRotation >= 1.5 && normalizedRotation <= 1.7:
          setCurrentStage(2);
          setScaleFactor(window.innerWidth < 768 ? 2.2 : 1.5);
          setPositionFactor(1.2);
          setShowPlane(false);
          break;
        case normalizedRotation >= 2.6 && normalizedRotation <= 3.2:
          setCurrentStage(1);
          setPositionFactor(1);
          setShowPlane(true);
          break;
        default:
          setCurrentStage(null);
          setScaleFactor(1);
          setPositionFactor(1);
          setShowPlane(true);
      }
    }
  });

  return (
    <animated.group
      {...props}
      ref={backgroundRef}
      position={[0, positionFactor * -0.7, positionFactor * -1]}
    >
      <mesh>
        <primitive object={scene} />
      </mesh>
    </animated.group>
  );
};

export default Background;
