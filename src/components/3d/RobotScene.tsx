'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Float } from '@react-three/drei';
import RobotModel from './RobotModel';

export default function RobotScene() {
    return (
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }} gl={{ alpha: true }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={2} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#00ffff" />
            <Environment preset="city" />
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Suspense fallback={null}>
                    <RobotModel />
                </Suspense>
            </Float>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} enablePan={false} />
        </Canvas>
    );
}
