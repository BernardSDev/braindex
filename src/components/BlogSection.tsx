import { Link } from "react-router-dom";
import {IBlog} from "../interfaces/Blog.ts";
import BlogSummary from "./BlogSummary.tsx";
import ShowMore from "./ShowMore.tsx";

export default function BlogSection({ blogs } : { blogs:IBlog[] | undefined }) {
    return (
        <section className="blog-section container mx-auto">
            <div className="">
                <div className="capitalize text-center w-3/4 md:w-1/4 md:leading-loose mx-auto text-3xl tracking-tight pt-12 pb-8 mb-4 font-semibold">Personal
                    development is the key to success</div>
                <div className="text-right mr-10">
                    <Link to={`/blogs`} className="underline">View all blogs</Link>
                </div>
            </div>
            <div className="flex justify-center items-center w-full">
                <div className="featured-post grid sm:grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
                    {
                        blogs?.map(blog => (<BlogSummary key={blog.blogId} blog={blog}/>))
                    }
                </div>
            </div>

            <ShowMore/>
        </section>
    )
}