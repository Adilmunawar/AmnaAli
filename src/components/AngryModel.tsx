import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Mesh, Group } from 'three';

// Custom 3D Scene Component
function CustomScene() {
  const groupRef = useRef<Group>(null);
  const sphere1Ref = useRef<Mesh>(null);
  const sphere2Ref = useRef<Mesh>(null);
  const sphere3Ref = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.3;
    }
    
    if (sphere1Ref.current) {
      sphere1Ref.current.position.y = Math.sin(time * 2) * 0.3;
      sphere1Ref.current.rotation.x = time;
    }
    
    if (sphere2Ref.current) {
      sphere2Ref.current.position.y = Math.sin(time * 2 + Math.PI * 0.5) * 0.3;
      sphere2Ref.current.rotation.z = time * 0.8;
    }
    
    if (sphere3Ref.current) {
      sphere3Ref.current.position.y = Math.sin(time * 2 + Math.PI) * 0.3;
      sphere3Ref.current.rotation.y = time * 1.2;
    }
  });

  return (
    <group 
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      {/* Central Torus */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1.2, 0.4, 16, 100]} />
        <meshStandardMaterial 
          color="#ec4899" 
          metalness={0.8}
          roughness={0.2}
          emissive="#ec4899"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Floating Spheres */}
      <mesh ref={sphere1Ref} position={[2, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial 
          color="#a855f7" 
          metalness={0.9}
          roughness={0.1}
          emissive="#a855f7"
          emissiveIntensity={0.2}
        />
      </mesh>

      <mesh ref={sphere2Ref} position={[-2, 0, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial 
          color="#06b6d4" 
          metalness={0.9}
          roughness={0.1}
          emissive="#06b6d4"
          emissiveIntensity={0.2}
        />
      </mesh>

      <mesh ref={sphere3Ref} position={[0, 2, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial 
          color="#f97316" 
          metalness={0.9}
          roughness={0.1}
          emissive="#f97316"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Wireframe Icosahedron */}
      <mesh position={[0, -1.5, 0]} rotation={[0, 0, 0]}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial 
          color="#db2777" 
          wireframe={true}
          emissive="#db2777"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Floating Rings */}
      <mesh position={[1.5, 1.5, 1.5]} rotation={[Math.PI / 4, 0, Math.PI / 4]}>
        <torusGeometry args={[0.5, 0.1, 8, 100]} />
        <meshStandardMaterial 
          color="#8b5cf6" 
          metalness={0.8}
          roughness={0.2}
          emissive="#8b5cf6"
          emissiveIntensity={0.1}
        />
      </mesh>

      <mesh position={[-1.5, -1.5, -1.5]} rotation={[-Math.PI / 4, 0, -Math.PI / 4]}>
        <torusGeometry args={[0.4, 0.08, 8, 100]} />
        <meshStandardMaterial 
          color="#ec4899" 
          metalness={0.8}
          roughness={0.2}
          emissive="#ec4899"
          emissiveIntensity={0.1}
        />
      </mesh>
    </group>
  );
}

// Loading fallback component
const ModelLoader = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="w-12 h-12 border-4 border-purple-400 border-t-transparent rounded-full"
    />
    <span className="ml-4 text-white">Loading 3D Scene...</span>
  </div>
);

// Main AngryModel component
export const AngryModel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
      viewport={{ once: true }}
      className="w-full h-[300px] md:h-[400px] relative"
    >
      {/* Glowing container */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-3xl blur-xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-4 border border-white/20 shadow-2xl overflow-hidden h-full">
        <Canvas
          camera={{ 
            position: [0, 0, 6], 
            fov: 45
          }}
          gl={{ 
            antialias: true, 
            alpha: true
          }}
          className="w-full h-full"
        >
          {/* Enhanced Lighting setup */}
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[5, 5, 5]} 
            intensity={1.5}
            color="#ffffff"
          />
          <pointLight position={[-5, 5, 5]} intensity={0.8} color="#ff69b4" />
          <pointLight position={[5, -5, -5]} intensity={0.8} color="#8b5cf6" />
          <pointLight position={[0, 0, 5]} intensity={0.6} color="#06b6d4" />
          
          {/* Environment for realistic lighting */}
          <Environment preset="sunset" />
          
          {/* Custom 3D Scene */}
          <CustomScene />
          
          {/* Interactive controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
            maxAzimuthAngle={Math.PI / 3}
            minAzimuthAngle={-Math.PI / 3}
            enableDamping
            dampingFactor={0.05}
            autoRotate={false}
          />
        </Canvas>
        
        {/* Decorative elements */}
        <motion.div
          className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-4 left-4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </motion.div>
  );
};
