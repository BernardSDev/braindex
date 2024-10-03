import { useBlogs } from "../context/BlogsContext.tsx";
import BlogItem from "../components/BlogItem.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import BlogListHeading from "../components/BlogListHeading.tsx";
import ShowMore from "../components/ShowMore.tsx";

export default function BlogList() {
    const { blogs } = useBlogs();

    return (
        <>
            <Header />
            <main className="border border-t-gray-300x container mx-auto px-2">
                <BlogListHeading />
                <div className="bg-red-500x grid grid-cols-1 gap-10">
                    { blogs?.map(blog => ( <BlogItem key={blog.blogId} blog={blog}/> )) }
                    <ShowMore />
                </div>
            </main>
            <Footer/>
        </>
    )
}