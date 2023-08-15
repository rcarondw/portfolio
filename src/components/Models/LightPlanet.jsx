import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function LightPlanetModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Models/lightPlanet.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log(actions);
    actions[`SphereAction.002`].play();
    actions[`TextAction.003`].play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          rotation={[0.284, 0, 0]}
        >
          <mesh
            name="Text"
            castShadow
            receiveShadow
            geometry={nodes.Text.geometry}
            material={materials["Material.002"]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1.137}
          >
            <group
              name="BezierCircle"
              rotation={[Math.PI / 2, 0, -Math.PI]}
              scale={2.047}
            />
          </mesh>
        </mesh>
        <mesh
          name="Sphere001"
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials.Material}
          scale={2.059}
        />
        <group
          name="Area"
          position={[-5.857, 4.606, 2.301]}
          rotation={[-1.114, -0.835, 0.408]}
        />
        <group
          name="Area001"
          position={[0.743, 4.606, 5.301]}
          rotation={[-0.696, 0.086, 0.766]}
        />
        <group
          name="Area002"
          position={[4.193, 4.456, -3.619]}
          rotation={[-2.101, 0.695, 1.916]}
        />
        <group
          name="Area003"
          position={[-2.947, 3.606, -6.159]}
          rotation={[-2.66, -0.447, 2.184]}
        />
        <group
          name="Area004"
          position={[-6.811, -6.308, 3.052]}
          rotation={[0.644, -0.935, -1.393]}
        />
        <group
          name="Area005"
          position={[-5.878, -6.738, -4.125]}
          rotation={[2.166, -0.634, -0.307]}
        />
        <group
          name="Area006"
          position={[3.062, -9.568, -2.237]}
          rotation={[1.935, 0.292, 2.025]}
        />
        <group
          name="Area007"
          position={[1.759, -8.112, 5.134]}
          rotation={[0.581, 0.292, 1.431]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Models/lightPlanet.gltf");
