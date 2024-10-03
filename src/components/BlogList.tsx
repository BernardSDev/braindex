import { useBlogs } from "../context/BlogsContext.tsx";
import BlogItem from "./BlogItem.tsx";
import BlogListHeading from "./BlogListHeading.tsx";
import ShowMore from "./ShowMore.tsx";

export default function BlogList() {
    const { blogs } = useBlogs();

    return (
        <>
            <main className="border-t-gray-300x container mx-auto px-2">
                <BlogListHeading />
                <div className="bg-red-500x grid grid-cols-1 gap-10">
                    { blogs?.map(blog => ( <BlogItem key={blog.blogId} blog={blog}/> )) }
                    <ShowMore />
                </div>
            </main>
        </>
    )
}