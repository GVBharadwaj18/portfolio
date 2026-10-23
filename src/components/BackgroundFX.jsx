import { useEffect, useRef } from "react";
import * as THREE from "three";

export const BackgroundFX = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = "";

    // --- Scene, Camera & Renderer Setup ---
    const scene = new THREE.Scene();

    const checkIsDark = () => document.documentElement.classList.contains("dark");
    let isDark = checkIsDark();

    // Atmospheric Fog so geometries and terrain fade seamlessly into infinity
    scene.fog = new THREE.FogExp2(isDark ? 0x060713 : 0xf8fafc, 0.016);

    const camera = new THREE.PerspectiveCamera(
      58,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 28);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // --- Dynamic Theme Colors ---
    const getColors = (dark) => ({
      wireframe: dark ? 0x8b5cf6 : 0x6366f1, // electric violet
      wireframeSecondary: dark ? 0x06b6d4 : 0x0284c7, // neon cyan
      wireframeAccent: dark ? 0xf43f5e : 0xe11d48, // neon rose
      wireframeGold: dark ? 0xf59e0b : 0xd97706, // amber gold
      points: dark ? 0x38bdf8 : 0x4f46e5, // sky / indigo
      ambient: dark ? 0x1e1b4b : 0xe0e7ff,
      pointLight1: dark ? 0x06b6d4 : 0x6366f1,
      pointLight2: dark ? 0xd946ef : 0xec4899,
      gridOpacity: dark ? 0.42 : 0.25,
      polyOpacity: dark ? 0.72 : 0.52,
      pointsOpacity: dark ? 0.85 : 0.65,
      fogColor: dark ? 0x060713 : 0xf8fafc,
    });

    let colors = getColors(isDark);

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight(colors.ambient, isDark ? 1.6 : 2.0);
    scene.add(ambientLight);

    const mouseLight = new THREE.PointLight(colors.pointLight1, 4.5, 60);
    mouseLight.position.set(0, 5, 16);
    scene.add(mouseLight);

    const secondaryLight = new THREE.PointLight(colors.pointLight2, 3.5, 50);
    secondaryLight.position.set(12, 12, 10);
    scene.add(secondaryLight);

    // --- 1. 3D INTERACTIVE CYBERNETIC WAVE TERRAIN ---
    const gridWidth = 84;
    const gridDepth = 64;
    const gridCols = 56;
    const gridRows = 46;

    const terrainGeometry = new THREE.PlaneGeometry(
      gridWidth,
      gridDepth,
      gridCols,
      gridRows
    );
    // Rotate to lie horizontally like a 3D digital floor
    terrainGeometry.rotateX(-Math.PI / 2.3);
    terrainGeometry.translate(0, -9.5, -4);

    const posAttr = terrainGeometry.attributes.position;
    const basePositions = posAttr.array.slice();

    const terrainMaterial = new THREE.MeshBasicMaterial({
      color: colors.wireframe,
      wireframe: true,
      transparent: true,
      opacity: colors.gridOpacity,
      fog: true,
    });
    const terrainMesh = new THREE.Mesh(terrainGeometry, terrainMaterial);
    scene.add(terrainMesh);

    // Glowing Node Points at terrain vertices
    const createCircleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.3, "rgba(139, 92, 246, 0.85)");
      gradient.addColorStop(0.7, "rgba(6, 182, 212, 0.45)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(32, 32, 30, 0, Math.PI * 2);
      ctx.fill();
      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    const pointTexture = createCircleTexture();

    const pointsMaterial = new THREE.PointsMaterial({
      color: colors.points,
      size: 0.36,
      map: pointTexture,
      transparent: true,
      opacity: colors.pointsOpacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: true,
    });
    const terrainPoints = new THREE.Points(terrainGeometry, pointsMaterial);
    scene.add(terrainPoints);

    // --- 2. FLOATING 3D HIGH-TECH GEOMETRIC ARTIFACTS ---


    // Artifact 2: 3D Dual-Layer Icosahedron (Hero Left zone)
    const icosaGeo = new THREE.IcosahedronGeometry(2.6, 1);
    const icosaMat = new THREE.MeshStandardMaterial({
      color: colors.wireframe,
      wireframe: true,
      transparent: true,
      opacity: colors.polyOpacity,
      emissive: colors.wireframe,
      emissiveIntensity: 0.4,
    });
    const icosahedron = new THREE.Mesh(icosaGeo, icosaMat);
    icosahedron.position.set(-17, 1, -4);

    // Inner glowing crystal core inside Icosahedron
    const coreGeo = new THREE.OctahedronGeometry(1.5, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: colors.wireframeAccent,
      wireframe: true,
      transparent: true,
      opacity: colors.polyOpacity * 0.9,
    });
    const innerCore = new THREE.Mesh(coreGeo, coreMat);
    icosahedron.add(innerCore);
    scene.add(icosahedron);

    // Artifact 3: 3D Dodecahedron (High Left float)
    const dodecaGeo = new THREE.DodecahedronGeometry(1.7, 0);
    const dodecaMat = new THREE.MeshStandardMaterial({
      color: colors.wireframeSecondary,
      wireframe: true,
      transparent: true,
      opacity: colors.polyOpacity * 0.8,
      emissive: colors.wireframeSecondary,
      emissiveIntensity: 0.3,
    });
    const dodecahedron = new THREE.Mesh(dodecaGeo, dodecaMat);
    dodecahedron.position.set(-14, 13, -12);
    scene.add(dodecahedron);

    // Artifact 4: 3D Gyroscopic Orbital Core (Mid-Page / About & Education zone)
    const gyroGroup = new THREE.Group();
    gyroGroup.position.set(16, -16, -6);

    const gyroRingGeo1 = new THREE.TorusGeometry(3.2, 0.08, 16, 80);
    const gyroRingMat1 = new THREE.MeshStandardMaterial({
      color: colors.wireframeSecondary,
      wireframe: true,
      transparent: true,
      opacity: colors.polyOpacity * 0.85,
      emissive: colors.wireframeSecondary,
      emissiveIntensity: 0.3,
    });
    const gyroRing1 = new THREE.Mesh(gyroRingGeo1, gyroRingMat1);
    gyroGroup.add(gyroRing1);

    const gyroRingGeo2 = new THREE.TorusGeometry(2.4, 0.08, 16, 70);
    const gyroRingMat2 = new THREE.MeshStandardMaterial({
      color: colors.wireframe,
      wireframe: true,
      transparent: true,
      opacity: colors.polyOpacity * 0.85,
      emissive: colors.wireframe,
      emissiveIntensity: 0.3,
    });
    const gyroRing2 = new THREE.Mesh(gyroRingGeo2, gyroRingMat2);
    gyroRing2.rotation.x = Math.PI / 3;
    gyroGroup.add(gyroRing2);

    const gyroCoreGeo = new THREE.IcosahedronGeometry(1.3, 0);
    const gyroCoreMat = new THREE.MeshBasicMaterial({
      color: colors.wireframeGold,
      wireframe: true,
      transparent: true,
      opacity: colors.polyOpacity * 0.9,
    });
    const gyroCore = new THREE.Mesh(gyroCoreGeo, gyroCoreMat);
    gyroGroup.add(gyroCore);
    scene.add(gyroGroup);

    // Artifact 5: 3D Floating Crystal Prism (Lower Page / Projects zone)
    const prismGroup = new THREE.Group();
    prismGroup.position.set(-16, -26, -5);

    const octaGeo = new THREE.OctahedronGeometry(2.3, 0);
    const octaMat = new THREE.MeshStandardMaterial({
      color: colors.wireframeAccent,
      wireframe: true,
      transparent: true,
      opacity: colors.polyOpacity * 0.85,
      emissive: colors.wireframeAccent,
      emissiveIntensity: 0.35,
    });
    const octahedron = new THREE.Mesh(octaGeo, octaMat);
    prismGroup.add(octahedron);
    scene.add(prismGroup);

    // Artifact 6: 3D Deep Matrix Polyhedron (Contact zone)
    const matrixGeo = new THREE.DodecahedronGeometry(2.2, 0);
    const matrixMat = new THREE.MeshStandardMaterial({
      color: colors.wireframeSecondary,
      wireframe: true,
      transparent: true,
      opacity: colors.polyOpacity * 0.85,
      emissive: colors.wireframeSecondary,
      emissiveIntensity: 0.3,
    });
    const matrixPoly = new THREE.Mesh(matrixGeo, matrixMat);
    matrixPoly.position.set(15, -36, -6);
    scene.add(matrixPoly);

    // Polyhedra animation controllers
    const animatedItems = [
      { mesh: icosahedron, rotX: -0.01, rotY: 0.007, rotZ: -0.004, floatSpeed: 1.1, basePosY: 1 },
      { mesh: dodecahedron, rotX: 0.006, rotY: -0.009, rotZ: 0.008, floatSpeed: 0.9, basePosY: 13 },
      { mesh: gyroRing1, rotX: 0.015, rotY: 0.02, rotZ: 0.005, floatSpeed: 0.7, basePosY: 0 },
      { mesh: gyroRing2, rotX: -0.02, rotY: 0.01, rotZ: -0.015, floatSpeed: 0.7, basePosY: 0 },
      { mesh: gyroCore, rotX: 0.01, rotY: -0.018, rotZ: 0.012, floatSpeed: 0.7, basePosY: 0 },
      { mesh: octahedron, rotX: -0.009, rotY: -0.013, rotZ: 0.007, floatSpeed: 1.2, basePosY: 0 },
      { mesh: matrixPoly, rotX: 0.007, rotY: 0.011, rotZ: -0.008, floatSpeed: 0.9, basePosY: -36 },
    ];

    // --- 3. 3D COSMIC STARFIELD & SYNAPSE PARTICLE CLOUD ---
    const starCount = 1500;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const c1 = new THREE.Color(colors.wireframeSecondary);
    const c2 = new THREE.Color(colors.wireframe);
    const c3 = new THREE.Color(colors.wireframeAccent);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPositions[i3] = (Math.random() - 0.5) * 85;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 85 - 15; // spread vertically across page travel
      starPositions[i3 + 2] = (Math.random() - 0.5) * 45;

      const mixed = Math.random() < 0.45 ? c1 : Math.random() < 0.85 ? c2 : c3;
      starColors[i3] = mixed.r;
      starColors[i3 + 1] = mixed.g;
      starColors[i3 + 2] = mixed.b;
    }

    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      map: pointTexture,
      transparent: true,
      opacity: isDark ? 0.75 : 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: true,
    });
    const starField = new THREE.Points(starGeo, starMaterial);
    scene.add(starField);

    // --- Interaction State (Mouse & Scroll) ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, worldX: 0, worldY: 0 };
    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;

    const onMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const onScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    // Handle Resize
    const onResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", onResize);

    // Observer for Dark Mode Toggle
    const observer = new MutationObserver(() => {
      const newDark = checkIsDark();
      if (newDark !== isDark) {
        isDark = newDark;
        colors = getColors(isDark);

        scene.fog.color.setHex(colors.fogColor);

        terrainMaterial.color.setHex(colors.wireframe);
        terrainMaterial.opacity = colors.gridOpacity;

        pointsMaterial.color.setHex(colors.points);

        icosaMat.color.setHex(colors.wireframe);
        icosaMat.emissive.setHex(colors.wireframe);
        icosaMat.opacity = colors.polyOpacity;

        coreMat.color.setHex(colors.wireframeAccent);
        coreMat.opacity = colors.polyOpacity * 0.9;

        dodecaMat.color.setHex(colors.wireframeSecondary);
        dodecaMat.emissive.setHex(colors.wireframeSecondary);
        dodecaMat.opacity = colors.polyOpacity * 0.8;

        gyroRingMat1.color.setHex(colors.wireframeSecondary);
        gyroRingMat1.emissive.setHex(colors.wireframeSecondary);
        gyroRingMat2.color.setHex(colors.wireframe);
        gyroRingMat2.emissive.setHex(colors.wireframe);
        gyroCoreMat.color.setHex(colors.wireframeGold);

        octaMat.color.setHex(colors.wireframeAccent);
        octaMat.emissive.setHex(colors.wireframeAccent);
        matrixMat.color.setHex(colors.wireframeSecondary);
        matrixMat.emissive.setHex(colors.wireframeSecondary);

        ambientLight.color.setHex(colors.ambient);
        mouseLight.color.setHex(colors.pointLight1);
        secondaryLight.color.setHex(colors.pointLight2);
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // --- Main Render Loop ---
    const clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Smooth scroll damping
      scrollY += (targetScrollY - scrollY) * 0.08;
      const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const scrollProgress = Math.min(1, Math.max(0, scrollY / maxScroll));

      // 3D Camera Parallax & Journey down the 3D space
      camera.position.x = mouse.x * 4.5;
      camera.position.y = 5 + mouse.y * 3.5 - scrollProgress * 30;
      camera.position.z = 28 - mouse.y * 2;
      camera.lookAt(0, -1 - scrollProgress * 30, 0);

      // Mouse Light Position in 3D Space
      mouse.worldX = mouse.x * 22;
      mouse.worldY = mouse.y * 14 - scrollProgress * 30;
      mouseLight.position.set(mouse.worldX, mouse.worldY + 5, 12);

      // Secondary Light Dynamic Lissajous Orbit
      secondaryLight.position.x = Math.sin(elapsedTime * 0.7) * 18;
      secondaryLight.position.y = Math.cos(elapsedTime * 0.5) * 14 - scrollProgress * 30;
      secondaryLight.position.z = 8 + Math.sin(elapsedTime) * 4;

      // --- Animate 3D Terrain Wave with Edge Tapering ---
      const positions = terrainGeometry.attributes.position.array;
      const count = positions.length / 3;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const bx = basePositions[i3];
        const by = basePositions[i3 + 1];

        // Edge falloff envelope (so perimeter drops into the abyss/fog without harsh box edges)
        const normX = Math.abs(bx) / (gridWidth * 0.5);
        const normY = Math.abs(by) / (gridDepth * 0.5);
        const edgeFalloff =
          Math.max(0, 1 - Math.pow(normX, 3.5)) * Math.max(0, 1 - Math.pow(normY, 3.5));

        // Complex rolling cyber-wave formula
        const wave1 = Math.sin(bx * 0.2 + elapsedTime * 1.5) * 1.7;
        const wave2 = Math.cos(by * 0.24 + elapsedTime * 1.2) * 1.3;
        const wave3 = Math.sin((bx + by) * 0.12 - elapsedTime * 0.9) * 0.8;

        // Interactive mouse proximity shockwave
        const dx = bx - mouse.worldX;
        const dy = by - (mouse.worldY + 9.5);
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        let mouseDisplacement = 0;
        if (distToMouse < 15) {
          const force = 1 - distToMouse / 15;
          mouseDisplacement = Math.sin(distToMouse * 0.7 - elapsedTime * 4.5) * force * 2.8;
        }

        // Taper height at boundary so it seamlessly blends into the fog
        const totalHeight =
          (basePositions[i3 + 2] + wave1 + wave2 + wave3 + mouseDisplacement) * edgeFalloff -
          (1 - edgeFalloff) * 10;

        positions[i3 + 2] = totalHeight;
      }
      terrainGeometry.attributes.position.needsUpdate = true;

      // --- Animate 3D Floating Artifacts ---
      animatedItems.forEach(({ mesh, rotX, rotY, rotZ, floatSpeed, basePosY }) => {
        mesh.rotation.x += rotX;
        mesh.rotation.y += rotY;
        mesh.rotation.z += rotZ;
        if (basePosY !== 0) {
          mesh.position.y = basePosY + Math.sin(elapsedTime * floatSpeed) * 1.1;
        }
      });

      // Special counter-rotation & breath for inner core
      innerCore.rotation.x -= 0.02;
      innerCore.rotation.y += 0.025;
      const pulseScale = 1 + Math.sin(elapsedTime * 3) * 0.12;
      innerCore.scale.set(pulseScale, pulseScale, pulseScale);

      // Starfield gentle rotation & responsive tilt
      starField.rotation.y = elapsedTime * 0.025 + mouse.x * 0.12;
      starField.rotation.x = elapsedTime * 0.012 - mouse.y * 0.12;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup on Unmount ---
    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three.js resources
      terrainGeometry.dispose();
      terrainMaterial.dispose();
      pointTexture.dispose();
      pointsMaterial.dispose();

      icosaGeo.dispose();
      icosaMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();

      dodecaGeo.dispose();
      dodecaMat.dispose();

      gyroRingGeo1.dispose();
      gyroRingMat1.dispose();
      gyroRingGeo2.dispose();
      gyroRingMat2.dispose();
      gyroCoreGeo.dispose();
      gyroCoreMat.dispose();

      octaGeo.dispose();
      octaMat.dispose();
      matrixGeo.dispose();
      matrixMat.dispose();

      starGeo.dispose();
      starMaterial.dispose();

      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Three.js 3D Interactive WebGL Canvas Container */}
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.96 }}
      />

      {/* Atmospheric High-Tech Aurora Backlights */}
      <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-violet-600/22 dark:bg-violet-600/18 blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 -right-40 w-[38rem] h-[38rem] rounded-full bg-cyan-500/18 dark:bg-cyan-500/16 blur-[160px] pointer-events-none animate-pulse-subtle" />
      <div className="absolute -bottom-40 left-1/4 w-[34rem] h-[34rem] rounded-full bg-fuchsia-600/18 dark:bg-fuchsia-600/14 blur-[150px] pointer-events-none animate-pulse-glow" />

      {/* Vignette Shield to keep hero typography & project cards 100% legible and ultra-crisp */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, transparent 20%, hsl(var(--background) / 0.72) 75%, hsl(var(--background)) 100%)",
        }}
      />
    </div>
  );
};
