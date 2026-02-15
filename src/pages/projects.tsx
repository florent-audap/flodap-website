import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FaLock, FaRegArrowAltCircleRight } from "react-icons/fa";
import { GrBike } from "react-icons/gr";
import { PiMonitorBold, PiPillFill } from "react-icons/pi";

export default function ProjectsPage() {
  type ProjectState = "In Progress" | "Finished";

  interface Project {
    title: string;
    state: ProjectState;
    logo: ReactNode;
    link: string;
    description: ReactNode;
    confidential: boolean;
  }

  const projects: Project[] = [
    {
      title: "Personal Website",
      state: "In Progress",
      logo: <PiMonitorBold size="30" />,
      link: "https://github.com/florent-audap/flodap-website/",
      description:
        "This project consists in building the website where you currently are to improve in building a React App from scratch. It leverages modern technologies like Vite, TypeScript, and Tailwind CSS to create a fast and responsive user interface from coding to deployment on Vercel.",
      confidential: false,
    },
    {
      title: "Optimization of cytotoxic drug production",
      state: "Finished",
      logo: <PiPillFill size="30" />,
      link: "",
      description:
        "Carried out for the Gustave Roussy Hospital, this project aimed to optimize the production flow of cytotoxic drugs to reduce patient waiting times. We developed a graphical user interface (GUI) to make an existing simulation model accessible to staff and created an Excel tool to analyze production KPIs, facilitating continuous process improvement.",
      confidential: true,
    },
    {
      title:
        "Study of flax fiber reinforced composites for application in bicycle frames",
      state: "Finished",
      logo: <GrBike size="30" />,
      link: "/projects/bike-flax-fiber",
      description:
        "This project investigates the viability of flax fiber composites as a sustainable alternative for bicycle frames. Through experimental characterization of manufactured samples and numerical simulations, I validated that this eco-friendly material can withstand the necessary mechanical loads.",
      confidential: false,
    },
  ];

  return (
    <div className="container mx-auto px-2 py-8 md:px-4 lg:w-2/3">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-5xl font-bold">My projects</h1>
        <p>
          Here you can see some projects I have made and ones that I'm working
          on
        </p>
      </div>
      {/* List of the projects */}
      {projects.map((project) => {
        const cardContent = (
          <div className="flex space-x-4 p-5">
            <div className="text-primary mx-2">{project.logo}</div>
            <div className="flex-1">
              <h2 className="text-primary -mb-0.5 text-lg">{project.title}</h2>
              <div className="text-xs font-semibold uppercase opacity-60">
                {project.state}
              </div>
              <div className="mt-3 text-sm opacity-90">
                {project.description}
              </div>
            </div>
            {!project.confidential && (
              <div className="flex min-w-fit items-center">
                <div className="mx-3 flex flex-col items-center">
                  <FaRegArrowAltCircleRight size="30" />
                  <div className="text-xs italic">See more</div>
                </div>
              </div>
            )}
            {project.confidential && (
              <div className="mx-1 flex items-center text-red-800">
                <div className="flex flex-col items-center">
                  <FaLock size="30" />
                  <div className="text-xs italic">Confidential</div>
                </div>
              </div>
            )}
          </div>
        );
        return (
          <div
            key={project.title}
            className="card border-base-300 hover:border-base-content bg-base-300 my-6 border transition-colors duration-300"
          >
            {project.link ? (
              project.link.includes("https") ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cardContent}
                </a>
              ) : (
                <Link to={project.link}>{cardContent}</Link>
              )
            ) : (
              cardContent
            )}
          </div>
        );
      })}
      <div className="mt-12 text-center">
        <h2 className="text-xl italic">
          The other projects will appear here soon...
        </h2>
      </div>
    </div>
  );
}
