import { useQuery } from '@tanstack/react-query';
import {IBlog} from "../interfaces/Blog.ts";
import {fetchBlogs} from "../services/apiBlogs.ts";
import moment from 'moment';




export default function ReadBlogs() {
    // FETCHING THE DATA
    const {data:blogs, isLoading} = useQuery({queryFn: () => fetchBlogs(), queryKey: ["blogs"]});

    if(isLoading) {return <div>Loading...</div>}

    return (
        <>
            <h1 className="bg-black text-5xl leading-tight text-white px-4 py-6">Read all blogs</h1>
            {
                blogs?.map((blog: IBlog) => {
                    return (
                        <div key={blog.blogId} className="bg-blue-200 mb-1 px-2 py-4">
                            <h2>author: {blog.author}</h2>
                            <p>profession: {blog.profession}</p>
                            <p>avatar:</p>
                            <img src={blog.avatar} alt="" width={35} height={35}  />
                            <p>title{blog.title}</p>
                            <p>excerpt{blog.excerpt}</p>
                            <p>content: {blog.content}</p>
                            <p>image: {blog.image}</p>
                            <p className="text-sm   text-[#e2ab7f]">time post: {moment(blog.created_at).format('LL')}</p>
                        </div>
                    )
                })
            }
        </>
    );
}