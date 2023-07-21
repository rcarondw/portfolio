import { useEffect, useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";

export default function ScrollArrows({ divCount, setDivCount }) {
  const [stopPrev, setStopPrev] = useState(false);
  const [stopNext, setStopNext] = useState(false);

  useEffect(() => {
    console.log(divCount);
    if (divCount === 0) {
      setStopPrev(true);
    } else {
      setStopPrev(false);
    }
    if (divCount === 3) {
      setStopNext(true);
    } else {
      setStopNext(false);
    }
  }, [, divCount]);

  const handleScrollNext = () => {
    if (!stopNext) {
      setDivCount(divCount + 1);
    } else return;
  };

  const handleScrollPrev = () => {
    if (!stopPrev) {
      setDivCount(divCount - 1);
    } else return;
  };

  return (
    <div className=" w-10 h-screen right-8 fixed z-50 flex flex-col justify-between items-center py-8">
      <BsArrowUpCircle
        onClick={handleScrollPrev}
        className={`  text-4xl cursor-pointer ${
          stopPrev ? "text-slate-600" : "text-slate-100"
        }`}
      />
      <div className="h-full flex flex-col justify-center items-center gap-2 ">
        <span
          onClick={() => setDivCount(0)}
          className={`h-[5vh] w-1.5 border border-slate-500 cursor-pointer ${
            divCount === 0 ? "bg-slate-100" : "bg-black"
          }`}
        ></span>
        <span
          onClick={() => setDivCount(1)}
          className={`h-[5vh] w-1.5 border border-slate-500 cursor-pointer ${
            divCount === 1 ? "bg-slate-100" : "bg-black"
          }`}
        ></span>
        <span
          onClick={() => setDivCount(2)}
          className={`h-[5vh] w-1.5 border border-slate-500 cursor-pointer ${
            divCount === 2 ? "bg-slate-100" : "bg-black"
          }`}
        ></span>
        <span
          onClick={() => setDivCount(3)}
          className={`h-[5vh] w-1.5 border border-slate-500 cursor-pointer ${
            divCount === 3 ? "bg-slate-100" : "bg-black"
          }`}
        ></span>
      </div>
      <BsArrowUpCircle
        onClick={handleScrollNext}
        className={`rotate-180 text-4xl  cursor-pointer ${
          stopNext ? "text-slate-600" : "text-slate-100"
        }`}
      />
    </div>
  );
}
