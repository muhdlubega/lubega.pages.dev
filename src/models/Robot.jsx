/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useRotation } from "../utils/rotationUtils";

import robotScene from "../assets/robot.glb";

const Robot = ({ isRotating, setIsRotating, ...props }) => {
  const groupRef = useRef();
  const robotRef = useRef();

  const { scene, animations } = useGLTF(robotScene);
  const { actions } = useAnimations(animations, robotRef);

  useEffect(() => {
    actions["Scene"].play();
  }, [actions]);

  useRotation(isRotating, setIsRotating, groupRef);

  return (
    <group {...props} ref={groupRef}>
      <mesh ref={robotRef} position={[2, 0.4, 0.2]} scale={[0.9, 0.9, 0.9]}>
        <primitive rotation={[0, Math.PI / 3, 0]} object={scene} />
      </mesh>
    </group>
  );
};

export default Robot;
