import React from "react";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center text-white home">
      <div className="w-1/2 flex justify-center items-center">
        <h1 className="w-2/3 text-9xl font-extrabold flex flex-col justify-evenly px-16 italic">
          <span className=" self-end">- PORT</span>
          <hr className="mt-4 " />
          <span className="border-t-4">FOLIO -</span>
        </h1>
      </div>
      <div className="w-1/2 "></div>
    </div>
  );
}
