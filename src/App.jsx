import { useEffect, useState, useRef } from "react";
import "./App.css";
import GalleryBackSlot from "./components/Gallery/GalleryBackSlot";
import GalleryThursday from "./components/Gallery/GalleryThursday";
import Profil from "./components/Profil/Profil";
import ScrollArrows from "./components/ScrollArrows";
import Home from "./components/Home";
import { useTheme } from "./context/theme.context";

function App() {
  const [divCount, setDivCount] = useState(0);
  const [isEnglish, setIsEnglish] = useState(false);
  const [bgImage, setBgImage] = useState({});
  const { theme } = useTheme();

  console.log(theme);

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
            top >= -window.innerHeight * 0.2 &&
            bottom <= window.innerHeight * 1.2
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

  useEffect(() => {
    if (theme === "light") {
      setBgImage({
        backgroundImage: 'url("/assets/bgAll.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      });
    } else {
      setBgImage({
        // backgroundImage: 'url("../public/assets/Accueil.jpg")',
        backgroundImage: 'url("/assets/bgAll.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      });
    }
  }, [, theme]);

  return (
    <div className="bg-fixed" style={bgImage}>
      <ScrollArrows
        divCount={divCount}
        setDivCount={setDivCount}
        isEnglish={isEnglish}
        setIsEnglish={setIsEnglish}
      />
      <div
        ref={(ref) => (divsRef.current[0] = ref)}
        className=" box box-0 bg-white dark:bg-bgGray dark:bg-opacity-90 bg-opacity-80"
      >
        <Home />
      </div>
      <div className="w-full py-32  bg-opacity-60">
        <hr className="w-1/4 border-2 border-gray-950 dark:border-slate-100 mx-auto" />
      </div>
      <div
        ref={(ref) => (divsRef.current[1] = ref)}
        className="box box-1 bg-white dark:bg-bgGray dark:bg-opacity-90 bg-opacity-80"
      >
        <Profil />
      </div>
      <div className="w-full py-32  bg-opacity-60">
        <hr className="w-1/4 border-2 border-gray-950 dark:border-slate-100 mx-auto" />
      </div>

      <div
        ref={(ref) => (divsRef.current[2] = ref)}
        className="box box-2 bg-white dark:bg-bgGray dark:bg-opacity-90 bg-opacity-80"
      >
        <GalleryBackSlot
          divCount={divCount}
          visibleDivs={visibleDivs}
          isEnglish={isEnglish}
        />
      </div>
      <div className="w-full py-32  bg-opacity-60">
        <hr className="w-1/4 border-2 border-gray-950 dark:border-slate-100 mx-auto" />
      </div>

      <div
        ref={(ref) => (divsRef.current[3] = ref)}
        className="box box-3 bg-white dark:bg-bgGray dark:bg-opacity-90 bg-opacity-80"
      >
        <GalleryThursday
          divCount={divCount}
          visibleDivs={visibleDivs}
          isEnglish={isEnglish}
        />
      </div>
    </div>
  );
}

export default App;
