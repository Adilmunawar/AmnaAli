
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Mesh, Group, Vector3 } from 'three';

// Advanced Alita-Style Robotic Female Model Component
function AlitaRoboticModel({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const groupRef = useRef<Group>(null);
  const headRef = useRef<Group>(null);
  const eyesRef = useRef<Group>(null);
  const torsoRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  const [poweredUp, setPoweredUp] = useState(false);

  // Advanced power up sequence
  useEffect(() => {
    const timer = setTimeout(() => setPoweredUp(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      // Subtle breathing animation
      const breathingIntensity = 0.015;
      groupRef.current.position.y = Math.sin(time * 1.2) * breathingIntensity;
      groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.008;
    }
    
    if (headRef.current && hovered) {
      // Sophisticated head tracking
      const targetX = mousePosition.x * 0.4;
      const targetY = mousePosition.y * 0.3;
      headRef.current.rotation.y += (targetX - headRef.current.rotation.y) * 0.08;
      headRef.current.rotation.x += (targetY - headRef.current.rotation.x) * 0.06;
    }

    if (eyesRef.current && poweredUp) {
      // Dynamic eye glow with consciousness simulation
      const baseIntensity = hovered ? 0.9 : 0.4;
      const pulseIntensity = baseIntensity + Math.sin(time * 3) * 0.3;
      const consciousnessPulse = Math.sin(time * 0.8) * 0.1;
      
      eyesRef.current.children.forEach((eye: any) => {
        if (eye.material) {
          eye.material.emissiveIntensity = pulseIntensity + consciousnessPulse;
        }
      });
    }

    if (torsoRef.current) {
      // Chest panel breathing light
      const chestGlow = 0.15 + Math.sin(time * 1.5) * 0.1;
      torsoRef.current.children.forEach((child: any) => {
        if (child.material && child.userData?.isChestPanel) {
          child.material.emissiveIntensity = chestGlow;
        }
      });
    }
  });

  return (
    <group 
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={poweredUp ? (hovered ? 1.08 : 1.02) : 0.7}
      position={[0, -0.8, 0]}
    >
      {/* Advanced Torso Assembly */}
      <group ref={torsoRef} position={[0, 0.3, 0]}>
        {/* Main Torso - Alita-style curves */}
        <mesh position={[0, 0, 0]}>
          <capsuleGeometry args={[0.38, 0.9, 6, 12]} />
          <meshStandardMaterial 
            color="#f5f5f5" 
            metalness={0.85}
            roughness={0.15}
            emissive="#e8f4fd"
            emissiveIntensity={poweredUp ? 0.08 : 0}
          />
        </mesh>

        {/* Chest Armor Plates - Multiple layers for realism */}
        <mesh position={[0, 0.35, 0.32]} userData={{ isChestPanel: true }}>
          <boxGeometry args={[0.28, 0.35, 0.06]} />
          <meshStandardMaterial 
            color="#ffffff" 
            metalness={0.95}
            roughness={0.05}
            emissive="#00aaff"
            emissiveIntensity={poweredUp ? 0.2 : 0}
          />
        </mesh>

        {/* Side Armor Details */}
        <mesh position={[0.25, 0.2, 0.28]} rotation={[0, 0.3, 0]}>
          <boxGeometry args={[0.15, 0.25, 0.04]} />
          <meshStandardMaterial 
            color="#e0e0e0" 
            metalness={0.9}
            roughness={0.1}
            emissive="#4a90e2"
            emissiveIntensity={poweredUp ? 0.15 : 0}
          />
        </mesh>
        
        <mesh position={[-0.25, 0.2, 0.28]} rotation={[0, -0.3, 0]}>
          <boxGeometry args={[0.15, 0.25, 0.04]} />
          <meshStandardMaterial 
            color="#e0e0e0" 
            metalness={0.9}
            roughness={0.1}
            emissive="#4a90e2"
            emissiveIntensity={poweredUp ? 0.15 : 0}
          />
        </mesh>

        {/* Abdominal Section */}
        <mesh position={[0, -0.2, 0.25]}>
          <boxGeometry args={[0.32, 0.2, 0.08]} />
          <meshStandardMaterial 
            color="#f8f8f8" 
            metalness={0.88}
            roughness={0.12}
            emissive="#ffffff"
            emissiveIntensity={0.05}
          />
        </mesh>
      </group>

      {/* Sophisticated Head and Neck Assembly */}
      <group ref={headRef} position={[0, 1.1, 0]}>
        {/* Neck Joint - Multiple segments */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.1, 0.14, 0.25, 12]} />
          <meshStandardMaterial 
            color="#d8d8d8" 
            metalness={0.85}
            roughness={0.15}
            emissive="#4a90e2"
            emissiveIntensity={poweredUp ? 0.12 : 0}
          />
        </mesh>

        {/* Upper Neck Connector */}
        <mesh position={[0, -0.05, 0]}>
          <cylinderGeometry args={[0.08, 0.1, 0.1, 8]} />
          <meshStandardMaterial 
            color="#c0c0c0" 
            metalness={0.9}
            roughness={0.1}
            emissive="#00aaff"
            emissiveIntensity={poweredUp ? 0.2 : 0}
          />
        </mesh>

        {/* Head Shell - More human-like proportions */}
        <mesh position={[0, 0.2, 0]} scale={[1, 1.1, 0.9]}>
          <sphereGeometry args={[0.32, 32, 32]} />
          <meshStandardMaterial 
            color="#f8f8f8" 
            metalness={0.75}
            roughness={0.2}
            emissive="#ffffff"
            emissiveIntensity={poweredUp ? 0.06 : 0}
          />
        </mesh>

        {/* Facial Plate */}
        <mesh position={[0, 0.15, 0.28]}>
          <boxGeometry args={[0.22, 0.18, 0.03]} />
          <meshStandardMaterial 
            color="#ffffff" 
            metalness={0.4}
            roughness={0.1}
            emissive="#f0f8ff"
            emissiveIntensity={0.08}
          />
        </mesh>

        {/* Temple Details */}
        <mesh position={[0.18, 0.18, 0.15]} rotation={[0, 0.5, 0]}>
          <boxGeometry args={[0.08, 0.06, 0.12]} />
          <meshStandardMaterial 
            color="#e0e0e0" 
            metalness={0.9}
            roughness={0.1}
            emissive="#4a90e2"
            emissiveIntensity={poweredUp ? 0.25 : 0}
          />
        </mesh>
        
        <mesh position={[-0.18, 0.18, 0.15]} rotation={[0, -0.5, 0]}>
          <boxGeometry args={[0.08, 0.06, 0.12]} />
          <meshStandardMaterial 
            color="#e0e0e0" 
            metalness={0.9}
            roughness={0.1}
            emissive="#4a90e2"
            emissiveIntensity={poweredUp ? 0.25 : 0}
          />
        </mesh>

        {/* Enhanced Eyes - Alita-style large eyes */}
        <group ref={eyesRef}>
          {/* Left Eye */}
          <mesh position={[-0.07, 0.16, 0.29]}>
            <sphereGeometry args={[0.035, 20, 20]} />
            <meshStandardMaterial 
              color="#00aaff" 
              metalness={0.3}
              roughness={0.1}
              emissive="#00aaff"
              emissiveIntensity={poweredUp ? 0.9 : 0}
              transparent={true}
              opacity={0.9}
            />
          </mesh>
          
          {/* Right Eye */}
          <mesh position={[0.07, 0.16, 0.29]}>
            <sphereGeometry args={[0.035, 20, 20]} />
            <meshStandardMaterial 
              color="#00aaff" 
              metalness={0.3}
              roughness={0.1}
              emissive="#00aaff"
              emissiveIntensity={poweredUp ? 0.9 : 0}
              transparent={true}
              opacity={0.9}
            />
          </mesh>

          {/* Eye Glow Rings */}
          <mesh position={[-0.07, 0.16, 0.295]} rotation={[0, 0, Math.PI / 6]}>
            <torusGeometry args={[0.045, 0.008, 8, 16]} />
            <meshStandardMaterial 
              color="#00ffff" 
              metalness={0.8}
              roughness={0.1}
              emissive="#00ffff"
              emissiveIntensity={poweredUp ? 0.6 : 0}
            />
          </mesh>
          
          <mesh position={[0.07, 0.16, 0.295]} rotation={[0, 0, -Math.PI / 6]}>
            <torusGeometry args={[0.045, 0.008, 8, 16]} />
            <meshStandardMaterial 
              color="#00ffff" 
              metalness={0.8}
              roughness={0.1}
              emissive="#00ffff"
              emissiveIntensity={poweredUp ? 0.6 : 0}
            />
          </mesh>
        </group>

        {/* Head Crown Detail */}
        <mesh position={[0, 0.35, 0]} rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[0.12, 0.015, 8, 16]} />
          <meshStandardMaterial 
            color="#4a90e2" 
            metalness={0.95}
            roughness={0.05}
            emissive="#4a90e2"
            emissiveIntensity={poweredUp ? 0.4 : 0}
          />
        </mesh>
      </group>

      {/* Advanced Arm Assembly */}
      <group>
        {/* Left Arm */}
        <group position={[-0.45, 0.5, 0]} rotation={[0, 0, hovered ? -0.4 : -0.15]}>
          {/* Upper Arm */}
          <mesh position={[0, -0.15, 0]}>
            <capsuleGeometry args={[0.07, 0.3, 6, 8]} />
            <meshStandardMaterial 
              color="#e8e8e8" 
              metalness={0.85}
              roughness={0.15}
              emissive="#4a90e2"
              emissiveIntensity={poweredUp ? 0.12 : 0}
            />
          </mesh>
          
          {/* Shoulder Joint */}
          <mesh position={[0, 0.05, 0]}>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial 
              color="#d0d0d0" 
              metalness={0.9}
              roughness={0.1}
              emissive="#00aaff"
              emissiveIntensity={poweredUp ? 0.2 : 0}
            />
          </mesh>
          
          {/* Forearm */}
          <mesh position={[0, -0.35, 0]}>
            <capsuleGeometry args={[0.06, 0.25, 6, 8]} />
            <meshStandardMaterial 
              color="#f0f0f0" 
              metalness={0.8}
              roughness={0.2}
              emissive="#ffffff"
              emissiveIntensity={0.05}
            />
          </mesh>
          
          {/* Hand */}
          <mesh position={[0, -0.52, 0]}>
            <boxGeometry args={[0.08, 0.12, 0.06]} />
            <meshStandardMaterial 
              color="#f8f8f8" 
              metalness={0.75}
              roughness={0.25}
            />
          </mesh>
        </group>

        {/* Right Arm */}
        <group position={[0.45, 0.5, 0]} rotation={[0, 0, hovered ? 0.4 : 0.15]}>
          {/* Upper Arm */}
          <mesh position={[0, -0.15, 0]}>
            <capsuleGeometry args={[0.07, 0.3, 6, 8]} />
            <meshStandardMaterial 
              color="#e8e8e8" 
              metalness={0.85}
              roughness={0.15}
              emissive="#4a90e2"
              emissiveIntensity={poweredUp ? 0.12 : 0}
            />
          </mesh>
          
          {/* Shoulder Joint */}
          <mesh position={[0, 0.05, 0]}>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial 
              color="#d0d0d0" 
              metalness={0.9}
              roughness={0.1}
              emissive="#00aaff"
              emissiveIntensity={poweredUp ? 0.2 : 0}
            />
          </mesh>
          
          {/* Forearm */}
          <mesh position={[0, -0.35, 0]}>
            <capsuleGeometry args={[0.06, 0.25, 6, 8]} />
            <meshStandardMaterial 
              color="#f0f0f0" 
              metalness={0.8}
              roughness={0.2}
              emissive="#ffffff"
              emissiveIntensity={0.05}
            />
          </mesh>
          
          {/* Hand */}
          <mesh position={[0, -0.52, 0]}>
            <boxGeometry args={[0.08, 0.12, 0.06]} />
            <meshStandardMaterial 
              color="#f8f8f8" 
              metalness={0.75}
              roughness={0.25}
            />
          </mesh>
        </group>
      </group>

      {/* Enhanced Leg Assembly */}
      <group>
        {/* Left Leg */}
        <group position={[-0.12, -0.6, 0]}>
          {/* Hip Joint */}
          <mesh position={[0, 0.1, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial 
              color="#d8d8d8" 
              metalness={0.9}
              roughness={0.1}
              emissive="#4a90e2"
              emissiveIntensity={poweredUp ? 0.15 : 0}
            />
          </mesh>
          
          {/* Thigh */}
          <mesh position={[0, -0.15, 0]}>
            <capsuleGeometry args={[0.09, 0.4, 6, 8]} />
            <meshStandardMaterial 
              color="#e0e0e0" 
              metalness={0.85}
              roughness={0.15}
              emissive="#4a90e2"
              emissiveIntensity={poweredUp ? 0.1 : 0}
            />
          </mesh>
          
          {/* Knee Joint */}
          <mesh position={[0, -0.4, 0]}>
            <sphereGeometry args={[0.07, 12, 12]} />
            <meshStandardMaterial 
              color="#c8c8c8" 
              metalness={0.9}
              roughness={0.1}
              emissive="#00aaff"
              emissiveIntensity={poweredUp ? 0.2 : 0}
            />
          </mesh>
          
          {/* Shin */}
          <mesh position={[0, -0.65, 0]}>
            <capsuleGeometry args={[0.08, 0.35, 6, 8]} />
            <meshStandardMaterial 
              color="#f0f0f0" 
              metalness={0.8}
              roughness={0.2}
              emissive="#ffffff"
              emissiveIntensity={0.05}
            />
          </mesh>
          
          {/* Advanced Foot */}
          <mesh position={[0, -0.88, 0.08]}>
            <boxGeometry args={[0.1, 0.06, 0.22]} />
            <meshStandardMaterial 
              color="#b0b0b0" 
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        </group>

        {/* Right Leg */}
        <group position={[0.12, -0.6, 0]}>
          {/* Hip Joint */}
          <mesh position={[0, 0.1, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial 
              color="#d8d8d8" 
              metalness={0.9}
              roughness={0.1}
              emissive="#4a90e2"
              emissiveIntensity={poweredUp ? 0.15 : 0}
            />
          </mesh>
          
          {/* Thigh */}
          <mesh position={[0, -0.15, 0]}>
            <capsuleGeometry args={[0.09, 0.4, 6, 8]} />
            <meshStandardMaterial 
              color="#e0e0e0" 
              metalness={0.85}
              roughness={0.15}
              emissive="#4a90e2"
              emissiveIntensity={poweredUp ? 0.1 : 0}
            />
          </mesh>
          
          {/* Knee Joint */}
          <mesh position={[0, -0.4, 0]}>
            <sphereGeometry args={[0.07, 12, 12]} />
            <meshStandardMaterial 
              color="#c8c8c8" 
              metalness={0.9}
              roughness={0.1}
              emissive="#00aaff"
              emissiveIntensity={poweredUp ? 0.2 : 0}
            />
          </mesh>
          
          {/* Shin */}
          <mesh position={[0, -0.65, 0]}>
            <capsuleGeometry args={[0.08, 0.35, 6, 8]} />
            <meshStandardMaterial 
              color="#f0f0f0" 
              metalness={0.8}
              roughness={0.2}
              emissive="#ffffff"
              emissiveIntensity={0.05}
            />
          </mesh>
          
          {/* Advanced Foot */}
          <mesh position={[0, -0.88, 0.08]}>
            <boxGeometry args={[0.1, 0.06, 0.22]} />
            <meshStandardMaterial 
              color="#b0b0b0" 
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        </group>
      </group>

      {/* Floating Energy Elements - Alita's power signature */}
      {poweredUp && (
        <>
          <mesh position={[0.5, 1.2, 0.2]} rotation={[0, 0, Math.PI / 4]}>
            <octahedronGeometry args={[0.04]} />
            <meshStandardMaterial 
              color="#00ffff" 
              metalness={0.8}
              roughness={0.2}
              emissive="#00ffff"
              emissiveIntensity={0.8}
              transparent={true}
              opacity={0.8}
            />
          </mesh>
          
          <mesh position={[-0.5, 0.8, 0.3]} rotation={[Math.PI / 3, 0, 0]}>
            <octahedronGeometry args={[0.035]} />
            <meshStandardMaterial 
              color="#4a90e2" 
              metalness={0.8}
              roughness={0.2}
              emissive="#4a90e2"
              emissiveIntensity={0.7}
              transparent={true}
              opacity={0.8}
            />
          </mesh>
          
          <mesh position={[0.3, 0.2, 0.4]} rotation={[0, Math.PI / 4, Math.PI / 6]}>
            <octahedronGeometry args={[0.03]} />
            <meshStandardMaterial 
              color="#00aaff" 
              metalness={0.8}
              roughness={0.2}
              emissive="#00aaff"
              emissiveIntensity={0.6}
              transparent={true}
              opacity={0.7}
            />
          </mesh>
        </>
      )}
    </group>
  );
}

// Enhanced Loading component
const AlitaLoader = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-transparent rounded-2xl">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full mb-4"
    />
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="text-white text-lg font-medium"
    >
      Initializing Neural Network...
    </motion.div>
    <motion.div
      animate={{ opacity: [0, 0.8, 0] }}
      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      className="text-cyan-400 text-sm mt-2"
    >
      Loading Alita Protocol
    </motion.div>
  </div>
);

// Main Enhanced Robotic Model component
export const RoboticModel = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 80 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 1.5, 
        type: "spring", 
        stiffness: 60,
        delay: 0.3
      }}
      viewport={{ once: true }}
      className="w-full h-[450px] md:h-[550px] relative"
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced glow container */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-blue-500/15 to-purple-500/15 rounded-3xl blur-2xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative bg-transparent backdrop-blur-sm rounded-3xl overflow-hidden h-full">
        <Canvas
          camera={{ 
            position: [0, 0.5, 3.5], 
            fov: 45
          }}
          gl={{ 
            antialias: true, 
            alpha: true,
            premultipliedAlpha: false
          }}
          className="w-full h-full"
          style={{ background: 'transparent' }}
        >
          {/* Cinema-quality lighting setup */}
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[5, 8, 5]} 
            intensity={1.5}
            color="#ffffff"
            castShadow
          />
          <pointLight position={[-4, 4, 4]} intensity={0.8} color="#00aaff" />
          <pointLight position={[4, -2, 3]} intensity={0.6} color="#4a90e2" />
          <spotLight 
            position={[0, 6, 3]} 
            intensity={1.2} 
            color="#ffffff"
            angle={Math.PI / 5}
            penumbra={0.3}
            castShadow
          />
          <pointLight position={[0, 1, 5]} intensity={0.4} color="#00ffff" />
          
          {/* Professional studio environment */}
          <Environment preset="studio" />
          
          {/* Alita-Style Robotic Model */}
          <AlitaRoboticModel mousePosition={mousePosition} />
          
          {/* Refined camera controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2.1}
            minPolarAngle={Math.PI / 3.5}
            maxAzimuthAngle={Math.PI / 8}
            minAzimuthAngle={-Math.PI / 8}
            enableDamping
            dampingFactor={0.08}
            autoRotate={false}
          />
        </Canvas>
        
        {/* Enhanced status indicators */}
        <motion.div
          className="absolute top-4 right-4 flex items-center gap-2"
        >
          <motion.div
            className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="text-xs text-cyan-400 font-medium"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ONLINE
          </motion.div>
        </motion.div>

        {/* Neural activity indicator */}
        <motion.div
          className="absolute bottom-4 left-4 w-6 h-6 border-2 border-cyan-400 rounded-full"
          animate={{
            borderColor: ["#06b6d4", "#00ffff", "#4a90e2", "#06b6d4"],
            rotate: [0, 360]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <motion.div
            className="w-2 h-2 bg-cyan-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
