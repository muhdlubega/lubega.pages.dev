import { useThree } from "@react-three/fiber";
import { useRef, useEffect, useCallback } from "react";

export const useRotation = (isRotating, setIsRotating, groupRef) => {
  const { gl, viewport } = useThree();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);

  const handlePointerDown = useCallback(
    (event) => {
      event.stopPropagation();
      event.preventDefault();
      setIsRotating(true);
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      lastX.current = clientX;
    },
    [setIsRotating]
  );

  const handlePointerUp = useCallback(
    (event) => {
      event.stopPropagation();
      event.preventDefault();
      setIsRotating(false);
    },
    [setIsRotating]
  );

  const handlePointerMove = useCallback(
    (event) => {
      event.stopPropagation();
      event.preventDefault();
      if (isRotating) {
        const clientX = event.touches
          ? event.touches[0].clientX
          : event.clientX;
        const delta = (clientX - lastX.current) / viewport.width;
        groupRef.current.rotation.y += delta * 0.01 * Math.PI;
        lastX.current = clientX;
        rotationSpeed.current = delta * 0.01 * Math.PI;
      }
    },
    [groupRef, isRotating, viewport.width]
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        if (!isRotating) setIsRotating(true);
        groupRef.current.rotation.y += 0.005 * Math.PI;
        rotationSpeed.current = 3;
      } else if (event.key === "ArrowRight") {
        if (!isRotating) setIsRotating(true);
        groupRef.current.rotation.y -= 0.005 * Math.PI;
        rotationSpeed.current = -3;
      }
    },
    [groupRef, isRotating, setIsRotating]
  );

  const handleKeyUp = useCallback(
    (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        setIsRotating(false);
      }
    },
    [setIsRotating]
  );

  const handleTouchStart = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(true);
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      lastX.current = clientX;
    },
    [setIsRotating]
  );

  const handleTouchEnd = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(false);
    },
    [setIsRotating]
  );

  const handleTouchMove = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (isRotating) {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const delta = (clientX - lastX.current) / viewport.width;
        groupRef.current.rotation.y += delta * 0.01 * Math.PI;
        lastX.current = clientX;
        rotationSpeed.current = delta * 0.01 * Math.PI;
      }
    },
    [groupRef, isRotating, viewport.width]
  );

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchmove", handleTouchMove);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [
    gl,
    handlePointerDown,
    handlePointerUp,
    handlePointerMove,
    handleKeyDown,
    handleKeyUp,
    handleTouchStart,
    handleTouchEnd,
    handleTouchMove,
  ]);
};
