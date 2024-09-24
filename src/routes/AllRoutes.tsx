import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../pages/Homepage.tsx";
import NewBlogPage from "../pages/NewBlogPage.tsx";
import BlogPage from "../pages/BlogPage.tsx";
import AboutPage from "../pages/AboutPage.tsx";
import ContactPage from "../pages/ContactPage.tsx";

export function AllRoutes()  {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="/blogs" index element={<Navigate to="/" />} />
      <Route path="/blog/:title" element={<BlogPage />} />
      <Route path="/new-blog/" element={<NewBlogPage />} />
      <Route path="/about-us/" element={<AboutPage />} />
      <Route path="/contact-us/" element={<ContactPage />} />
    </Routes>
  );
}