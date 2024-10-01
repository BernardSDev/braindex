import {useQuery} from "@tanstack/react-query";
import {IBlog} from "../interfaces/Blog.ts";
import {getBlogs} from "../services/apiBlogs.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import HeroSection from "../components/HeroSection.tsx";
import BlogSection from "../components/BlogSection.tsx";

export default function HomePage() {
    const {data:blogs, isLoading} = useQuery<IBlog[]>({queryKey: ["blogs"], queryFn: getBlogs,});

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