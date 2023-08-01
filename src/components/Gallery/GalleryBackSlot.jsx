import "./Gallery.css";
import { useEffect, useRef, useState } from "react";
import image1 from "../../../public/assets/projetPd1.jpg";
import image2 from "../../../public/assets/projetPd2.jpg";
import image3 from "../../../public/assets/projetPd3.jpg";
import image4 from "../../../public/assets/projetPd4.jpg";
import image5 from "../../../public/assets/projetPd5.jpg";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/theme.context";

export default function Gallery({ divCount, visibleDivs, isEnglish }) {
  const [isActive, setisActive] = useState(false);
  const galleryContainer = useRef();
  const { t } = useTranslation();
  const { theme } = useTheme();

  const itemsArray = [];

  useEffect(() => {
    console.log(theme);
    if (itemsArray.length == 0) {
      const newArray = Array.from(galleryContainer.current.childNodes);
      itemsArray.push(...newArray);
    }
  }, [, isActive, divCount, visibleDivs, isEnglish, theme]);

  const galleryOnClickPrev = () => {
    itemsArray.forEach((el) => {
      el.classList.remove("gallery-item-1");
      el.classList.remove("gallery-item-2");
      el.classList.remove("gallery-item-3");
      el.classList.remove("gallery-item-4");
      el.classList.remove("gallery-item-5");
    });

    itemsArray.unshift(itemsArray.pop());

    itemsArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item-${i + 1}`);
    });
  };
  const galleryOnClickNext = () => {
    itemsArray.forEach((el) => {
      el.classList.remove("gallery-item-1");
      el.classList.remove("gallery-item-2");
      el.classList.remove("gallery-item-3");
      el.classList.remove("gallery-item-4");
      el.classList.remove("gallery-item-5");
    });

    itemsArray.push(itemsArray.shift());

    itemsArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item-${i + 1}`);
    });
  };

  return (
    <div className="gallery h-screen flex flex-col justify-evenly select-none p-8 text-gray-950 dark:text-slate-100">
      <div className="h-1/2 relative">
        <div ref={galleryContainer} className="gallery-container">
          <img
            src={image1}
            alt="slide_image"
            className="rounded-md gallery-item gallery-item-1"
            data-index="1"
          />

          <img
            src={image2}
            alt="slide_image"
            className="rounded-md gallery-item gallery-item-2"
            data-index="2"
          />

          <img
            src={image3}
            alt="slide_image"
            className="rounded-md gallery-item gallery-item-3"
            data-index="3"
          />

          <img
            src={image5}
            alt="slide_image"
            className="rounded-md gallery-item gallery-item-4"
            data-index="4"
          />

          <img
            src={image4}
            alt="slide_image"
            className="rounded-md gallery-item gallery-item-5"
            data-index="5"
          />
        </div>
        <div className="gallery-controls mb-8">
          <BsArrowLeftCircle
            onClick={galleryOnClickPrev}
            className="text-2xl cursor-pointer mx-4 button-prev hover:scale-110 absolute left-32 top-[50%]"
          />
          <BsArrowLeftCircle
            onClick={galleryOnClickNext}
            className="rotate-180 text-2xl cursor-pointer mx-4 hover:scale-110 absolute right-32 top-[50%]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-1/2 h-1/2 mx-auto mt-8 border-2 border-gray-400 dark:border-slate-100 rounded-md bg-white dark:bg-bgGray">
        {/* <hr className="w-1/5 mx-auto my-8 border-gray-950 dark:border-slate-100" /> */}
        <div className="w-full flex justify-around text-3xl font-extrabold ">
          <p
            onClick={() => setisActive(true)}
            className={`w-1/2 h-full  text-center italic p-4 cursor-pointer  ${
              isActive
                ? " border-gray-400 border-b dark:border-slate-100"
                : "text-slate-200 dark:text-gray-700 "
            } `}
          >
            {t("details")}
          </p>
          <p
            onClick={() => setisActive(false)}
            className={`w-1/2 h-full  text-center italic p-4 cursor-pointer ${
              !isActive
                ? " border-gray-950 border-b dark:border-slate-100"
                : "text-slate-200 dark:text-gray-700"
            } `}
          >
            {t("summary")}
          </p>
        </div>
        {isActive && (
          <div className="w-full h-full flex flex-col items-center justify-center leading-10 tracking-wide p-8">
            <p>
              <span className="font-bold">Nom du projet :</span> Back Slot
            </p>
            <p>
              <span className="font-bold">Front :</span> React, typescript
            </p>
            <p>
              <span className="font-bold">Back :</span> Node, Express, Prisma,
              TypeGraphQl
            </p>
            <p>
              <span className="font-bold">Equipe :</span> Seul
            </p>
          </div>
        )}
        {!isActive && (
          <p className="w-full h-full flex justify-center items-center text-center font-semibold p-8 leading-10 tracking-wide">
            {t("backSlot_resume")}
          </p>
        )}
      </div>
    </div>
  );
}
