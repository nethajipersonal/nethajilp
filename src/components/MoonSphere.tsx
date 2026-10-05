"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type MoonSphereProps = {
  /** World-unit sphere radius; bigger = more of the frame filled. */
  radius?: number;
  /** Vertical offset of the sphere within its own frame (world units). */
  verticalOffset?: number;
};

export function MoonSphere({
  radius = 1.35,
  verticalOffset = 0.35,
}: MoonSphereProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 4.4);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      // Reporting a failed imperative WebGL context creation, not deriving state from props.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setWebglFailed(true);
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.cursor = "grab";
    renderer.domElement.style.touchAction = "none";

    const moonGroup = new THREE.Group();
    moonGroup.position.set(0, verticalOffset, 0);
    scene.add(moonGroup);

    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("/textures/moon.jpg");
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = maxAnisotropy;
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;

    const bumpTexture = textureLoader.load("/textures/moon.jpg");
    bumpTexture.anisotropy = maxAnisotropy;
    bumpTexture.generateMipmaps = false;
    bumpTexture.minFilter = THREE.LinearFilter;

    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(radius, 96, 96),
      new THREE.MeshStandardMaterial({
        map: texture,
        bumpMap: bumpTexture,
        bumpScale: 0.04,
        roughness: 0.94,
        metalness: 0,
      }),
    );
    moonGroup.add(moon);

    scene.add(new THREE.AmbientLight(0xffffff, 0.75));
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
    keyLight.position.set(-3, 1.5, 2.5);
    scene.add(keyLight);
    const fillLight = new THREE.DirectionalLight(0xdce6ff, 0.35);
    fillLight.position.set(3, -0.5, 1.5);
    scene.add(fillLight);

    let rotationY = 0.4;
    let rotationX = -0.1;
    let velocityY = 0;
    let velocityX = 0;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;

    const onPointerDown = (event: PointerEvent) => {
      dragging = true;
      lastX = event.clientX;
      lastY = event.clientY;
      velocityX = 0;
      velocityY = 0;
      renderer.domElement.style.cursor = "grabbing";
      renderer.domElement.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const deltaX = event.clientX - lastX;
      const deltaY = event.clientY - lastY;
      lastX = event.clientX;
      lastY = event.clientY;
      velocityY = deltaX * 0.006;
      velocityX = deltaY * 0.006;
      rotationY += velocityY;
      rotationX = Math.max(-1.1, Math.min(1.1, rotationX + velocityX));
    };

    const onPointerUp = (event: PointerEvent) => {
      dragging = false;
      renderer.domElement.style.cursor = "grab";
      try {
        renderer.domElement.releasePointerCapture(event.pointerId);
      } catch {
        // pointer capture may already be released
      }
    };

    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    renderer.domElement.addEventListener("pointermove", onPointerMove);
    renderer.domElement.addEventListener("pointerup", onPointerUp);
    renderer.domElement.addEventListener("pointercancel", onPointerUp);

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      if (clientWidth === 0 || clientHeight === 0) return;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    let frameId = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      if (!dragging) {
        // gentle momentum decay; comes to rest instead of auto-rotating on its own
        velocityY *= 0.94;
        velocityX *= 0.94;
        rotationY += velocityY;
        rotationX = Math.max(-1.1, Math.min(1.1, rotationX + velocityX));
      }

      moonGroup.rotation.y = rotationY;
      moonGroup.rotation.x = rotationX;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("pointerup", onPointerUp);
      renderer.domElement.removeEventListener("pointercancel", onPointerUp);
      container.removeChild(renderer.domElement);
      moon.geometry.dispose();
      (moon.material as THREE.Material).dispose();
      texture.dispose();
      bumpTexture.dispose();
      renderer.dispose();
    };
  }, [radius, verticalOffset]);

  if (webglFailed) {
    return (
      <div className="absolute inset-0 flex items-start justify-center overflow-hidden">
        <Image
          src="/moon.png"
          alt=""
          width={1278}
          height={1230}
          className="w-[85%] max-w-none"
        />
      </div>
    );
  }

  return <div ref={containerRef} className="absolute inset-0" />;
}
