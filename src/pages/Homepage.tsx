import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import HeroSection from "../components/HeroSection.tsx";
import BlogSection from "../components/BlogSection.tsx";
import {blogs} from "../../Data.ts";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <BlogSection blogs={blogs} />
      <Footer />
    </div>
  );
}
