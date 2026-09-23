import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, Layers, Box, RotateCw, Sparkles } from 'lucide-react';

type VisualMode = 'wireframe' | 'product' | 'spatial';

export function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<VisualMode>('wireframe');
  const [autoRotate, setAutoRotate] = useState(true);
  const [isSupported, setIsSupported] = useState(true);

  // References for Three.js state
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const coreMeshRef = useRef<THREE.Mesh | null>(null);
  const wireMeshRef = useRef<THREE.LineSegments | null>(null);
  const pointsRef = useRef<THREE.Points | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const animFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    // Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setIsSupported(false);
      return;
    }

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xf59e0b, 2.5); // Warm amber
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x60a5fa, 2.0); // Soft cyan/blue rim
    rimLight.position.set(-5, -5, -3);
    scene.add(rimLight);

    // Master Group for mouse tilting
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);
    groupRef.current = mainGroup;

    // 1. Inner Faceted Core (Icosahedron)
    const coreGeo = new THREE.IcosahedronGeometry(1.9, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      metalness: 0.85,
      roughness: 0.25,
      flatShading: true,
      wireframe: mode === 'wireframe',
      emissive: 0x27272a,
      emissiveIntensity: 0.2,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);
    coreMeshRef.current = coreMesh;

    // 2. Outer Wireframe Cage (Torus Knot / Architectural Shell)
    const wireGeo = new THREE.TorusKnotGeometry(2.3, 0.45, 100, 16);
    const wireEdges = new THREE.WireframeGeometry(wireGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.LineSegments(wireEdges, wireMat);
    mainGroup.add(wireMesh);
    wireMeshRef.current = wireMesh;

    // 3. Floating Design Token / Code Particle Orbit
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 3.2 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);

      // Gradient between amber and clean white
      if (Math.random() > 0.4) {
        colors[i] = 0.96; // amber
        colors[i + 1] = 0.62;
        colors[i + 2] = 0.04;
      } else {
        colors[i] = 0.9;
        colors[i + 1] = 0.9;
        colors[i + 2] = 0.95;
      }
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);
    pointsRef.current = particles;

    // Mouse Interaction Handler
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = x * 0.8;
      mouseRef.current.targetY = y * 0.8;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Resize Handler
    const onResize = () => {
      if (!container || !rendererRef.current) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation (lerp)
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      if (mainGroup) {
        if (!prefersReducedMotion && autoRotate) {
          mainGroup.rotation.y += delta * 0.35;
          mainGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.15 + mouseRef.current.y * 0.4;
          mainGroup.rotation.z = mouseRef.current.x * 0.2;
        } else {
          mainGroup.rotation.y = mouseRef.current.x * 0.5;
          mainGroup.rotation.x = mouseRef.current.y * 0.5;
        }

        if (coreMeshRef.current) {
          coreMeshRef.current.rotation.x += delta * 0.2;
          coreMeshRef.current.rotation.y -= delta * 0.25;
        }

        if (wireMeshRef.current) {
          wireMeshRef.current.rotation.y += delta * 0.15;
          wireMeshRef.current.rotation.z -= delta * 0.1;
        }

        if (pointsRef.current) {
          pointsRef.current.rotation.y -= delta * 0.1;
        }
      }

      renderer.render(scene, camera);
      animFrameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      if (rendererRef.current?.domElement && container.contains(rendererRef.current.domElement)) {
        container.removeChild(rendererRef.current.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [autoRotate]);

  // Update visual mode dynamically
  useEffect(() => {
    if (!coreMeshRef.current || !wireMeshRef.current) return;

    const coreMat = coreMeshRef.current.material as THREE.MeshStandardMaterial;
    const wireMat = wireMeshRef.current.material as THREE.LineBasicMaterial;

    if (mode === 'wireframe') {
      coreMat.wireframe = true;
      coreMat.color.setHex(0x18181b);
      wireMat.color.setHex(0xf59e0b);
      wireMat.opacity = 0.5;
    } else if (mode === 'product') {
      coreMat.wireframe = false;
      coreMat.color.setHex(0x27272a);
      coreMat.metalness = 0.95;
      coreMat.roughness = 0.15;
      wireMat.color.setHex(0xffffff);
      wireMat.opacity = 0.15;
    } else if (mode === 'spatial') {
      coreMat.wireframe = false;
      coreMat.color.setHex(0x09090b);
      wireMat.color.setHex(0xf59e0b);
      wireMat.opacity = 0.7;
    }
  }, [mode]);

  if (!isSupported) return null;

  return (
    <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[580px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#121215]/80 to-[#09090b]/40 border border-white/10 flex items-center justify-center group">
      {/* Three.js canvas container */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating 3D Control HUD (Minimalist, unobtrusive) */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 pointer-events-auto">
        {/* Mode Selector */}
        <div className="flex items-center gap-1 p-1 bg-black/70 backdrop-blur-md border border-white/15 rounded-lg text-xs font-mono-custom">
          <button
            onClick={() => setMode('wireframe')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors ${
              mode === 'wireframe'
                ? 'bg-amber-400 text-black font-semibold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>01 Wireframe</span>
          </button>

          <button
            onClick={() => setMode('product')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors ${
              mode === 'product'
                ? 'bg-amber-400 text-black font-semibold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Box className="w-3 h-3" />
            <span>02 Polished UI</span>
          </button>

          <button
            onClick={() => setMode('spatial')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors ${
              mode === 'spatial'
                ? 'bg-amber-400 text-black font-semibold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3 h-3" />
            <span>03 Spatial Node</span>
          </button>
        </div>

        {/* Rotate and interaction indicator */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-black/70 backdrop-blur-md border border-white/15 rounded-lg text-[11px] font-mono-custom text-zinc-300 hover:text-white transition-colors"
            title="Toggle rotation"
          >
            <RotateCw className={`w-3 h-3 ${autoRotate ? 'animate-spin' : ''}`} />
            <span>{autoRotate ? 'Auto-Orbit' : 'Paused'}</span>
          </button>

          <span className="hidden sm:inline-block text-[11px] font-mono-custom text-zinc-500 bg-black/50 px-2 py-1 rounded border border-white/5">
            Mouse Parallax Active
          </span>
        </div>
      </div>

      {/* Top Left Watermark Badge */}
      <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-mono-custom text-zinc-400 bg-black/60 backdrop-blur-sm px-3 py-1 rounded border border-white/10">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        <span className="text-zinc-200">Interactive 3D Spatial Geometry</span>
        <span className="text-zinc-600">·</span>
        <span className="text-amber-400">Three.js / WebGL</span>
      </div>
    </div>
  );
}
