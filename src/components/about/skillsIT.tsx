import CppLogo from "../../assets/about/IT-logo/cpp.svg";
import PythonLogo from "../../assets/about/IT-logo/python.svg";
import RosLogo from "../../assets/about/IT-logo/Ros.svg";
import SolidworksLogo from "../../assets/about/IT-logo/solidworks.svg";
import ReactLogo from "../../assets/about/IT-logo/React.svg";
import WordpressLogo from "../../assets/about/IT-logo/wordpress.svg";
import CudaLogo from "../../assets/about/IT-logo/cuda.svg";
import ArduinoLogo from "../../assets/about/IT-logo/arduino.svg";
import { useRef } from "react";

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
            <a
              href="https://cppreference.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-1/2 flex justify-center items-center"
            >
              <img src={CppLogo} alt="Cpp Logo" className="max-h-5/6" />
            </a>
            <p>
              I used C++ in several projects, primarily during my first gap-year
              internship.
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
              className="h-1/2 flex justify-center items-center"
            >
              <img src={PythonLogo} alt="Python Logo" className="max-h-5/6" />
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
              className="h-1/2 flex justify-center items-center"
            >
              <img src={ReactLogo} alt="React Logo" className="max-h-5/6" />
            </a>
            <p>
              I have used React and TypeScript on several projects, including
              one for{" "}
              <a
                href="https://www.carecare.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
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
              className="h-1/2 flex justify-center items-center"
            >
              <img src={RosLogo} alt="ROS Logo" className="max-h-5/6" />
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
              className="h-1/2 flex justify-center items-center"
            >
              <img
                src={SolidworksLogo}
                alt="SolidWorks Logo"
                className="max-h-5/6"
              />
            </a>
            <p>
              I have used SolidWorks since high school and am highly proficient
              in it.
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
              className="h-1/2 flex justify-center items-center"
            >
              <img
                src={WordpressLogo}
                alt="Wordpress Logo"
                className="max-h-5/6"
              />
            </a>
            <p>
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
              className="h-1/2 flex justify-center items-center"
            >
              <img src={CudaLogo} alt="Cuda Logo" className="max-h-5/6" />
            </a>
            <p>Basic experience with GPU programming using CUDA.</p>
          </div>
        </div>
        <div className="carousel-item min-w-65 max-w-1/3">
          <div className="card bg-base-300 text-center p-4">
            <h3 className="font-bold my-2 text-primary">Arduino</h3>
            <a
              href="https://docs.arduino.cc/programming/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-1/2 flex justify-center items-center"
            >
              <img src={ArduinoLogo} alt="Arduino Logo" className="max-h-5/6" />
            </a>
            <p>Experience with some simple assembly (with an Arduino Uno).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
