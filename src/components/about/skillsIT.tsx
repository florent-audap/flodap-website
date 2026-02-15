import CppLogo from "../../assets/about/IT-logo/cpp.svg";
import PythonLogo from "../../assets/about/IT-logo/python.svg";
import RosLogo from "../../assets/about/IT-logo/Ros.svg";
import SolidworksLogo from "../../assets/about/IT-logo/solidworks.svg";
import ReactLogo from "../../assets/about/IT-logo/React.svg";
import WordpressLogo from "../../assets/about/IT-logo/wordpress.svg";
import CudaLogo from "../../assets/about/IT-logo/cuda.svg";
import ArduinoLogo from "../../assets/about/IT-logo/arduino.svg";
import { useRef, ReactNode } from "react";

interface Skill {
  title: string;
  logo: string;
  link: string;
  description: ReactNode;
}

const skills: Skill[] = [
  {
    title: "C++",
    logo: CppLogo,
    link: "https://cppreference.com/",
    description:
      "I used C++ in several projects, primarily during my first gap-year internship.",
  },
  {
    title: "Python",
    logo: PythonLogo,
    link: "https://www.python.org/",
    description:
      "I have used Python extensively in many projects, and it is the primary language I work with.",
  },
  {
    title: "React/TS",
    logo: ReactLogo,
    link: "https://react.dev/",
    description: (
      <>
        I have used React and TypeScript on several projects, including one for{" "}
        <a
          href="https://www.carecare.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          CareCare
        </a>{" "}
        and this website.
      </>
    ),
  },
  {
    title: "ROS",
    logo: RosLogo,
    link: "https://www.ros.org/",
    description:
      "I learned ROS during my gap-year internship while developing an autonomous car.",
  },
  {
    title: "SolidWorks",
    logo: SolidworksLogo,
    link: "https://www.solidworks.com/",
    description:
      "I have used SolidWorks since high school and am highly proficient in it.",
  },
  {
    title: "WordPress",
    logo: WordpressLogo,
    link: "https://wordpress.com/",
    description: (
      <>
        I have used WordPress to fully create a website for a student
        association and to redesign the{" "}
        <a
          href="https://www.wattsy.solutions/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          Wattsy
        </a>{" "}
        website.
      </>
    ),
  },
  {
    title: "Cuda",
    logo: CudaLogo,
    link: "https://developer.nvidia.com/cuda/",
    description: "Basic experience with GPU programming using CUDA.",
  },
  {
    title: "Arduino",
    logo: ArduinoLogo,
    link: "https://docs.arduino.cc/programming/",
    description: "Experience with some simple assembly (with an Arduino Uno).",
  },
];

export function SkillsIT() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <button
        className="btn btn-circle btn-sm btn-neutral absolute top-1/2 left-0 z-10 hidden -translate-y-1/2 opacity-75 hover:opacity-100 md:flex"
        onClick={() => scroll(-300)}
      >
        ❮
      </button>
      <button
        className="btn btn-circle btn-sm btn-neutral absolute top-1/2 right-0 z-10 hidden -translate-y-1/2 opacity-75 hover:opacity-100 md:flex"
        onClick={() => scroll(300)}
      >
        ❯
      </button>
      <div
        ref={carouselRef}
        className="carousel carousel-center rounded-box max-h-90 max-w-full space-x-4 p-4"
      >
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="carousel-item max-w-1/3 min-w-65"
          >
            <div className="card bg-base-300 rounded p-4 text-center">
              <h3 className="text-primary my-2 font-bold">{skill.title}</h3>
              <a
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-1/2 items-center justify-center"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.title} Logo`}
                  className="max-h-5/6"
                />
              </a>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
