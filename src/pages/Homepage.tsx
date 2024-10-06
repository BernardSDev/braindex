import { useBlogs } from "../context/BlogsContext.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import HeroSection from "../components/HeroSection.tsx";
import BlogList from "../components/BlogList.tsx";
import Spinner from "../components/Spinner.tsx";
import {useEffect} from "react";

export default function HomePage() {
  const { isLoading } = useBlogs();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  if (isLoading) return <Spinner />;

  return (
      <div>
          <Header/>
          <HeroSection/>
          <BlogList/>
          <Footer/>
      </div>
  );
}
