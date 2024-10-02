import { useParams } from "react-router-dom";
import { useBlogs } from "../context/BlogsContext.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function Blog() {
    const { id } = useParams();
    const { blogs } = useBlogs();
    const blog = blogs?.find((blog) => blog.blogId.toString() === id);

    return (
        <div>
            <Header />
            <main className="bg-cyan-700 px-4 py-8">
                <h1>{blog?.title}</h1>
                <h1>{blog?.excerpt}</h1>
                <img src={blog?.avatar} alt={blog?.avatar} width={35} height={35}/>
                <p>{blog?.author}</p>
                <p>Published on <span>September 29, 24</span> - <span>3 min read</span></p>
                <img src={blog?.contentImage} alt={blog?.contentImage} />
                <div>{blog?.content}</div>
            </main>
            <Footer />
        </div>
    )
}