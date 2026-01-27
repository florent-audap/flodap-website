import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
import ContactPage from "./pages/contact";
import AboutMePage from "./pages/aboutMe";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutMePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
