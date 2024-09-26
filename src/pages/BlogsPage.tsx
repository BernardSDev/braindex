import BlogCard from "../components/BlogCard.tsx";
import {blogs} from "../helpers/Blogs.tsx";

export default function BlogsPage() {
    return (
        <>
            {blogs.map((blog) => (
                <BlogCard key={blog.blogId} blog={blog} />
            ))}
        </>
    );
}
