/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useTheme } from "next-themes";
import * as THREE from "three";

const technologies = [
  { name: "Next.js", color: "#ffffff" },
  { name: "React", color: "#61dafb" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Node.js", color: "#339933" },
  { name: "Express", color: "#8b949e" },
  { name: "PostgreSQL", color: "#4169e1" },
  { name: "MongoDB", color: "#47a248" },
  { name: "Prisma", color: "#a5d6ff" },
  { name: "Docker", color: "#2496ed" },
  { name: "Git", color: "#f05032" },
  { name: "Tailwind", color: "#06b6d4" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "HTML5", color: "#e34f26" },
  { name: "CSS3", color: "#1572b6" },
  { name: "Shadcn", color: "#e6edf3" },
];

/* ===== Generate fibonacci sphere positions ===== */
function generateSpherePositions(count: number, radius: number) {
  const positions: [number, number, number][] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = phi * i;
    positions.push([
      Math.cos(theta) * radiusAtY * radius,
      y * radius,
      Math.sin(theta) * radiusAtY * radius,
    ]);
  }
  return positions;
}

/* ===== Single Tech Tag (High-Res Canvas Pill) ===== */
function TechTag({
  name,
  color,
  position,
  index,
}: {
  name: string;
  color: string;
  position: [number, number, number];
  index: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const { camera } = useThree();
  const { theme } = useTheme();

  // Create a high-res rounded pill texture
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    // High resolution for crisp text
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext("2d")!;

    const isDark = theme === "dark";

    // Clear background
    ctx.fillStyle = "transparent";
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Rounded Rectangle (Pill)
    const radius = 50;
    const x = 10,
      y = 14,
      w = 492,
      h = 100;

    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + w - radius, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
    ctx.lineTo(x + w, y + h - radius);
    ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
    ctx.lineTo(x + radius, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();

    // Fill
    ctx.fillStyle = hovered
      ? isDark
        ? "#1c2128"
        : "#f0f6ff"
      : isDark
        ? "#161b22"
        : "#ffffff";
    ctx.fill();

    // Border
    ctx.lineWidth = 6;
    ctx.strokeStyle = hovered ? color : isDark ? "#30363d" : "#e5e7eb";
    ctx.stroke();

    // Text Setup
    ctx.font = "bold 44px 'Inter', system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = hovered ? color : isDark ? "#e6edf3" : "#1f2328";

    // Draw Text perfectly centered
    ctx.fillText(name, canvas.width / 2, canvas.height / 2 + 4);

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace; // Ensures colors pop correctly
    return tex;
  }, [name, color, hovered, theme]);

  useFrame((state) => {
    if (!groupRef.current) return;

    // Billboard — always face camera
    groupRef.current.quaternion.copy(camera.quaternion);

    // Subtle floating effect
    const floatY = Math.sin(state.clock.elapsedTime * 0.5 + index * 0.8) * 0.05;
    groupRef.current.position.set(position[0], position[1] + floatY, position[2]);

    // Smooth scale on hover
    const targetScale = hovered ? 1.15 : 1;
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1,
    );
  });

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
    >
      {/* Front Face */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[2.4, 0.6]} />
        <meshBasicMaterial map={texture} transparent depthWrite={false} />
      </mesh>

      {/* Back Face (Rotated 180 degrees so text reads correctly from the back) */}
      <mesh position={[0, 0, -0.01]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[2.4, 0.6]} />
        <meshBasicMaterial map={texture} transparent depthWrite={false} />
      </mesh>
    </group>
  );
}

/* ===== Connection Lines ===== */
function ConnectionLines({ positions }: { positions: [number, number, number][] }) {
  const { theme } = useTheme();

  const geometry = useMemo(() => {
    const points: number[] = [];
    const maxDist = 3.5;
    const maxLines = 25;
    let count = 0;

    for (let i = 0; i < positions.length && count < maxLines; i++) {
      for (let j = i + 1; j < positions.length && count < maxLines; j++) {
        const dx = positions[i][0] - positions[j][0];
        const dy = positions[i][1] - positions[j][1];
        const dz = positions[i][2] - positions[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDist) {
          points.push(...positions[i], ...positions[j]);
          count++;
        }
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
    return geo;
  }, [positions]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial
        color={theme === "dark" ? "#22d3ee" : "#0969da"}
        transparent
        opacity={0.15}
      />
    </lineSegments>
  );
}

/* ===== Outer Wireframe Sphere ===== */
function WireframeSphere() {
  const ref = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    ref.current.rotation.z = state.clock.elapsedTime * 0.03;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[3.2, 16, 16]} />
      <meshBasicMaterial
        color={theme === "dark" ? "#22d3ee" : "#0969da"}
        wireframe
        transparent
        opacity={0.06}
      />
    </mesh>
  );
}

/* ===== Pulsing Core ===== */
function PulsingCore() {
  const ref = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  useFrame((state) => {
    if (!ref.current) return;
    const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    ref.current.scale.setScalar(scale);
    const mat = ref.current.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.08 + Math.sin(state.clock.elapsedTime * 2) * 0.04;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshBasicMaterial
        color={theme === "dark" ? "#22d3ee" : "#0969da"}
        transparent
        opacity={0.08}
      />
    </mesh>
  );
}

/* ===== Main Rotating Group ===== */
function RotatingGroup() {
  const groupRef = useRef<THREE.Group>(null);
  // Slightly increased radius for better spacing
  const positions = useMemo(() => generateSpherePositions(technologies.length, 2.6), []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <group ref={groupRef}>
      <WireframeSphere />
      <PulsingCore />
      <ConnectionLines positions={positions} />
      {technologies.map((tech, index) => (
        <TechTag
          key={tech.name}
          name={tech.name}
          color={tech.color}
          position={positions[index]}
          index={index}
        />
      ))}
    </group>
  );
}

/* ===== Canvas Export ===== */
/* ===== Canvas Export ===== */
export function TechSphere() {
  return (
    <div className="h-full w-full">
      <Canvas
        // ✅ Pulled camera back from Z: 7.5 to Z: 9.5 to prevent clipping
        camera={{ position: [0, 0, 9.5], fov: 55 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
        legacy={false}
      >
        <ambientLight intensity={0.8} />
        <RotatingGroup />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(Math.PI * 3) / 4}
          rotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}
