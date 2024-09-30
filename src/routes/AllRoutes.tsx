import {Navigate, Route, Routes} from "react-router-dom";

import HomePage from "../pages/Homepage.tsx";
import BlogList from "../pages/BlogList.tsx";
import Blog from "../pages/Blog.tsx";
import Form from "../pages/Form.tsx";

// To be deleted
import Landing from "../pages/Landing.tsx";
import InsertImageDemo from "../pages/InsertImageDemo.tsx";
import ReadBlogs from "../pages/ReadBlogs.tsx";
import NewBlogPage from "../pages/NewBlogPage.tsx";
import BlogPage from "../pages/BlogPage.tsx";


export function AllRoutes()  {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="/blogs" index element={<BlogList />} />
      <Route path="/blogs/:id" index element={<Blog />} />
      <Route path="/form" index element={<Form />} />

      <Route path="landing" index element={<Landing />} />
      <Route path="/blogx" index element={<Navigate to="/" />} />
      <Route path="/blog/:title" element={<BlogPage />} />

      <Route path="/insert-demo/" element={<InsertImageDemo />} />
      <Route path="/new-blog/" element={<NewBlogPage />} />

      <Route path="/read-blogs/" element={<ReadBlogs />} />
    </Routes>
  );
}