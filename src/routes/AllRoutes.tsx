import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Hompage";
import { PostDetail } from "../components/PostDetail";

export const AllRoutes = () => {
  return (
    <Routes>
      {/* index === default page to render   */}
      <Route path="/" index element={<HomePage />} />
      {/* create dynamic route for all blog post detail */}
      {/* title is the dynamic id for each blog PostCard */}
      {/* eg: /article/how to set up react */}
      {/* eg: /article/how to use typescript */}
      <Route path="/article/:title" element={<PostDetail />} />
    </Routes>
  );
};
