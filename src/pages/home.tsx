import VersaillesFlo from "../assets/Versailles-Flo.webp";

export default function HomePage() {
  return (
    <>
      <h1 className="text-center mt-10">Welcome to my personal website !</h1>
      <div className="card bg-base-200 shadow-xl border border-gray-600 w-full max-w-3xl mx-auto mt-16">
        <div className="card-body items-center text-center">
          <div className="avatar">
            <div className="w-50 rounded-full">
              <img src={VersaillesFlo} />
            </div>
          </div>
          <p>
            This website was created to share topics I love, talk about myself,
            and present some projects I’ve worked on, as well as ideas and
            experiences that matter to me.
          </p>
        </div>
      </div>
    </>
  );
}
