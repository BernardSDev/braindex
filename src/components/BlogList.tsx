import {useState} from "react";
import { useBlogs } from "../context/BlogsContext.tsx";
import BlogItem from "./BlogItem.tsx";
import BlogListHeading from "./BlogListHeading.tsx";

export default function BlogList() {
    const [blogsToShow, setBlogsToShow] = useState(2);
    const [loading, setLoading] = useState(false);
    const { blogs } = useBlogs();
    const blogsSlice = blogs?.slice(0, blogsToShow);

    const handleLoadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setBlogsToShow((previouSlice)=> previouSlice + 1);
            setLoading(false);
        }, 1000);
    };

    console.log("Blog Slice", blogsSlice?.length)

    return (
            <main className="border-t-gray-300x container mb-10 mx-auto px-2">
                <BlogListHeading />
               <div className="text-right font-semibold pb-2 pr-2">Articles | {blogs?.length} / {blogsSlice!.length}</div>
                <div className="bg-red-500x grid grid-cols-1 gap-10">
                    { blogsSlice?.map(blog => (<BlogItem key={blog.blogId} blog={blog} />)) }

                    { blogsSlice!.length >= blogs!.length ?
                        <button > Nothing to show </button> :
                        <button onClick={handleLoadMore} disabled={loading} className="px-4 py-2 text-black mt-4">
                            {loading ? 'Loading...' : 'Load More'}
                        </button>
                    }
                </div>
            </main>
    )
}