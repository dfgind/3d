/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/Lantern.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Lantern.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh geometry={nodes.LanternPole_Body.geometry} material={materials.LanternPost_Mat} position={[-3.823, 13.016, 0]} />
        <mesh geometry={nodes.LanternPole_Chain.geometry} material={materials.LanternPost_Mat} position={[-9.582, 21.038, 0]} />
        <mesh geometry={nodes.LanternPole_Lantern.geometry} material={materials.LanternPost_Mat} position={[-9.582, 18.009, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/Lantern.gltf')
