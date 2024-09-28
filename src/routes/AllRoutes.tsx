import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../pages/Homepage.tsx";
import NewBlogPage from "../pages/NewBlogPage.tsx";
import BlogPage from "../pages/BlogPage.tsx";
import AboutPage from "../pages/AboutPage.tsx";
import ContactPage from "../pages/ContactPage.tsx";
import ReadBlogs from "../pages/ReadBlogs.tsx";
import InsertBlog from "../pages/InsertBlog.tsx";
import InsertImageDemo from "../pages/InsertImageDemo.tsx";
import CreateBlog from "../pages/CreateBlog.tsx";

export function AllRoutes()  {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="/blogs" index element={<Navigate to="/" />} />
      <Route path="/blog/:title" element={<BlogPage />} />
      <Route path="/new-blog/" element={<NewBlogPage />} />
      <Route path="/read-blogs/" element={<ReadBlogs />} />
      <Route path="/insert-blog/" element={<InsertBlog />} />
      <Route path="/about-us/" element={<AboutPage />} />
      <Route path="/contact-us/" element={<ContactPage />} />
      <Route path="/insert-demo/" element={<InsertImageDemo />} />
      <Route path="/create-blog/" element={<CreateBlog />} />
    </Routes>
  );
}