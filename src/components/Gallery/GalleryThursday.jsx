import "./Gallery.css";
import { useEffect, useRef, useState } from "react";
import image1 from "../../assets/MondayDark1.jpg";
import image2 from "../../assets/MondayDark2.jpg";
import image3 from "../../assets/MondayDark3.jpg";
import image4 from "../../assets/MondayDark4.jpg";
import image5 from "../../assets/MondayDark5.jpg";
import { BsArrowLeftCircle } from "react-icons/bs";

export default function Gallery({ divCount, visibleDivs }) {
  const [isActive, setisActive] = useState(false);
  const [imageFocused, setImageFocused] = useState();
  const [isFocus, setIsFocus] = useState(false);
  const galleryContainer = useRef();

  const itemsArray = [];

  useEffect(() => {
    if (itemsArray.length == 0) {
      const newArray = Array.from(galleryContainer.current.childNodes);
      itemsArray.push(...newArray);
    }
  }, [, isActive, divCount, visibleDivs]);

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

  const handleFocus = (e) => {
    setIsFocus(true);
    setImageFocused(e.target.currentSrc);
  };

  return (
    <div className="gallery h-screen select-none flex flex-col justify-evenly relative p-8">
      <div className="h-1/2">
        <div ref={galleryContainer} className="gallery-container">
          <img
            src={image1}
            alt="slide_image"
            className="rounded-md gallery-item gallery-item-1"
            data-index="1"
            // onClick={(e) => handleFocus(e)
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
            src={image4}
            alt="slide_image"
            className="rounded-md gallery-item gallery-item-4"
            data-index="4"
          />

          <img
            src={image5}
            alt="slide_image"
            className="rounded-md gallery-item gallery-item-5"
            data-index="5"
          />
        </div>
        <div className="gallery-controls text-slate-100 mb-8">
          <BsArrowLeftCircle
            onClick={galleryOnClickPrev}
            className="text-2xl cursor-pointer mx-4 button-prev hover:scale-110"
          />
          <BsArrowLeftCircle
            onClick={galleryOnClickNext}
            className="rotate-180 text-2xl cursor-pointer mx-4 hover:scale-110"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-2/3 h-1/2 mx-auto mt-16  text-slate-100">
        <hr className="w-1/5 mx-auto my-8" />
        <div className="w-full flex justify-around text-3xl font-extrabold">
          <p
            onClick={() => setisActive(true)}
            className={`  text-center italic p-4 cursor-pointer hover:border-b ${
              isActive ? "border-b" : ""
            } `}
          >
            Détails
          </p>
          <p
            onClick={() => setisActive(false)}
            className={`  text-center italic p-4 cursor-pointer hover:border-b ${
              !isActive ? "border-b" : ""
            } `}
          >
            Résumé
          </p>
        </div>
        {isActive && (
          <div className="w-full flex flex-col items-center leading-10 tracking-wide p-8">
            <p>
              {" "}
              <span className="font-bold">Nom du projet:</span> Thursday
            </p>
            <p>
              {" "}
              <span className="font-bold">Front :</span> React, Typescript
            </p>
            <p>
              {" "}
              <span className="font-bold">Back :</span> Node, Express, Prisma,
              TypeGraphQl
            </p>
            <p>
              {" "}
              <span className="font-bold">Equipe :</span> Quatre membres
            </p>
          </div>
        )}
        {!isActive && (
          <p className="w-full  text-center  p-8 leading-10 tracking-wide">
            Projet réalisé durant mon master avec mon équipe, nous devions
            développer un CRM et nous avons choisi de faire un clone de
            "Trello". Tout est fonctionnel, de la création des tickets, leurs
            modifications, les changements de colone en gardant le bon ordre et
            la suppression. La création de groupe, de projet, tout ce qui touche
            au profil, tout fonctionne.
          </p>
        )}
      </div>
      {/* {isFocus && (
        <div className="absolute top-0 left-0 w-full h-full z-50 bg-black bg-opacity-70 flex flex-col justify-center items-center">
          <button
            className="w-24 text-white border"
            onClick={() => setIsFocus(false)}
          >
            Close
          </button>
          <img src={`${imageFocused}`} alt="tre" className="w-2/3 h-2/3" />
          <div className="text-white">
            <BsArrowLeftCircle
              onClick={galleryOnClickPrev}
              className="text-2xl cursor-pointer mx-4 button-prev hover:scale-110"
            />
            <BsArrowLeftCircle
              onClick={galleryOnClickNext}
              className="rotate-180 text-2xl cursor-pointer mx-4 hover:scale-110"
            />
          </div>
        </div>
      )} */}
    </div>
  );
}
