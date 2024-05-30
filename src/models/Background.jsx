/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated, a } from "@react-spring/three";
import { useRotation } from "../utils/rotationUtils";

import backgroundScene from "../assets/background.glb";
import { useFrame } from "@react-three/fiber";

const Background = ({
  isRotating,
  setIsRotating,
  setCurrentStage,
  currentStage,
  ...props
}) => {
  const backgroundRef = useRef();

  const rotationSpeed = useRef(0);
  const dampingFactor = 0.1;

  const { nodes, materials } = useGLTF(backgroundScene);

  // const { rotation } = useSpring({
  //   rotation: [0, (currentStage - 1) * (Math.PI / 2), 0],
  //   config: { tension: 200, friction: 30 },
  // });

  useRotation(isRotating, setIsRotating, backgroundRef);

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
        case normalizedRotation >= 4.5 && normalizedRotation <= 5:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 5.5 && normalizedRotation <= 6.2:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 0.9 && normalizedRotation <= 1.5:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 2.6 && normalizedRotation <= 3.2:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return (
    <animated.group
      {...props}
      ref={backgroundRef}
      position={[0, -0.7, -1]}
      // rotation={rotation}
    >
      <a.group rotation={[Math.PI / 2, 0, -Math.PI]}>
        <a.group rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <a.group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              geometry={nodes.characters_STONE_a_0.geometry}
              material={materials.STONE_a}
            />
            <mesh
              geometry={nodes.characters_STONE_a_0_1.geometry}
              material={materials.STONE_a}
            />
          </a.group>
          <a.group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              geometry={nodes.characters007_bush_0.geometry}
              material={materials.bush}
            />
            <mesh
              geometry={nodes.characters007_bush_0_1.geometry}
              material={materials.bush}
            />
          </a.group>
          <mesh
            geometry={nodes.characters001_charcters_0.geometry}
            material={materials.charcters}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters002_watermill_0.geometry}
            material={materials.watermill}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters003_terrain_left_0.geometry}
            material={materials.terrain_left}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters004_house_0.geometry}
            material={materials.house}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters005_bridge_0.geometry}
            material={materials.bridge}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters006_tree_0.geometry}
            material={materials.tree}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters008_water_0.geometry}
            material={materials.water}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters009_terrain_right_0.geometry}
            material={materials.terrain_right}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters010_wheat_0.geometry}
            material={materials.wheat}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
        </a.group>
      </a.group>
    </animated.group>
  );
};

export default Background;
