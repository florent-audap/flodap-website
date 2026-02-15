import { Link } from "react-router-dom";
import FlaxBike from "../../assets/bike-flax-fiber/BikeFLax.png";

export default function BikeFlaxFiber() {
  return (
    <div className="container mx-auto max-w-4xl py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">
        Study of flax fiber reinforced composites for application in bicycle
        frames
      </h1>
      <div className="mb-10 text-center italic opacity-80">
        <span className="font-bold">Date:</span> 2021-2022
      </div>

      <div className="text-md space-y-8 text-justify">
        <section className="flex flex-col items-center">
          <img
            src={FlaxBike}
            className="w-2/3 rounded-lg shadow-lg"
            alt="Bicycle frame and flax fiber"
          />
          <p className="mt-2 text-sm italic opacity-70">
            Bicycle frame and flax fiber
          </p>
        </section>

        <div className="text-center">
          <a
            href="/tipe.pdf"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download the slides (in French)
          </a>
        </div>

        <section>
          <h2 className="text-primary mb-4 text-2xl font-bold">
            Context & Objectives
          </h2>
          <p>
            Since the end of the lockdown, daily bicycle use has increased
            significantly. Combined with the growing awareness of climate
            change, there is a strong incentive to design in an eco-friendly
            manner. While current high-performance bike frames rely on carbon or
            glass fibers — which have a significant environmental footprint —
            flax fiber offers a much lower impact.
          </p>
          <p className="mt-4">
            The main objective was to answer the question:{" "}
            <strong>
              Are flax fiber composites strong enough to be used in a bicycle
              frame?
            </strong>{" "}
            To verify this, I needed to characterize the material properties
            experimentally and validate them through digital simulation.
          </p>
        </section>

        <section>
          <h2 className="text-primary mb-4 text-2xl font-bold">
            Manufacturing & Testing
          </h2>
          <p>
            Due to the lack of reliable data online and manufacturing
            disparities, I had to manufacture my own composite samples to
            compare materials. I used a{" "}
            <strong>hand lay-up process followed by vacuum bagging</strong>.
          </p>
          <p className="mt-2">
            I started by making plates to refine the process, then moved to{" "}
            <strong>tubes</strong>, as they are the main components of a frame.
            The manufacturing steps for the tubes included (fully detailed in
            the slides):
          </p>
          <ul className="mt-2 ml-4 list-inside list-disc space-y-1">
            <li>Preparing the mold.</li>
            <li>Cutting fibers and mixing resin with hardener.</li>
            <li>Impregnating the fibers and rolling them around the mold.</li>
            <li>
              Vacuum bagging at -0.5 bar to remove air bubbles and improve
              cohesion.
            </li>
            <li>Curing for 7 days for maximum polymerization.</li>
          </ul>
          <p className="mt-4">
            To feed the numerical model, I performed mechanical tests to
            determine the Young's modulus (E):
          </p>
          <ul className="mt-2 ml-4 list-inside list-disc space-y-2">
            <li>
              <strong>Tensile tests:</strong> Initial tests on a standard
              machine were inconclusive due to machine deformation. I then
              performed tests at <strong>ENSAM Bordeaux</strong> using an{" "}
              <strong>extensometer</strong>, which allowed for precise
              measurement of elongation on both flax and glass fiber samples.
            </li>
            <li>
              <strong>Bending tests:</strong> Performed on tubes to measure
              deflection. The results fell within expected ranges found in the
              literature. This test is not typically intended to measure this
              property, but it was a way of checking that the behavior in tube
              form was correct (it was impossible to attach the tubes securely
              for a tensile test).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-primary mb-4 text-2xl font-bold">
            Simulation & Results
          </h2>
          <p>
            I used the experimental data to define material properties in a{" "}
            <strong>SolidWorks</strong> numerical model.
          </p>
          <div className="mt-4">
            <h3 className="mb-2 text-xl font-semibold">
              1. Single Tube Analysis
            </h3>
            <p>
              I applied maximum loads corresponding to a 75kg cyclist with a{" "}
              <strong>safety factor of 10</strong>. The results showed that the
              tube was safe in traction/compression and acceptable in flexion
              given the high safety factor.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="mb-2 text-xl font-semibold">
              2. Full Frame Analysis
            </h3>
            <p>
              I simulated a static load corresponding to a{" "}
              <strong>120kg rider</strong> with a{" "}
              <strong>safety factor of 5</strong>. The stresses reached the
              elastic limit (Re) only at the{" "}
              <strong>rear wheel dropouts</strong>. Therefore, these specific
              high-stress areas should be made of a stronger material, such as{" "}
              <strong>aluminum</strong>.
            </p>
          </div>
          <p className="mt-4">
            <em>
              Note: I also studied AFNOR standards, but they require dynamic
              testing which was beyond the scope of available equipment.
            </em>
          </p>
        </section>

        <section>
          <h2 className="text-primary mb-4 text-2xl font-bold">Conclusion</h2>
          <p>
            The study confirms that{" "}
            <strong>
              flax fiber composites are a viable solution for bicycle frames
            </strong>
            . They can withstand the necessary mechanical loads while offering a
            sustainable alternative to carbon or glass fibers.
          </p>
        </section>
        <section>
          <p className="text-center italic">
            If you have any questions or would like more details, don't hesitate
            to contact me{" "}
            <Link
              to="/contact"
              className="link"
            >
              here
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
