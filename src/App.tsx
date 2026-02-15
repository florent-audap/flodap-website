import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
import ContactPage from "./pages/contact";
import AboutMePage from "./pages/aboutMe";
import ProjectsPage from "./pages/projects";
import NotFoundPage from "./pages/notFound";
import { Footer } from "./components/footer";
import { Analytics } from "@vercel/analytics/react";
import BikeFlaxFiber from "./pages/projects/bike-flax-fiber";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow px-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Blog Routes */}
          <Route path="/blog" element={<BlogPage />} />
          {/* Project Routes */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/bike-flax-fiber" element={<BikeFlaxFiber />} />
          {/* Other Routes */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Analytics />
      </main>
      <Footer />
    </div>
  );
}

export default App;
