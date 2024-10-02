import { Link } from "react-router-dom";
import {IBlog} from "../interfaces/Blog.ts";
import BlogSummary from "./BlogSummary.tsx";
import ShowMore from "./ShowMore.tsx";

export default function BlogSection({ blogs } : { blogs:IBlog[] | undefined }) {
    return (
        <section className="blog-section bg-violet-500 px-4 py-6">
            <div className="bg-amber-50 p-2 mb-4 mt-3">
                <Link to={`/blogs`} className="underline mb-2">view all blogs</Link>
                <h1 className="capitalize font-semibold mb-2">read wide to enrich your knowledge</h1>
            </div>
            <div className="featured-post">
                <div className="grid grid-cols-3 gap-4">
                    {
                        blogs?.map(blog => ( <BlogSummary key={blog.blogId} blog={blog} /> ))
                    }
                </div>
            </div>
            <ShowMore />
        </section>
    )
}