import {useState} from "react";
import { useBlogs } from "../context/BlogsContext.tsx";
import BlogItem from "./BlogItem.tsx";
import BlogListHeading from "./BlogListHeading.tsx";

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
            <div className="text-sm text-right font-semibold pb-2 pr-2">
                Articles <span className="text-gray-400">{blogs?.length}</span> | <span
                className="text-gray-800">{blogsSlice!.length}</span>
            </div>
            <BlogListHeading/>
            <div className="bg-red-500x grid grid-cols-1 gap-10">
                {blogsSlice?.map(blog => (<BlogItem key={blog.blogId} blog={blog}/>))}
                { blogsSlice!.length >= blogs!.length ?
                    <button> Nothing to show </button> :
                    (
                        <div className="flex justify-between">
                            <button onClick={handleLoadMore} disabled={loading} className="text-xs ml-52" >
                                {loading ? 'Loading...' : 'Load More'}
                            </button>
                            <div className="text-xs">
                                Articles <span className="text-gray-400 ml-auto">{blogs?.length}</span> | <span
                                className="text-gray-800">{blogsSlice!.length}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </main>
    )
}