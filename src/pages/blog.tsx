import { Link } from "react-router-dom";
import { blogPosts } from "../utils/blogPostsExtract";
import { FaCalendarAlt, FaTag } from "react-icons/fa";

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-5xl font-bold">Blog</h1>
        <p className="opacity-80">
          Thoughts, tutorials, and stories about engineering and development.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.slug}
            className="card bg-base-200 border-base-300 hover:border-primary w-full sm:w-3/4 border shadow-xl transition-colors duration-300"
          >
            <div className="card-body">
              <h2 className="card-title text-primary mb-0 text-2xl">
                <Link
                  to={`/blog/${post.slug}`}
                  className="hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <div className="mb-2 flex flex-wrap items-center gap-4 text-sm opacity-70">
                <div className="flex items-center gap-1">
                  <FaCalendarAlt /> {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <FaTag /> {post.tags.join(", ")}
                </div>
              </div>
              <p>{post.description}</p>
              <div className="card-actions mt-4 justify-end">
                <Link
                  to={`/blog/${post.slug}`}
                  className="btn btn-primary btn-sm"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
