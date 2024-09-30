import {IBlog} from "../interfaces/Blog.ts";
import ShowMore from "./ShowMore.tsx";

export default function ExampleBlogSection({ posts } : { posts:IBlog[] }) {
    return (
        <section className="blog-section bg-violet-500 px-4 py-6">
            <div className="bg-amber-50 p-2 mb-4 mt-3">
                <h1 className="underline mb-2">view all blogs</h1>
                <h1 className="capitalize font-semibold mb-2">read wide to enrich your knowledge</h1>
            </div>
            <div className="featured-post">
                <div className="grid grid-cols-2 gap-4">
                    {
                        posts?.map(post =>(
                            <div key={post.blogId} className="bg-red-500">
                                <h1>{post.title}</h1>
                                <h5>{post.author}</h5>
                                <p>{post.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <ShowMore />
        </section>
    )
}