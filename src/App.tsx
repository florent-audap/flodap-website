import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
import ContactPage from "./pages/contact";
import AboutMePage from "./pages/aboutMe";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutMePage />} />
      </Routes>
    </>
  );
}

export default App;
