import "./Gallery.css";
import { useEffect, useRef, useState } from "react";
import image1 from "../../assets/projetPd1.jpg";
import image2 from "../../assets/projetPd2.jpg";
import image3 from "../../assets/projetPd3.jpg";
import { BsArrowLeftCircle } from "react-icons/bs";

export default function Gallery({ divCount, visibleDivs }) {
  const [isActive, setisActive] = useState(false);
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

  return (
    <div className="gallery h-screen select-none">
      <div ref={galleryContainer} className="gallery-container">
        <img
          src={image1}
          alt="slide_image"
          className="rounded-md gallery-item gallery-item-1"
          data-index="1"
        />

        <img
          src={image1}
          alt="slide_image"
          className="rounded-md gallery-item gallery-item-2"
          data-index="2"
        />

        <img
          src={image2}
          alt="slide_image"
          className="rounded-md gallery-item gallery-item-3"
          data-index="3"
        />

        <img
          src={image3}
          alt="slide_image"
          className="rounded-md gallery-item gallery-item-4"
          data-index="4"
        />

        <img
          src={image3}
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
      <div className="flex flex-col items-center justify-center w-1/2 mx-auto  m-4 text-slate-100">
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
              isActive ? "border-b" : ""
            } `}
          >
            Résumé
          </p>
        </div>
        {isActive && (
          <div className="w-full flex flex-col items-center justify-center text-lg leading-10 tracking-wide p-8 ">
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
          <p className="w-full  text-center p-8 leading-10 tracking-wide ">
            Il s'agit d'une plateforme servant à faciliter et centraliser les
            échanges d’informations entre l’agence et les clients, de rendre
            plus visible la progression des projet pour les deux parties et
            permettre une communication plus rapide et précise sur les attendues
            et modifications nécessaires à la réalisation des projets. C'est le
            projet que j'ai présenté pour mon dîplome qui m'a vallut les
            félicitations du jury. J'ai tout réalisé seul, de l'expression des
            besoins à la mise en production, en passant par le cahier des charge
            et le design.
          </p>
        )}
      </div>
    </div>
  );
}
