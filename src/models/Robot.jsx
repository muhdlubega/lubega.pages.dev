/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useRotation } from "../utils/rotationUtils";

import robotScene from "../assets/robot.glb";

const Robot = ({ isRotating, setIsRotating, ...props }) => {
  const groupRef = useRef();
  const robotRef = useRef();

  const adjustRobotForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [1.35, 0, 0.2];
    } else {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [2, 0.4, 0.2];
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
        <primitive rotation={[0, Math.PI / 3, 0]} object={scene} />
      </mesh>
    </group>
  );
};

export default Robot;
