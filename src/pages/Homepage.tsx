import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import HeroSection from "../components/HeroSection.tsx";
import BlogSection from "../components/BlogSection.tsx";
import { useBlogContext } from "../context/ContextBlog.tsx";

export default function HomePage() {
  const { blogs, isLoading } = useBlogContext();

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
