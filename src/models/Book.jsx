/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useRotation } from "../utils/rotationUtils";

import bookScene from "../assets/book.glb";

const Book = ({ isRotating, setIsRotating }) => {
  const groupRef = useRef();
  const bookRef = useRef();

  const { scene, animations } = useGLTF(bookScene);
  const { actions } = useAnimations(animations, bookRef);

  useEffect(() => {
    actions["Scene"].play();
  }, [actions]);

  useRotation(isRotating, setIsRotating, groupRef);

  return (
    <group ref={groupRef}>
      <mesh
        ref={bookRef}
        position={[1, -0, 1]}
        scale={[0.0009, 0.0009, 0.0009]}
      >
        <primitive rotation={[0, Math.PI / 5, 0]} object={scene} />
      </mesh>
    </group>
  );
};

export default Book;
