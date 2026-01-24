import siteLogo from "/Logo-FA.png";
import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center">
        <img src={siteLogo} className="logo w-100" alt="Logo FA" />
      </div>
      <h1 className="text-center mt-16">Site web de Florent AUDAP</h1>
      <div className="card bg-base-200 shadow-xl border border-gray-600 w-full max-w-md mx-auto mt-16">
        <div className="card-body items-center text-center">
          <h3 className="card-title">Comptez jusqu'à autant que vous voulez</h3>
          <button
            className="btn btn-primary"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
        </div>
      </div>
    </>
  );
}
