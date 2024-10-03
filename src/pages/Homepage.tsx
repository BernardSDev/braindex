import { useBlogs } from "../context/BlogsContext.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import HeroSection from "../components/HeroSection.tsx";
import BlogList from "../components/BlogList.tsx";

export default function HomePage() {
  const { isLoading } = useBlogs();


  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <HeroSection />
        <BlogList />
      <Footer />
    </div>
  );
}
