import { Link } from "react-router-dom";
import VersaillesFlo from "../assets/Versailles-Flo.webp";
import ProjetTIPE from "../assets/home/ProjetTIPE.jpeg";
import SerrageMain from "../assets/home/SerrageMain.jpeg";
import VacancesMontagne from "../assets/home/VacancesMontagne.jpeg";

export default function HomePage() {
  return (
    <>
      <div className="my-10">
        <h1 className="mt-10 text-center">Welcome to my personal website !</h1>
        <p className="text-center">
          Here you will find topics I love, information about myself, and
          presentation of some projects I’ve worked on, as well as ideas and
          experiences that matter to me.
        </p>
      </div>
      <div className="hero bg-base-200 min-h-50">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={VersaillesFlo}
            className="max-w-80 rounded-lg shadow-xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Who am I ?</h1>
            <p className="py-6">
              Hello, My name is Florent Audap and I am a young engineer
              graduated from CentraleSupelec. I love engineering and I want to
              have a positive impact as an engineer of the 21st century.
            </p>
            <Link
              to="/about"
              className="btn btn-primary"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
      <h2 className="text-primary my-15 text-center">
        What can you find in this website ?
      </h2>
      <div className="mb-10 flex flex-wrap justify-center gap-10">
        <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img
              src={SerrageMain}
              alt="My Projects Image"
              className="h-48 w-full object-cover object-[center_45%]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Blog</h2>
            <p>
              Here I talk about subjects I love. It could be about a technology,
              a science concept or everything I want to share and talk about
            </p>
            <div className="card-actions justify-end">
              <Link
                to="/blog"
                className="btn btn-primary"
              >
                Go to the page
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img
              src={ProjetTIPE}
              alt="My Projects Image"
              className="h-48 w-full object-cover object-[center_40%]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">My projects</h2>
            <p>
              On this page, I present my projects, highlighting what I’ve
              created and the experiences behind them.
            </p>
            <div className="card-actions justify-end">
              <Link
                to="/projects"
                className="btn btn-primary"
              >
                Go to the page
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-lg">
          <figure>
            <img
              src={VacancesMontagne}
              alt="My Projects Image"
              className="h-48 w-full object-cover object-[center_40%]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">About Me</h2>
            <p>
              Here, I present who I am, including my passions, my education, and
              my professional journey.
            </p>
            <div className="card-actions justify-end">
              <Link
                to="/about"
                className="btn btn-primary"
              >
                Go to the page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
