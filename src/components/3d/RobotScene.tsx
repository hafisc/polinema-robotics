'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import RobotModel from './RobotModel';

export default function RobotScene() {
    return (
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }} gl={{ alpha: true }}>
            <Suspense fallback={null}>
                <Stage environment="city" intensity={0.6}>
                    <RobotModel />
                </Stage>
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} enablePan={false} />
        </Canvas>
    );
}
