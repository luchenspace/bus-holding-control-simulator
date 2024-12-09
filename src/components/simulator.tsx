'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { CatmullRomCurve3, Vector3 } from 'three';
import { Bus } from './bus';
import { Legend } from './legend';
import RouteLine from './route';

function createRandomLoopRoute(radius = 50, numPoints = 10) {
  const points = [];
  for (let i = 0; i < numPoints; i++) {
    // Random angle and radius offset
    const angle = (i / numPoints) * Math.PI * 2;
    const randomRadius = radius * (0.7 + Math.random() * 0.3); // Randomize radius slightly
    points.push(
      new Vector3(
        Math.cos(angle) * randomRadius,
        0,
        Math.sin(angle) * randomRadius
      )
    );
  }
  points.push(points[0]); // Close the loop by connecting the last point to the first
  return new CatmullRomCurve3(points, true); // `true` makes it a closed loop
}

const curve = createRandomLoopRoute(50, 10); // Radius 50, 10 random points

export default function Simulator() {
  return (
    <>
      <Legend />
      <Canvas>
        <gridHelper args={[1000, 1000]} />
        <OrbitControls />
        <axesHelper args={[100]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={3} />
        <Suspense fallback={null}>
          <Bus curve={curve} />
        </Suspense>
        <RouteLine curve={curve} />
      </Canvas>
    </>
  );
}
