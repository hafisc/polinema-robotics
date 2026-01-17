'use client';

import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

function DroneRobot() {
    const group = useRef<THREE.Group>(null!);
    const head = useRef<THREE.Group>(null!);
    const body = useRef<THREE.Mesh>(null!);
    const leftHand = useRef<THREE.Mesh>(null!);
    const rightHand = useRef<THREE.Mesh>(null!);

    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        // Idle floating body animation
        if (group.current) {
            group.current.position.y = Math.sin(t * 1) * 0.1;
        }

        // Head looking around slightly
        if (head.current) {
            head.current.rotation.y = Math.sin(t * 0.5) * 0.2;
            head.current.rotation.x = Math.sin(t * 0.3) * 0.05;
        }

        // Floating hands
        if (leftHand.current && rightHand.current) {
            leftHand.current.position.y = -0.5 + Math.sin(t * 1.5 + 1) * 0.05;
            rightHand.current.position.y = -0.5 + Math.sin(t * 1.5 + 2) * 0.05;
        }
    });

    // Materials - Memoized to prevent flickering/re-creation on state change
    const materials = useMemo(() => ({
        body: new THREE.MeshPhysicalMaterial({
            color: '#cbd5e1', // Slate-300 (Silver-ish) instead of pure brightness
            roughness: 0.3,   // Balanced reflection
            metalness: 0.6,   // Higher metalness for "cool" reflections
            clearcoat: 1,
            clearcoatRoughness: 0.2,
        }),
        visor: new THREE.MeshStandardMaterial({
            color: '#111111',
            roughness: 0.2,
            metalness: 0.8,
        }),
        glow: new THREE.MeshBasicMaterial({
            color: '#00ffff',
        }),
        joint: new THREE.MeshStandardMaterial({
            color: '#333333',
            roughness: 0.7,
            metalness: 0.5,
        })
    }), []);

    return (
        <group
            ref={group}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            scale={1.8}
        >
            {/* HEAD GROUP */}
            <group ref={head} position={[0, 0.4, 0]}>
                {/* Main Head Shape */}
                <mesh position={[0, 0, 0]}>
                    <capsuleGeometry args={[0.35, 0.3, 4, 16]} />
                    <primitive object={materials.body} />
                </mesh>

                {/* Visor Area (Black Glass) */}
                <mesh position={[0, 0.05, 0.28]} rotation={[0.1, 0, 0]}>
                    <boxGeometry args={[0.5, 0.25, 0.15]} />
                    <primitive object={materials.visor} />
                </mesh>

                {/* Eyes (Glowing) */}
                <mesh position={[-0.12, 0.05, 0.36]} rotation={[0.1, 0, 0]}>
                    <sphereGeometry args={[0.04]} />
                    <primitive object={materials.glow} />
                </mesh>
                <mesh position={[0.12, 0.05, 0.36]} rotation={[0.1, 0, 0]}>
                    <sphereGeometry args={[0.04]} />
                    <primitive object={materials.glow} />
                </mesh>

                {/* Antenna */}
                <mesh position={[0, 0.4, 0]}>
                    <cylinderGeometry args={[0.01, 0.01, 0.3]} />
                    <primitive object={materials.joint} />
                </mesh>
                <mesh position={[0, 0.55, 0]}>
                    <sphereGeometry args={[0.03]} />
                    <meshBasicMaterial color={hovered ? "#ff0000" : "#00ff00"} />
                </mesh>
            </group>

            {/* NECK */}
            <mesh position={[0, 0.1, 0]}>
                <cylinderGeometry args={[0.15, 0.15, 0.2]} />
                <primitive object={materials.joint} />
            </mesh>

            {/* BODY */}
            <mesh ref={body} position={[0, -0.4, 0]}>
                <sphereGeometry args={[0.45, 32, 32]} />
                <primitive object={materials.body} />
            </mesh>

            {/* Chest Light */}
            <mesh position={[0, -0.3, 0.4]} rotation={[0.2, 0, 0]}>
                <circleGeometry args={[0.08]} />
                <primitive object={materials.glow} />
            </mesh>

            {/* FLOATING HANDS */}
            <mesh ref={leftHand} position={[-0.6, -0.5, 0.2]}>
                <sphereGeometry args={[0.12]} />
                <primitive object={materials.body} />
            </mesh>
            <mesh ref={rightHand} position={[0.6, -0.5, 0.2]}>
                <sphereGeometry args={[0.12]} />
                <primitive object={materials.body} />
            </mesh>
        </group>
    );
}

export default function TechCore() {
    return (
        <div className="w-full h-full relative">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 4]} />
                <ambientLight intensity={0.5} />

                {/* Main Light */}
                <spotLight position={[5, 5, 5]} intensity={1} penumbra={1} angle={0.5} castShadow />

                {/* Rim Light for definition */}
                <pointLight position={[-5, 5, -5]} intensity={1} color="#22d3ee" />

                <Environment preset="city" />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <DroneRobot />
                </Float>

                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={-0.5} />
            </Canvas>
        </div>
    );
}
