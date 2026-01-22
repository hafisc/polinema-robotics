'use client';

import { useLoader, useFrame } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { useRef, useLayoutEffect } from 'react';
import { Group, MeshStandardMaterial } from 'three';

export default function RobotModel() {
    const obj = useLoader(OBJLoader, '/models/base.obj');
    const modelRef = useRef<Group>(null);

    useLayoutEffect(() => {
        if (modelRef.current) {
            modelRef.current.traverse((child: any) => {
                if (child.isMesh) {
                    // Apply a sleek metallic material
                    child.material = new MeshStandardMaterial({
                        color: "#ffffff",
                        metalness: 0.8,
                        roughness: 0.2,
                    });
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });
            // Center the model? OBJ might be off-center.
            // Helper to center could be used, but let's assume it's roughly centered.
        }
    }, [obj]);

    useFrame((state, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += delta * 0.5;
        }
    });

    return <primitive object={obj} ref={modelRef} scale={0.02} />;
}
