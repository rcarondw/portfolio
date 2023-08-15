import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function PlanetModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/Models/NewhelloPlanet.glb"
  );
  const text = useRef();
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // console.log(actions);
    actions[`SphereAction.002`].play();
    actions[`TextAction.003`].play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Sphere001"
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials.Material}
          scale={2.059}
        />
        <mesh
          ref={text}
          name="Text"
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials["Material.002"]}
          rotation={[1.855, 0, 0]}
          scale={1.137}
        >
          <group
            name="BezierCircle"
            rotation={[Math.PI / 2, 0, -Math.PI]}
            scale={2.047}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/Models/NewhelloPlanet.glb");
