import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/Homepage.tsx";
import BlogList from "../pages/BlogList.tsx";
import Blog from "../pages/Blog.tsx";
import Form from "../pages/Form.tsx";

export function AllRoutes()  {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="/blogs" index element={<BlogList />} />
      <Route path="/blogs/:id" index element={<Blog />} />
      <Route path="/form" index element={<Form />} />
    </Routes>
  );
}