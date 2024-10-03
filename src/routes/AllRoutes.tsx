import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage.tsx";
import Blog from "../pages/Blog.tsx";
import Form from "../pages/Form.tsx";

export function AllRoutes()  {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="/blog/:id" index element={<Blog />} />
      <Route path="/form" index element={<Form />} />
    </Routes>
  );
}