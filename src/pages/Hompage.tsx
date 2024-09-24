import BlogPost from "../features/blog/BlogPost.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

export default function HomePage() {
  return (
    <>
      <Header/>
      <BlogPost />
      <Footer />
    </>
  );
}
