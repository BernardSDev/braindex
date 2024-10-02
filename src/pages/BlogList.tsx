import { useBlogs } from "../context/BlogsContext.tsx";
import BlogItem from "../components/BlogItem.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import BlogListHeading from "../components/BlogListHeading.tsx";
import ShowMore from "../components/ShowMore.tsx";

export default function BlogList() {
    const { blogs } = useBlogs();

    return (
        <div>
            <Header />
            <BlogListHeading />
            <main className="p-2 bg-orange-100">
                { blogs?.map(blog => ( <BlogItem key={blog.blogId} blog={blog}/> )) }
                <ShowMore />
            </main>
            <Footer/>
        </div>
    )
}