/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Center, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import brainModel from "../assets/brain.glb";

const Brain = ({ progressRef }) => {
  const group = useRef();
  const { scene } = useGLTF(brainModel);
  const { viewport } = useThree();
  const brain = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    brain.traverse((node) => {
      if (!node.isMesh) return;
      node.castShadow = true;
      node.receiveShadow = true;
      if (node.material) {
        node.material = node.material.clone();
        node.material.roughness = 0.42;
        node.material.metalness = 0.18;
        node.material.envMapIntensity = 1.4;
      }
    });
  }, [brain]);

  useFrame((_, delta) => {
    if (!group.current) return;
    const progress = progressRef.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targetScale = (viewport.width < 5 ? 1.55 : 2.15) + progress * (viewport.width < 5 ? 2.5 : 4.8);
    group.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), Math.min(delta * 2.2, 1));
    if (!reduced) {
      group.current.rotation.y += delta * (0.11 + progress * 0.18);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -0.08 + progress * 0.42, delta * 1.4);
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, progress * -0.22, delta * 1.4);
    }
  });

  return <group ref={group}><Center><primitive object={brain} /></Center></group>;
};

const BrainScene = ({ progressRef }) => (
  <div className="brain-canvas" aria-hidden="true">
    <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 7], fov: 34 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.55} color="#73efff" />
      <directionalLight position={[-4, 5, 6]} intensity={3.4} color="#d4fbff" />
      <pointLight position={[4, 1, 3]} intensity={12} distance={12} color="#a5ff38" />
      <pointLight position={[-4, -2, 2]} intensity={9} distance={10} color="#ff39ca" />
      <Suspense fallback={null}><Brain progressRef={progressRef} /></Suspense>
    </Canvas>
  </div>
);

useGLTF.preload(brainModel);
export default BrainScene;
