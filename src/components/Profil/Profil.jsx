import React, { useState } from "react";
import photo from "../../assets/photojungle.jpg";
import CV from "../../assets/CV.jpg";
import { FiMail } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineFileSearch } from "react-icons/ai";

export default function Profil() {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);
  return (
    <div className="h-screen w-full flex p-8 relative ">
      <div className="w-1/3 h-full flex flex-col border-t border-l rounded-l-lg rounded-b-none">
        <div className=" h-[80vh] w-3/4 m-16 relative rounded-lg">
          <img
            src={photo}
            alt="photo-de-profile"
            className="h-full w-full object-cover object-top rounded-lg "
          />
          <div className="absolute -bottom-12 -right-12 w-2/3 h-1/2 flex flex-col justify-evenly text-slate-100 bg-black bg-opacity-90 rounded-lg border-r border-b p-8 text-lg leading-10">
            <h2 className="font-bold text-2xl mb-4">CONTACT :</h2>
            <div className="flex items-center">
              <FiMail className="mr-2" />
              <p> - r.carondw@gmail.com</p>
            </div>
            <div className="flex items-center">
              <AiFillLinkedin className="mr-2" />
              <a
                href="https://www.linkedin.com/in/r%C3%A9mi-caron-07b920219/"
                target="_blank"
              >
                - Mon profil
              </a>
            </div>
            <div className="flex items-center">
              <AiFillGithub className="mr-2" />
              <a href="https://github.com/rcarondw" target="_blank">
                - GitHub
              </a>
            </div>
            <div className="flex items-center">
              <AiOutlineFileSearch className="mr-2" />
              <p className="cursor-pointer" onClick={() => setIsActive(true)}>
                - Mon CV
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-2/3 flex flex-col items-center justify-around text-slate-100 px-32 py-16">
        {/* <h2 className=" self-start text-3xl font-bold">Présentation :</h2> */}
        <p className="text-justify leading-10 tracking-wide ">
          <span className="ml-20"></span>Je m'appelle{" "}
          <span className="font-extrabold">Rémi Caron</span>, j'ai 32 ans et je
          viens de valider avec succès mon diplôme de développeur d'applications
          web et mobile avancées, une formation enrichissante que j'ai suivie
          avec brio à la{" "}
          <span className="font-extrabold">"Wild Code School"</span>, où j'ai
          été chaleureusement félicité par le jury. <br />
          <span className="ml-20"></span>Durant ces deux années de formation,
          j'ai eu la chance de participer à divers projets, que ce soit au sein
          de l'école ou en entreprise pendant mon alternance. Mon expertise
          s'est principalement focalisée sur{" "}
          <span className="font-extrabold">React</span> en front-end, que j'ai
          su associer à <span className="font-extrabold">Tailwind</span>, dont
          je maîtrise désormais toutes les subtilités. En ce qui concerne le
          back-end, j'ai travaillé avec
          <span className="font-extrabold"> Node/Express</span> en utilisant{" "}
          <span className="font-extrabold">Prisma</span> avec GraphQL, et bien
          sûr, j'ai réalisé tous ces projets avec{" "}
          <span className="font-extrabold">TypeScript</span> pour une meilleure
          sécurité et efficacité. J'ai également eu l'occasion de coder des
          projets en <span className="font-extrabold">Next.js</span>, ainsi que
          des applications complètes en{" "}
          <span className="font-extrabold">
            MERN (MongoDB, Express, React, Node.js)
          </span>
          . Durant mon alternance, j'ai même eu l'opportunité de travailler sur
          un projet avec <span className="font-extrabold">WordPress</span>, ce
          qui m'a permis d'élargir mes compétences et de diversifier mes
          connaissances dans le domaine du développement. <br />{" "}
          <span className="ml-20"></span>En parallèle de mon apprentissage en
          développement, j'ai également acquis une solide maîtrise de{" "}
          <span className="font-extrabold">Figma</span>, grâce à la création de
          plusieurs designs de site pour l'entreprise dans laquelle j'étais
          alternant, ainsi que pour un projet de cours. De plus, je suis
          actuellement en train de me former sur{" "}
          <span className="font-bold">Blender</span> en association avec{" "}
          <span className="font-bold">three.js</span>, ouvrant ainsi de
          nouvelles perspectives passionnantes dans le monde de la 3D. <br />
          <span className="ml-20"></span>Aujourd'hui, fort de toutes ces
          expériences et compétences, je suis animé par une forte volonté
          d'apprendre et de progresser davantage dans le domaine qui me
          passionne tant. Je suis donc à la recherche de mon premier emploi dans
          la tech, motivé et déterminé à mettre en pratique mes connaissances
          tout en continuant à enrichir mon savoir-faire.
        </p>
      </div>
      {isActive && (
        <div
          className="absolute top-0 left-0 w-full h-full z-50 bg-black bg-opacity-80 flex justify-center items-center"
          onClick={() => setIsActive(false)}
        >
          <img src={CV} alt="cv" className="h-[90%]" />
        </div>
      )}
    </div>
  );
}
