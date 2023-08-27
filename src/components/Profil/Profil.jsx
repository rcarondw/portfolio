import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import photo from "../../assets/photojungle.webp";
import CV from "../../assets/CV.jpg";
import { FiMail } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineFileSearch } from "react-icons/ai";

export default function Profil({ setIsCopy }) {
  const [isActive, setIsActive] = useState(false);

  const handleCopy = () => {
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 3000);
  };

  return (
    <div className="h-screen w-full flex p-8 relative text-gray-950 dark:text-slate-100">
      <div className="w-1/3 h-full  lg:flex flex-col border-t-2 border-l-2 border-bgGray dark:border-slate-100 rounded-l-md rounded-b-none relative">
        <div className=" h-[80vh] lg:w-3/4 w-full lg:m-16 rounded-md">
          <img
            src={photo}
            alt="photo-de-profile"
            className="h-full w-full object-cover object-top rounded-md select-none"
          />
          <div className="absolute bottom-0 right-0 contactBox flex flex-col justify-evenly bg-slate-100 dark:bg-black rounded-md dark:bg-opacity-90 dark:border-slate-100 border-r-2 border-b-2 p-10 fSmall leading-10 shadow-lg">
            <h2 className="font-bold text-2xl mb-4">CONTACT :</h2>
            <div className="flex items-center">
              <FiMail className="mr-2" />
              <CopyToClipboard text="r.carondw@gmail.com">
                <p>
                  {" "}
                  -{" "}
                  <span
                    className="hover:underline select-none"
                    onClick={handleCopy}
                  >
                    Click
                  </span>
                </p>
              </CopyToClipboard>
            </div>
            <div className="flex items-center ">
              <AiFillLinkedin className="mr-2" />
              <a
                href="https://www.linkedin.com/in/r%C3%A9mi-caron-07b920219/"
                target="_blank"
              >
                -{" "}
                <span className="hover:underline select-none">Mon profil</span>
              </a>
            </div>
            <div className="flex items-center">
              <AiFillGithub className="mr-2" />
              <a href="https://github.com/rcarondw" target="_blank">
                - <span className="hover:underline select-none">GitHub</span>
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

      {/* <div className="h-full w-2/3 flex flex-col items-center justify-around px-32 py-16 ">
        {document.cookie === "i18next=fr" ? (
          <p className="text-justify leading-10 tracking-wide ">
            <span className="ml-20"></span>Je m'appelle{" "}
            <span className="font-extrabold">Rémi Caron</span>, j'ai 32 ans et
            je viens de valider avec succès mon diplôme de développeur
            d'applications web et mobile avancées, une formation enrichissante
            que j'ai suivie avec brio à la{" "}
            <span className="font-extrabold">"Wild Code School"</span>, où j'ai
            été chaleureusement félicité par le jury. <br />
            <span className="ml-20"></span>Durant ces deux années de formation,
            j'ai eu la chance de participer à divers projets, que ce soit au
            sein de l'école ou en entreprise pendant mon alternance. Mon
            expertise s'est principalement focalisée sur{" "}
            <span className="font-extrabold">React</span> en front-end, que j'ai
            su associer à <span className="font-extrabold">Tailwind</span>, dont
            je maîtrise désormais toutes les subtilités. En ce qui concerne le
            back-end, j'ai travaillé avec
            <span className="font-extrabold"> Node/Express</span> en utilisant{" "}
            <span className="font-extrabold">Prisma</span> avec{" "}
            <span className="font-extrabold">GraphQL</span>, et bien sûr, j'ai
            réalisé tous ces projets avec{" "}
            <span className="font-extrabold">TypeScript</span> pour une
            meilleure sécurité et efficacité. J'ai également eu l'occasion de
            coder des projets en <span className="font-extrabold">Next.js</span>
            , ainsi que des applications complètes en{" "}
            <span className="font-extrabold">
              MERN (MongoDB, Express, React, Node.js)
            </span>
            . Durant mon alternance, j'ai même eu l'opportunité de travailler
            sur un projet avec <span className="font-extrabold">WordPress</span>
            , ce qui m'a permis d'élargir mes compétences et de diversifier mes
            connaissances dans le domaine du développement. <br />{" "}
            <span className="ml-20"></span>En parallèle de mon apprentissage en
            développement, j'ai également acquis une solide maîtrise de{" "}
            <span className="font-extrabold">Figma</span>, grâce à la création
            de plusieurs designs de site pour l'entreprise dans laquelle j'étais
            alternant, ainsi que pour un projet de cours. De plus, je suis
            actuellement en train de me former sur{" "}
            <span className="font-bold">Blender</span> en association avec{" "}
            <span className="font-bold">Three.js</span>, ouvrant ainsi de
            nouvelles perspectives passionnantes dans le monde de la 3D. <br />
            <span className="ml-20"></span>Aujourd'hui, fort de toutes ces
            expériences et compétences, je suis animé par une forte volonté
            d'apprendre et de progresser davantage dans le domaine qui me
            passionne tant. Je suis donc à la recherche de mon premier emploi
            dans la tech, motivé et déterminé à mettre en pratique mes
            connaissances tout en continuant à enrichir mon savoir-faire.
          </p>
        ) : (
          <p className="text-justify leading-10 tracking-wide ">
            <span className="ml-20"></span>My name is{" "}
            <span className="font-extrabold">Rémi Caron</span>, I am 32 years
            old, and I have successfully completed my diploma in advanced web
            and mobile application development. I pursued this enriching
            training at{" "}
            <span className="font-extrabold">"Wild Code School"</span> and
            received warm congratulations from the jury.
            <br />
            <span className="ml-20"></span>During these two years of training, I
            had the opportunity to participate in various projects, both within
            the school and during my work placement in a company. My expertise
            primarily focuses on <span className="font-extrabold">React</span>{" "}
            in the front-end, which I skillfully combine with{" "}
            <span className="font-extrabold">Tailwind</span>, mastering all its
            subtleties. Regarding the back-end, I worked with{" "}
            <span className="font-extrabold"> Node/Express</span> using{" "}
            <span className="font-extrabold">Prisma</span> with{" "}
            <span className="font-extrabold"> GraphQl</span>, and of course, I
            executed all these projects with{" "}
            <span className="font-extrabold">TypeScript</span> for better
            security and efficiency. I also had the chance to code projects in{" "}
            <span className="font-extrabold">Next.js</span>, as well as complete
            applications in{" "}
            <span className="font-extrabold">
              MERN (MongoDB, Express, React, Node.js).
            </span>{" "}
            During my work placement, I even had the opportunity to work on a
            project with <span className="font-extrabold">WordPress</span>,
            which allowed me to broaden my skills and diversify my knowledge in
            the development field. In addition to my learning in development.
            <br />
            <span className="ml-20"></span>I have also acquired a strong
            proficiency in <span className="font-extrabold">Figma</span>, thanks
            to creating several website designs for the company I was interning
            at, as well as for a course project. Furthermore, I am currently
            training in <span className="font-bold">Blender</span> in
            association with <span className="font-bold">Three.js</span>, thus
            opening exciting new perspectives in the world of 3D. <br />
            <span className="ml-20"></span>Today, armed with all these
            experiences and skills, I am driven by a strong desire to learn and
            progress further in the field that I am so passionate about.
            Therefore, I am actively seeking my first job in the tech industry,
            motivated and determined to put my knowledge into practice while
            continuing to enrich my expertise.
          </p>
        )}
      </div> */}
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
