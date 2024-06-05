/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useRotation } from "../utils/rotationUtils";

import robotScene from "../assets/robot.glb";

const Robot = ({
  isRotating,
  setIsRotating,
  scaleFactor,
  currentStage,
  ...props
}) => {
  const groupRef = useRef();
  const robotRef = useRef();

  const adjustRobotForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [scaleFactor * 0.5, scaleFactor * 0.5, scaleFactor * 0.5];
      screenPosition = currentStage === 4 ? [2.6, 0.5, 0.4] : [1.35, 0, 0.2];
    } else {
      screenScale = [scaleFactor * 0.9, scaleFactor * 0.9, scaleFactor * 0.9];
      screenPosition = currentStage === 4 ? [3, 0, 0.4] : [2, 0.4, 0.2];
    }

    return [screenScale, screenPosition];
  };

  const [scale, position] = adjustRobotForScreenSize();

  const { scene, animations } = useGLTF(robotScene);
  const { actions } = useAnimations(animations, robotRef);

  useEffect(() => {
    actions["Scene"].play();
  }, [actions]);

  useRotation(isRotating, setIsRotating, groupRef);

  return (
    <group {...props} ref={groupRef}>
      <mesh ref={robotRef} position={position} scale={scale}>
        {currentStage !== 3 && (
          <primitive rotation={[0, Math.PI / 2.5, 0]} object={scene} />
        )}
      </mesh>
    </group>
  );
};

export default Robot;
