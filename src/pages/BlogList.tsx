import BlogItem from "../components/BlogItem.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import BlogListHeading from "../components/BlogListHeading.tsx";
import ShowMore from "../components/ShowMore.tsx";
import { useBlogContext } from "../context/ContextBlog.tsx";

export default function BlogList() {
    const { blogs } = useBlogContext();

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