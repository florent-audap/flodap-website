import { useRef } from "react";
import MapPointBirth from "../assets/about/MapPointBirth.png";
import CppLogo from "../assets/about/IT-logo/cpp.svg";
import PythonLogo from "../assets/about/IT-logo/python.svg";
import RosLogo from "../assets/about/IT-logo/Ros.svg";
import SolidworksLogo from "../assets/about/IT-logo/solidworks.svg";
import ReactLogo from "../assets/about/IT-logo/React.svg";
import WordpressLogo from "../assets/about/IT-logo/wordpress.svg";
import CudaLogo from "../assets/about/IT-logo/cuda.svg";

export default function AboutMePage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">About Me</h1>
        <p>You will know a lot of thing about my life until now</p>
      </div>
      {/* Timeline part */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">My life timeline</h1>
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        
         <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2025-2026</time>
            <div className="text-lg font-black">
              Final year and entrepreneurial focus
            </div>
            In my final year at CentraleSupélec, I am taking courses in computer
            systems architecture as well as entrepreneurship, allowing me to
            combine strong technical foundations with a broader
            business-oriented perspective. This year represents a true stepping
            stone toward the entrepreneurial world, as I will be able to
            dedicate my five-month final internship to working on an
            entrepreneurial project. It marks the beginning of my own venture,
            where I aim to apply both my engineering background and my growing
            interest in innovation and business development.
          </div>
          <hr />
        </li>
                <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10 md:text-begin">
            <time className="font-mono italic">2024-2025</time>
            <div className="text-lg font-black">
              Gap year and professional experiences
            </div>
            During my gap year, I completed two internships that allowed me to
            gain significant professional experience in both an industrial and a
            startup environment. I first joined Groupe Renault in Valladolid,
            Spain, as a software developer intern, where I worked on an
            autonomous vehicle project designed for factory use. My
            responsibilities included programming the vehicle using CAPL, C++
            and Python, as well as testing the system in real-world conditions.
            I then worked at{" "}
            <a
              href="https://wattsy.solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors"
            >
              Wattsy
            </a>{" "}
            in Paris as the CEO's right-hand assistant, supporting daily
            operations and working on the website.
          </div>
          <hr />
        </li>
                <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2022-2024</time>
            <div className="text-lg font-black">
              <a
                href="https://www.centralesupelec.fr/programmes/ingenieur-generaliste"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:underline transition-colors"
              >
                Engineering school at CentraleSupélec
              </a>
            </div>
            I spent my first two years at CentraleSupélec, near Paris, where I
            was immersed in a highly stimulating environment rich in academic
            and extracurricular activities. During this time, I joined a student
            association responsible for organizing a ski trip for more than 300
            students, allowing me to develop strong organizational and
            coordination skills. I also contributed to an innovation fair by
            helping with outreach to partners and by assisting in the
            organization on the day of the event. In parallel, I worked for the
            school on outreach and prospecting tasks, interacting with companies
            to help collect the apprenticeship tax, which gave me valuable
            professional and communication experience.
          </div>
          <hr />
        </li>
                <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2020-2022</time>
            <div className="text-lg font-black">
              <a
                href="https://www.eiffel-bordeaux.org/formations/cpge-ptsi-physique-technologie-sciences-de-lingenieur/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:underline transition-colors"
              >
                Preparatory classes in engineering
              </a>
            </div>
            I attended a PTSI/PT preparatory class in Bordeaux, where I studied
            advanced mathematics, physics, and engineering sciences in order to
            prepare for the competitive entrance exams to French engineering
            schools. These two years were particularly intense, requiring a high
            level of commitment and consistency, but they were also extremely
            stimulating. This experience allowed me not only to strengthen my
            scientific foundations, but also to learn a great deal about myself,
            especially in terms of resilience, work ethic, and personal limits.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2017-2020</time>
            <div className="text-lg font-black">
              Boarding school and academic orientation
            </div>
            I attended high school in a boarding school in Dax, where I
            discovered life in an internat and quickly gained a strong sense of
            autonomy. I genuinely enjoyed this period, as it helped me grow both
            personally and independently. This stage also marked an important
            moment for making decisions about my future, as I had to choose a
            clear academic direction. With the guidance of a career counselor, I
            decided to orient myself toward engineering studies. During this
            time, I also started running regularly with my father and friends,
            which became an important part of my routine.
          </div>
          <hr />
        </li>
                <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2005-2017</time>
            <div className="text-lg font-black">Starting school and sports</div>
            <p>
              I started playing Basque pelota at around the age of 6, which
              helped me develop technical skills, coordination, and discipline
              from an early age. I later took guitar lessons for four years,
              adding a creative and structured dimension to my personal
              development. I also played rugby for two years, strengthening my
              team spirit and commitment to sports. I began my academic journey
              without major difficulties, adapting smoothly to the school
              environment.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr/>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2002</time>
            <div className="text-lg font-black">My birth</div>
            This is where it all began. I was born in southwestern France, close
            to the ocean and the mountains.
            <img src={MapPointBirth} className="max-w-1/2 md:place-self-end" />
          </div>
        </li>



      
      </ul>
      {/* Divider */}
      <div className="divider" />
      {/* Skills part */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">My IT skills</h1>
        <p>
          These experiences enabled me to gain extensive knowledge in
          mathematics, physics, and various other subjects. In this section, I
          will discuss IT tools and programming languages I am familiar with.
        </p>
      </div>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 btn btn-circle btn-sm btn-neutral opacity-75 hover:opacity-100 hidden md:flex"
          onClick={() => scroll(-300)}
        >
          ❮
        </button>
        <button
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 btn btn-circle btn-sm btn-neutral opacity-75 hover:opacity-100 hidden md:flex"
          onClick={() => scroll(300)}
        >
          ❯
        </button>
        <div
          ref={carouselRef}
          className="carousel carousel-center rounded-box max-w-full max-h-90 space-x-4 p-4"
        >
          <div className="carousel-item min-w-65 max-w-1/3">
            <div className="card bg-base-300 rounded text-center p-4">
              <h3 className="font-bold my-2 text-primary">C++</h3>
              <a href=""></a>
              <img src={CppLogo} alt="Cpp Logo" className="h-1/2" />
              <p>
                I used C++ in several projects, primarily during my first
                gap-year internship.
              </p>
            </div>
          </div>
          <div className="carousel-item min-w-65 max-w-1/3">
            <div className="card bg-base-300 text-center p-4">
              <h3 className="font-bold my-2 text-primary">Python</h3>
              <a
                href="https://www.python.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-1/2 self-center-safe p-4"
              >
                <img
                  src={PythonLogo}
                  alt="Python Logo"
                  className="max-h-full"
                />
              </a>
              <p>
                I have used Python extensively in many projects, and it is the
                primary language I work with.
              </p>
            </div>
          </div>
          <div className="carousel-item min-w-65 max-w-1/3">
            <div className="card bg-base-300 text-center p-4">
              <h3 className="font-bold my-2 text-primary">React/TS</h3>
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-1/2 self-center-safe p-4"
              >
                <img src={ReactLogo} alt="React Logo" className="max-h-full" />
              </a>
              <p>
                I have used React and TypeScript on several projects, including
                one for{" "}
                <a
                  href="https://www.carecare.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  CareCare
                </a>{" "}
                and this website.
              </p>
            </div>
          </div>
          <div className="carousel-item min-w-65 max-w-1/3">
            <div className="card bg-base-300 text-center p-4">
              <h3 className="font-bold my-2 text-primary">ROS</h3>
              <a
                href="https://www.ros.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-1/2 self-center-safe p-4"
              >
                <img src={RosLogo} alt="ROS Logo" className="max-h-full" />
              </a>
              <p>
                I learned ROS during my gap-year internship while developing an
                autonomous car.
              </p>
            </div>
          </div>
          <div className="carousel-item min-w-65 max-w-1/3">
            <div className="card bg-base-300 text-center p-4">
              <h3 className="font-bold my-2 text-primary">SolidWorks</h3>
              <a
                href="https://www.solidworks.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-1/2 self-center-safe p-4"
              >
                <img
                  src={SolidworksLogo}
                  alt="SolidWorks Logo"
                  className="max-h-full"
                />
              </a>
              <p>
                I have used SolidWorks since high school and am highly
                proficient in it.
              </p>
            </div>
          </div>
          <div className="carousel-item min-w-65 max-w-1/3">
            <div className="card bg-base-300 text-center p-4">
              <h3 className="font-bold my-2 text-primary">WordPress</h3>
              <a
                href="https://wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-1/2 self-center-safe p-4"
              >
                <img
                  src={WordpressLogo}
                  alt="Wordpress Logo"
                  className="max-h-full"
                />
              </a>
              <p>
                I have used WordPress to fully create a website for a student
                association and to redesign the{" "}
                <a
                  href="https://www.wattsy.solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  Wattsy
                </a>{" "}
                website.
              </p>
            </div>
          </div>
          <div className="carousel-item min-w-65 max-w-1/3">
            <div className="card bg-base-300 text-center p-4">
              <h3 className="font-bold my-2 text-primary">Cuda</h3>
              <a
                href="https://developer.nvidia.com/cuda/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-1/2 self-center-safe p-4"
              >
                <img src={CudaLogo} alt="Cuda Logo" className="max-h-full" />
              </a>
              <p>Basic experience with GPU programming using CUDA.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
