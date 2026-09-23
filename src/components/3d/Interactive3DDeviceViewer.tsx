import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ExternalLink, Rotate3d, Smartphone, Monitor, Eye, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../../data/portfolioData';

interface Interactive3DDeviceViewerProps {
  onOpenCaseStudy: (project: Project) => void;
}

export function Interactive3DDeviceViewer({ onOpenCaseStudy }: Interactive3DDeviceViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string>('aiims-haridwar');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [isRotating, setIsRotating] = useState(true);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const deviceGroupRef = useRef<THREE.Group | null>(null);
  const screenMeshRef = useRef<THREE.Mesh | null>(null);
  const texturesRef = useRef<{ [key: string]: THREE.Texture }>({});
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const animFrameIdRef = useRef<number | null>(null);

  const currentProject = PORTFOLIO_DATA.projects.find((p) => p.id === selectedProjectId) || PORTFOLIO_DATA.projects[0];

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7.5);
    cameraRef.current = camera;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);

    const backRimLight = new THREE.DirectionalLight(0xf59e0b, 3.0); // Warm amber rim
    backRimLight.position.set(-6, -4, -5);
    scene.add(backRimLight);

    // Master device group
    const deviceGroup = new THREE.Group();
    scene.add(deviceGroup);
    deviceGroupRef.current = deviceGroup;

    // Load textures for projects
    const textureLoader = new THREE.TextureLoader();
    PORTFOLIO_DATA.projects.forEach((proj) => {
      const tex = textureLoader.load(proj.image);
      tex.colorSpace = THREE.SRGBColorSpace;
      texturesRef.current[proj.id] = tex;
    });

    // 1. Device Bezel / Frame
    const frameGeo = new THREE.BoxGeometry(
      deviceMode === 'desktop' ? 5.2 : 2.5,
      deviceMode === 'desktop' ? 3.3 : 4.8,
      0.18
    );
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x1f1f23,
      metalness: 0.85,
      roughness: 0.25,
    });
    const frameMesh = new THREE.Mesh(frameGeo, frameMat);
    deviceGroup.add(frameMesh);

    // 2. Device Stand (for desktop mode)
    if (deviceMode === 'desktop') {
      const standPoleGeo = new THREE.CylinderGeometry(0.12, 0.14, 1.4, 32);
      const standMat = new THREE.MeshStandardMaterial({
        color: 0x27272a,
        metalness: 0.9,
        roughness: 0.2,
      });
      const standPole = new THREE.Mesh(standPoleGeo, standMat);
      standPole.position.set(0, -2.1, -0.1);
      deviceGroup.add(standPole);

      const baseGeo = new THREE.CylinderGeometry(1.1, 1.2, 0.08, 32);
      const baseMesh = new THREE.Mesh(baseGeo, standMat);
      baseMesh.position.set(0, -2.8, -0.1);
      deviceGroup.add(baseMesh);
    }

    // 3. Screen Face with live project image texture
    const screenGeo = new THREE.PlaneGeometry(
      deviceMode === 'desktop' ? 4.9 : 2.3,
      deviceMode === 'desktop' ? 3.0 : 4.5
    );
    const initialTexture = texturesRef.current[selectedProjectId] || null;
    const screenMat = new THREE.MeshBasicMaterial({
      map: initialTexture,
      toneMapped: false,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = 0.101;
    deviceGroup.add(screenMesh);
    screenMeshRef.current = screenMesh;

    // Mouse drag orbit controls
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !deviceGroupRef.current) return;
      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      deviceGroupRef.current.rotation.y += deltaX * 0.008;
      deviceGroupRef.current.rotation.x += deltaY * 0.008;

      // Clamp X rotation so it doesn't flip entirely upside down
      deviceGroupRef.current.rotation.x = Math.max(
        -Math.PI / 4,
        Math.min(Math.PI / 4, deviceGroupRef.current.rotation.x)
      );

      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support for mobile
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || !deviceGroupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePositionRef.current.x;
      const deltaY = e.touches[0].clientY - previousMousePositionRef.current.y;

      deviceGroupRef.current.rotation.y += deltaX * 0.01;
      deviceGroupRef.current.rotation.x += deltaY * 0.01;
      deviceGroupRef.current.rotation.x = Math.max(
        -Math.PI / 4,
        Math.min(Math.PI / 4, deviceGroupRef.current.rotation.x)
      );

      previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Resize
    const onResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      cameraRef.current.aspect = container.clientWidth / container.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', onResize);

    // Render loop
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      if (isRotating && !isDraggingRef.current && deviceGroupRef.current) {
        deviceGroupRef.current.rotation.y += delta * 0.25;
        deviceGroupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.08;
      }
      renderer.render(scene, camera);
      animFrameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onResize);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      if (rendererRef.current?.domElement && container.contains(rendererRef.current.domElement)) {
        container.removeChild(rendererRef.current.domElement);
      }
      renderer.dispose();
      frameGeo.dispose();
      frameMat.dispose();
      screenGeo.dispose();
      screenMat.dispose();
    };
  }, [deviceMode]);

  // Update texture when selected project changes
  useEffect(() => {
    if (!screenMeshRef.current) return;
    const tex = texturesRef.current[selectedProjectId];
    if (tex) {
      const mat = screenMeshRef.current.material as THREE.MeshBasicMaterial;
      mat.map = tex;
      mat.needsUpdate = true;
    }
  }, [selectedProjectId]);

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-mono-custom text-amber-400 tracking-[0.2em] uppercase block mb-3">
            Interactive WebGL Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            3D SPATIAL WORK INSPECTOR
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-xl font-light">
            Orbit, inspect device geometry in 360°, and toggle between projects and responsive form factors. Built using Three.js and custom WebGL shaders.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Device toggle */}
          <div className="flex items-center gap-1 p-1 bg-[#121215] border border-white/15 rounded-lg text-xs font-mono-custom">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
                deviceMode === 'desktop'
                  ? 'bg-amber-400 text-black font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
                deviceMode === 'mobile'
                  ? 'bg-amber-400 text-black font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>

          {/* Auto spin toggle */}
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="flex items-center gap-1.5 px-3 py-2 bg-[#121215] border border-white/15 rounded-lg text-xs font-mono-custom text-zinc-300 hover:text-white transition-colors"
          >
            <Rotate3d className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
            <span>{isRotating ? 'Orbit Active' : 'Orbit Paused'}</span>
          </button>
        </div>
      </div>

      {/* Main 3D Viewport Box */}
      <div className="relative w-full h-[450px] sm:h-[560px] lg:h-[620px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#141418] via-[#0e0e11] to-[#09090b] border border-white/10 shadow-2xl flex flex-col justify-between p-6">
        {/* Three.js Canvas */}
        <div
          ref={containerRef}
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
        />

        {/* Top Floating Project Switcher */}
        <div className="relative z-10 flex flex-wrap items-center gap-2 pointer-events-auto">
          {PORTFOLIO_DATA.projects.map((proj) => (
            <button
              key={proj.id}
              onClick={() => setSelectedProjectId(proj.id)}
              className={`px-3 py-1.5 text-xs font-mono-custom rounded-md transition-all ${
                selectedProjectId === proj.id
                  ? 'bg-amber-400 text-black font-semibold shadow-md'
                  : 'bg-black/60 backdrop-blur-md text-zinc-300 hover:text-white border border-white/10'
              }`}
            >
              <span>{proj.title}</span>
            </button>
          ))}
        </div>

        {/* Bottom Floating Information HUD */}
        <div className="relative z-10 p-4 sm:p-5 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pointer-events-auto max-w-3xl">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-custom text-amber-400 mb-1">
              <span>ACTIVE 3D INSPECTION</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-300">{currentProject.category}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-display font-bold text-white">
              {currentProject.title}
            </h3>
            <p className="text-xs text-zinc-300 mt-1 line-clamp-1 max-w-xl">
              {currentProject.tagline}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onOpenCaseStudy(currentProject)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-black bg-white hover:bg-amber-400 rounded-md transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Full Case Study</span>
            </button>

            {currentProject.link && (
              <a
                href={currentProject.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-white/10 hover:bg-white/15 rounded-md border border-white/10 transition-colors"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Top-Right Drag Hint */}
        <div className="absolute top-6 right-6 pointer-events-none hidden sm:flex items-center gap-2 text-[11px] font-mono-custom text-zinc-400 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
          <Rotate3d className="w-3.5 h-3.5 text-amber-400" />
          <span>Click & Drag to Rotate in 3D</span>
        </div>
      </div>
    </section>
  );
}
