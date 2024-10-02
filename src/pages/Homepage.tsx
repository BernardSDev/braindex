import { useBlogs } from "../context/BlogsContext.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import HeroSection from "../components/HeroSection.tsx";
import BlogSection from "../components/BlogSection.tsx";

export default function HomePage() {
  const { blogs, isLoading } = useBlogs();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <HeroSection />
      <BlogSection blogs={blogs} />
      <Footer />
    </div>
  );
}
