import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="hero bg-base-200 min-h-[70vh]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-primary text-9xl font-bold">404</h1>
          <h2 className="mt-4 text-5xl font-bold">Page Not Found</h2>
          <p className="py-6">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <Link
            to="/"
            className="btn btn-primary"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
