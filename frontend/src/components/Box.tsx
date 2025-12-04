import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Box(props: any) {

    const meshRef = useRef<THREE.Mesh>(null!)

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta
        meshRef.current.rotation.y += delta * 0.5
    })

    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}>

            {/* 1. La forme (Géométrie) : un cube */}
            <boxGeometry args={[1, 1, 1]} />

            {/* 2. La matière (Material) : couleur qui réagit à la lumière */}
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}