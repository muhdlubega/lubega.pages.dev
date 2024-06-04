/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useRotation } from "../utils/rotationUtils";

import foxScene from "../assets/fox.glb";

const Fox = ({
  isRotating,
  setIsRotating,
  scaleFactor,
  positionFactor,
  ...props
}) => {
  const groupRef = useRef();
  const foxRef = useRef();

  const adjustFoxForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [scaleFactor * 0.1, scaleFactor * 0.1, scaleFactor * 0.1];
      screenPosition = [0.4, -0.5, 0.6];
    } else {
      screenScale = [scaleFactor * 0.2, scaleFactor * 0.2, scaleFactor * 0.2];
      screenPosition = [0.5, -0.6, 0.8];
    }

    return [screenScale, screenPosition];
  };

  const [scale, position] = adjustFoxForScreenSize();

  const { scene, animations } = useGLTF(foxScene);
  const { actions } = useAnimations(animations, foxRef);

  useEffect(() => {
    actions["Animation"].play();
  }, [actions]);

  useRotation(isRotating, setIsRotating, groupRef);

  return (
    <group {...props} ref={groupRef}>
      <mesh ref={foxRef} position={position} scale={scale}>
        <primitive rotation={[0, 2 * Math.PI, 0]} object={scene} />
      </mesh>
    </group>
  );
};

export default Fox;
