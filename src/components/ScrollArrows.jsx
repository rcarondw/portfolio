import i18next from "i18next";
import { useEffect, useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
// import { CiDark } from "react-icons/ci";
import { useTheme } from "../context/theme.context";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

export default function ScrollArrows({
  divCount,
  setDivCount,
  isEnglish,
  setIsEnglish,
}) {
  const [stopPrev, setStopPrev] = useState(false);
  const [stopNext, setStopNext] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
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

  const handleLang = (props) => {
    if (props === "fr") {
      setIsEnglish(false);
    } else setIsEnglish(true);
    i18next.changeLanguage(props);
  };

  const handleDarkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className=" w-10 h-screen right-8 fixed z-50 flex flex-col justify-between items-center py-8 text-gray-950 dark:text-slate-100">
      <div className="flex flex-col items-center gap-6">
        <BsArrowUpCircle
          onClick={handleScrollPrev}
          className={`  text-4xl cursor-pointer  ${
            stopPrev ? "text-slate-600" : " hover:scale-110"
          }`}
        />
        {isEnglish ? (
          <span
            className=" cursor-pointer text-lg font-semibold "
            onClick={() => handleLang("fr")}
          >
            En
          </span>
        ) : (
          <span
            className=" cursor-pointer text-lg font-semibold "
            onClick={() => handleLang("en")}
          >
            Fr
          </span>
        )}
      </div>
      <div className="h-full flex flex-col justify-center items-center gap-2 ">
        <span
          onClick={() => setDivCount(0)}
          className={`h-[5vh] w-1.5 border border-slate-500 cursor-pointer ${
            divCount === 0
              ? "dark:bg-slate-100 bg-gray-950"
              : "dark:bg-gray-950 bg-slate-100"
          }`}
        ></span>
        <span
          onClick={() => setDivCount(1)}
          className={`h-[5vh] w-1.5 border border-slate-500 cursor-pointer ${
            divCount === 1
              ? "dark:bg-slate-100 bg-gray-950"
              : "dark:bg-gray-950 bg-slate-100"
          }`}
        ></span>
        <span
          onClick={() => setDivCount(2)}
          className={`h-[5vh] w-1.5 border border-slate-500 cursor-pointer ${
            divCount === 2
              ? "dark:bg-slate-100 bg-gray-950"
              : "dark:bg-gray-950 bg-slate-100"
          }`}
        ></span>
        <span
          onClick={() => setDivCount(3)}
          className={`h-[5vh] w-1.5 border border-slate-500 cursor-pointer ${
            divCount === 3
              ? "dark:bg-slate-100 bg-gray-950"
              : "dark:bg-gray-950 bg-slate-100"
          }`}
        ></span>
      </div>
      <div className="flex flex-col items-center gap-6">
        {theme === "light" ? (
          // <CiDark
          //   className="text-2xl cursor-pointer"
          //   onClick={handleDarkMode}
          // />
          <BsMoonFill
            className="text-2xl cursor-pointer"
            onClick={handleDarkMode}
          />
        ) : (
          <BsFillSunFill
            className="text-2xl cursor-pointer"
            onClick={handleDarkMode}
          />
        )}
        <BsArrowUpCircle
          onClick={handleScrollNext}
          className={`rotate-180 text-4xl  cursor-pointer  ${
            stopNext ? "text-slate-600" : " hover:scale-110"
          }`}
        />
      </div>
    </div>
  );
}
