"use client";

import { useEffect, useRef } from "react";
import type * as THREE_TYPES from "three";

type FloatingGeometryProps = {
  shape?: "torus" | "icosahedron" | "octahedron" | "dodecahedron";
  color?: string;
  wireframe?: boolean;
  size?: number;
  speed?: number;
  className?: string;
};

export function FloatingGeometry({
  shape = "icosahedron",
  color = "#a855f7",
  wireframe = true,
  size = 120,
  speed = 1,
  className,
}: FloatingGeometryProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let THREE: typeof import("three");
    let frameId = 0;
    let renderer: import("three").WebGLRenderer;
    let cleanup = () => {};

    const init = async () => {
      THREE = await import("three");
      const container = containerRef.current;
      if (!container) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.z = 3.5;

      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      } catch {
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(size, size);
      container.appendChild(renderer.domElement);

      const colorObj = new THREE.Color(color);
      const material = wireframe
        ? new THREE.MeshBasicMaterial({ color: colorObj, wireframe: true, opacity: 0.6, transparent: true })
        : new THREE.MeshStandardMaterial({ color: colorObj, roughness: 0.3, metalness: 0.7 });

      let geometry: THREE_TYPES.BufferGeometry;
      switch (shape) {
        case "torus":
          geometry = new THREE.TorusGeometry(0.8, 0.28, 16, 40);
          break;
        case "octahedron":
          geometry = new THREE.OctahedronGeometry(1.0);
          break;
        case "dodecahedron":
          geometry = new THREE.DodecahedronGeometry(0.95);
          break;
        case "icosahedron":
        default:
          geometry = new THREE.IcosahedronGeometry(1.0, 0);
          break;
      }

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      if (!wireframe) {
        scene.add(new THREE.AmbientLight(0xffffff, 0.6));
        const light = new THREE.PointLight(colorObj, 2, 10);
        light.position.set(2, 2, 2);
        scene.add(light);
      }

      const animate = () => {
        frameId = requestAnimationFrame(animate);
        const t = performance.now() * 0.001 * speed;
        mesh.rotation.x = t * 0.4;
        mesh.rotation.y = t * 0.6;
        renderer.render(scene, camera);
      };
      animate();

      cleanup = () => {
        cancelAnimationFrame(frameId);
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        geometry.dispose();
        (material as THREE_TYPES.Material).dispose();
        renderer.dispose();
      };
    };

    init();

    return () => cleanup();
  }, [shape, color, wireframe, size, speed]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
