import {useEffect, useState} from "react";
import { useBlogs } from "../context/BlogsContext.tsx";
import BlogItem from "./BlogItem.tsx";
import BlogListHeading from "./BlogListHeading.tsx";

export default function BlogList() {
    const [displayBlogs, setDisplayBlogs] = useState([]);
    const [blogsToShow, setBlogsToShow] = useState(6); // Show 3 items initially
    const [loading, setLoading] = useState(false);

    const { blogs } = useBlogs();

    useEffect(() => { setDisplayBlogs(blogs?.slice(0, blogsToShow)); }, [ blogsToShow ]);

    const handleLoadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setBlogsToShow(blogsToShow + 3);
            setLoading(false);
        }, 1000);
    };


    return (
            <main className="border-t-gray-300x container mb-10 mx-auto px-2">
                <BlogListHeading />
               <div className="text-right font-semibold pb-2 pr-2"> {blogs?.length} blogs</div>
                <div className="bg-red-500x grid grid-cols-1 gap-10">
                    { displayBlogs?.map(blog => (<BlogItem key={blog.blogId} blog={blog} />)) }
                    <button onClick={handleLoadMore} disabled={loading} className="px-4 py-2 text-black mt-4">
                        {loading ? 'Loading...' : 'Load More'}
                    </button>
                </div>
            </main>
    )
}