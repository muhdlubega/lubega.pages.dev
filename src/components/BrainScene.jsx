/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Center, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import brainModel from "../assets/brain.glb";

const Brain = ({ progressRef }) => {
  const group = useRef();
  const positionInitialized = useRef(false);
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
        if (node.material.color) {
          node.material.color.set("#c7cfcd");
        }
        if (node.material.emissive) {
          node.material.emissive.set("#08262a");
          node.material.emissiveIntensity = 0.04;
        }
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
    const isMobile = viewport.width < 5;
    const baseScale = isMobile ? 1.55 : 2.15;
    const maxScale = (baseScale + (isMobile ? 2.5 : 4.8)) * 2;
    const targetScale = THREE.MathUtils.lerp(baseScale, maxScale, progress);
    const targetX = isMobile ? 0 : viewport.width * 0.095 * (1 - progress);

    if (!positionInitialized.current) {
      group.current.position.x = targetX;
      positionInitialized.current = true;
    } else {
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, targetX, Math.min(delta * 2.2, 1));
    }
    group.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), Math.min(delta * 2.2, 1));
    if (!reduced) {
      group.current.rotation.y += delta * THREE.MathUtils.lerp(0.11, 0.025, progress);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -0.08 + progress * 0.42, delta * 1.4);
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, progress * -0.22, delta * 1.4);
    }
  });

  return <group ref={group}><Center><primitive object={brain} /></Center></group>;
};

const BrainScene = ({ progressRef }) => (
  <div className="brain-canvas" aria-hidden="true">
    <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 7], fov: 34 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.5} color="#b8edf0" />
      <directionalLight position={[-4, 5, 6]} intensity={3.1} color="#e4ffff" />
      <pointLight position={[4, 1, 3]} intensity={15} distance={12} color="#9cff23" />
      <pointLight position={[-4, -2, 2]} intensity={13} distance={10} color="#ff27c3" />
      <Suspense fallback={null}><Brain progressRef={progressRef} /></Suspense>
    </Canvas>
  </div>
);

useGLTF.preload(brainModel);
export default BrainScene;
