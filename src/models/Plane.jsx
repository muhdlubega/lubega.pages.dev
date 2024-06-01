/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/plane.glb";

const Plane = ({ ...props }) => {
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.8, 0.8, 0.8];
      screenPosition = [0, 1, 2];
    } else {
      screenScale = [0.4, 0.4, 0.4];
      screenPosition = [0, 0.3, 4];
    }

    return [screenScale, screenPosition];
  };

  const [scale, position] = adjustPlaneForScreenSize();

  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["Take 001"].play();
  }, [actions]);

  return (
    <mesh
      {...props}
      rotation={[0, 20.1, 0]}
      position={position}
      scale={scale}
      ref={ref}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
