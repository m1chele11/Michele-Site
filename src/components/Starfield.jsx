"use client"

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Stars() {
  const points = useRef()

  const starPositions = useMemo(() => {
    const positions = []
    for (let i = 0; i < 1000; i++) {
      positions.push(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      )
    }
    return new Float32Array(positions)
  }, [])

  useFrame(({ clock }) => {
    points.current.rotation.y = clock.getElapsedTime() * 0.02
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={starPositions.length / 3}
          array={starPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.1} sizeAttenuation />
    </points>
  )
}

export default function Starfield() {
  return (
    <Canvas
        camera={{ position: [0, 0, 50], fov: 75 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}
    >
        <color attach="background" args={['black']} />
    <Stars />
    </Canvas>
  )
}
