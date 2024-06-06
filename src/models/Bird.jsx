/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useRotation } from "../utils/rotationUtils";
import { useFrame } from "@react-three/fiber";

import birdScene from "../assets/bird.glb";

const Bird = ({ isRotating, setIsRotating, currentStage, scaleFactor }) => {
  const groupRef = useRef();
  const birdRef = useRef();

  const adjustFoxForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [
        scaleFactor * 0.001,
        scaleFactor * 0.001,
        scaleFactor * 0.001,
      ];
      screenPosition = [0, 0.5, 0];
    } else {
      screenScale = [
        scaleFactor * 0.002,
        scaleFactor * 0.002,
        scaleFactor * 0.002,
      ];
      screenPosition = [0, 0.5, 0];
    }

    return [screenScale, screenPosition];
  };

  const [scale, position] = adjustFoxForScreenSize();

  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useFrame(({ clock, camera }) => {
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.1 + 2;

    if (birdRef.current.position.x > camera.position.x + 3) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 3) {
      birdRef.current.rotation.y = 0;
    }

    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  useEffect(() => {
    actions["Take 001"].play();
  }, [actions]);

  useRotation(isRotating, setIsRotating, groupRef);

  return (
    <group ref={groupRef}>
      <mesh ref={birdRef} position={position} scale={scale}>
        {currentStage !== 3 && <primitive object={scene} />}
      </mesh>
    </group>
  );
};

export default Bird;
