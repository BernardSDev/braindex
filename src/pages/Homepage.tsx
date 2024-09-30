import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import HeroSection from "../components/HeroSection.tsx";
import BlogSection from "../components/BlogSection.tsx";
import {blogs} from "../../Data.ts";
import {getBlogs} from "../services/apiBlogs.ts";
import {useQuery} from "@tanstack/react-query";
import {IBlog} from "../interfaces/Blog.ts";

export default function HomePage() {
    const {isLoading, data:posts} = useQuery<IBlog[]>({queryKey: ["blogs"], queryFn: getBlogs,});

    if (isLoading) return <div>Loading...</div>;

    console.log("posts", posts);

    return (
        <div>
            <Header/>
            <HeroSection/>
            <BlogSection blogs={blogs}/>
            <Footer/>
        </div>
    );
}