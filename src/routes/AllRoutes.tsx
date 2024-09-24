import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Hompage";
import { PostDetail } from "../components/PostDetail";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="/article/:title" element={<PostDetail />} />
    </Routes>
  );
};
