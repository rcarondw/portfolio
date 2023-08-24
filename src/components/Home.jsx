import React from "react";
import { PlanetModel } from "../components/Models/Planet";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls, Sphere } from "@react-three/drei";
import { LightPlanetModel } from "./Models/LightPlanet";
import { DirectionalLight } from "three";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center text-gray-950 dark:text-slate-100 select-none">
      <div className="w-1/2 flex justify-center items-center">
        <h1 className="w-2/3 text-[130px] font-extrabold flex flex-col justify-evenly px-16 italic ">
          <div className=" flex justify-center items-center relative">
            <span className="visible-none self-end">- PORT</span>
            <span className="absolute opacity-80 glitchedAnim self-end">
              - PORT
            </span>
            <span className="absolute opacity-80 glitchedAnim self-end">
              - PORT
            </span>
            <span className="absolute opacity-80 glitchedAnim self-end">
              - PORT
            </span>
          </div>
          <hr className="mt-4 border-gray-950 dark:border-slate-100" />
          <div className=" flex justify-center items-center relative">
            <span className="visible-none self-end">FOLIO -</span>
            <span className="absolute opacity-80 glitchedAnim2 self-end">
              FOLIO -
            </span>
            <span className="absolute opacity-80 glitchedAnim2 self-end">
              FOLIO -
            </span>
            <span className="absolute opacity-80 glitchedAnim2 self-end">
              FOLIO -
            </span>
          </div>
          <span className="text-sm text-center mt-2 font-semibold">
            "work in progress"
          </span>
        </h1>
      </div>
      <div className="w-1/2 h-full planet hidden">
        <Canvas>
          {/* <OrbitControls /> */}
          <ambientLight intensity={0.4} />
          <pointLight position={[180, -30, 50]} intensity={1} />
          <pointLight position={[180, -50, 0]} intensity={1} />
          <pointLight position={[180, -180, -50]} intensity={1} />
          {/* <PlanetModel /> */}
          <LightPlanetModel />
        </Canvas>
      </div>
    </div>
  );
}
