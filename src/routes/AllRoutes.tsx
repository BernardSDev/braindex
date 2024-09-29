import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../pages/Homepage.tsx";
import NewBlogPage from "../pages/NewBlogPage.tsx";
import BlogPage from "../pages/BlogPage.tsx";
import ReadBlogs from "../pages/ReadBlogs.tsx";
import InsertBlog from "../pages/InsertBlog.tsx";
import InsertImageDemo from "../pages/InsertImageDemo.tsx";
import CreateBlog from "../pages/CreateBlog.tsx";
import BlogList from "../pages/BlogList.tsx";
import Blog from "../pages/Blog.tsx";
import Form from "../pages/Form.tsx";
import Landing from "../pages/Landing.tsx";

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
      <Route path="/new-blog/" element={<NewBlogPage />} />
      <Route path="/read-blogs/" element={<ReadBlogs />} />
      <Route path="/insert-blog/" element={<InsertBlog />} />
      <Route path="/insert-demo/" element={<InsertImageDemo />} />
      <Route path="/create-blog/" element={<CreateBlog />} />
    </Routes>
  );
}