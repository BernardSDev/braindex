import {useState} from "react";
import { useBlogs } from "../context/BlogsContext.tsx";
import BlogListHeading from "./BlogListHeading.tsx";
import BlogSummary from "./BlogSummary.tsx";

export default function BlogList() {
    const [blogsToShow, setBlogsToShow] = useState(6);
    const [loading, setLoading] = useState(false);
    const { blogs } = useBlogs();
    const blogsSlice = blogs?.slice(0, blogsToShow);

    const handleLoadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setBlogsToShow((previouSlice)=> previouSlice + 3);
            setLoading(false);
        }, 1000);
    };

    return (
        <main className="container mb-10 mx-auto pt-2 px-2">
            <div className="text-xs text-right font-semibold pb-2 pr-2">
                Article <span className="text-gray-400">{blogs?.length}</span> | <span
                className="text-gray-800x">{blogsSlice!.length}</span>
            </div>
            <BlogListHeading/>
            <div className="bg-red-500x grid grid-cols-1 gap-10">
                {blogsSlice?.map(blog => (<BlogSummary key={blog.blogId} blog={blog}/>))}
                { blogsSlice!.length >= blogs!.length ?
                    <button className="text-gray-600"> Nothing to show </button> :
                    (
                        <div className="flex justify-between items-center">
                            <button onClick={handleLoadMore} disabled={loading} className={`${!loading ? 'text-gray-900' : 'text-gray-400'} text-base  ml-[40%]`} >
                                {loading ? 'Loading...' : 'Load More'}
                            </button>
                        </div>
                    )
                }
            </div>
        </main>
    )
}