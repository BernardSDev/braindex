import PostCard from "../components/PostCard.tsx";
import {blogs} from "../helpers/Blogs.tsx";

export default function BlogsPage() {
    return (
        <>
            {blogs.map((blog) => (
                <PostCard  key={blog.blogId} blog={blog} />
            ))}
        </>
    );
}
