import { useEffect, useState, useRef } from "react";
import "./App.css";
import GalleryBackSlot from "./components/Gallery/GalleryBackSlot";
import GalleryMonday from "./components/Gallery/GalleryMonday";
import Profil from "./components/Profil/Profil";
import ScrollArrows from "./components/ScrollArrows";
import Home from "./components/Home";

function App() {
  const [divCount, setDivCount] = useState(0);

  // useEffect(() => {
  //   const handleMouseWheel = (event) => {
  //     event.preventDefault();

  //     const scrollAmount = event.deltaY;
  //     const scrollDirection = scrollAmount > 0 ? "down" : "up";

  //     if (scrollDirection === "down") {
  //       setDivCount((prevCount) => (prevCount + 1 <= 3 ? prevCount + 1 : 3));
  //     } else {
  //       setDivCount((prevCount) => (prevCount - 1 >= 0 ? prevCount - 1 : 0));
  //     }
  //   };

  //   window.addEventListener("wheel", handleMouseWheel);

  //   return () => {
  //     window.removeEventListener("wheel", handleMouseWheel);
  //   };
  // }, [, divCount]);

  useEffect(() => {
    const targetElement = document.querySelector(`.box-${divCount}`);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [divCount]);

  const [visibleDivs, setVisibleDivs] = useState([]);

  const divsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const visibleDivs = divsRef.current
        .map((ref, index) => ({
          ref,
          index,
          top: ref.getBoundingClientRect().top,
          bottom: ref.getBoundingClientRect().bottom,
        }))
        .filter(
          ({ top, bottom }) =>
            top >= -window.innerHeight * 0.1 &&
            bottom <= window.innerHeight * 1.1
        )
        .map(({ index }) => index);

      setVisibleDivs(visibleDivs);
      if (parseInt(visibleDivs) >= 0) setDivCount(parseInt(visibleDivs));
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="bigBox">
      <ScrollArrows divCount={divCount} setDivCount={setDivCount} />
      <div ref={(ref) => (divsRef.current[0] = ref)} className=" box box-0 ">
        <Home />
      </div>
      <hr className="w-1/3 mx-auto my-32" />
      <div ref={(ref) => (divsRef.current[1] = ref)} className="box box-1">
        <Profil />
      </div>
      <hr className="w-1/3 mx-auto my-32" />

      <div ref={(ref) => (divsRef.current[2] = ref)} className="box box-2">
        <GalleryBackSlot divCount={divCount} visibleDivs={visibleDivs} />
      </div>
      <hr className="w-1/3 mx-auto my-32" />

      <div ref={(ref) => (divsRef.current[3] = ref)} className="box box-3">
        <GalleryMonday divCount={divCount} visibleDivs={visibleDivs} />
      </div>
    </div>
  );
}

export default App;
