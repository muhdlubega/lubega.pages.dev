/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useRotation } from "../utils/rotationUtils";

import cactusScene from "../assets/cactus.glb";

const Cactus = ({
  isRotating,
  setIsRotating,
  scaleFactor,
  currentStage,
  ...props
}) => {
  const groupRef = useRef();
  const cactusRef = useRef();

  const adjustCactusForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [scaleFactor * 0.5, scaleFactor * 0.5, scaleFactor * 0.5];
      screenPosition =
        currentStage === 2 ? [-4.1, 0.8, -0.16] : [-1.9, 0.05, -0.066];
    } else {
      screenScale = [scaleFactor * 1, scaleFactor * 1, scaleFactor * 1];
      screenPosition =
        currentStage === 2 ? [-4.3, 0.8, -0.1] : [-3.15, 0.5, -0.1];
    }

    return [screenScale, screenPosition];
  };

  const [scale, position] = adjustCactusForScreenSize();

  const { scene, animations } = useGLTF(cactusScene);
  const { actions } = useAnimations(animations, cactusRef);

  useEffect(() => {
    actions["ArmatureAction"].play();
  }, [actions]);

  useRotation(isRotating, setIsRotating, groupRef);

  return (
    <group {...props} ref={groupRef}>
      <mesh ref={cactusRef} position={position} scale={scale}>
        {currentStage !== 3 && (
          <primitive rotation={[0, 1.6 * Math.PI, 0]} object={scene} />
        )}
      </mesh>
    </group>
  );
};

export default Cactus;
