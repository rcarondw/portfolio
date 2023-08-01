import React from "react";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center text-gray-950 dark:text-slate-100 select-none">
      <div className="w-1/2 flex justify-center items-center">
        <h1 className="w-2/3 text-9xl font-extrabold flex flex-col justify-evenly px-16 italic">
          <span className=" self-end">- PORT</span>
          <hr className="mt-4 border-gray-950 dark:border-slate-100" />
          <span className="border-t-4 border-gray-950 dark:border-slate-100">
            FOLIO -
          </span>
          <span className="text-sm text-center mt-2 font-semibold">
            "work in progress"
          </span>
        </h1>
      </div>
      <div className="w-1/2 "></div>
    </div>
  );
}
