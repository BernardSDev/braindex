import moment from 'moment';
import { useParams } from "react-router-dom";
import { useBlogs } from "../context/BlogsContext.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import {readingTime} from "../helpers/util.ts";

export default function Blog() {
    const { id } = useParams();
    const { blogs } = useBlogs();
    const blog = blogs?.find((blog) => blog.blogId.toString() === id);

    return (
        <>
            <Header />
            <div className="bg-red-900x py-10 container border-t border-t-black mx-auto">
                <main className="bg-red-200x px-6">
                    <div className="text-4xl mb-10 font-semibold tracking-tight capitalize md:text-center">{blog?.title}</div>
                    <div className="text-xl md:text-center mb-8">{blog?.excerpt}</div>
                    <div className="bg-orange-800x mb-8 flex gap-x-6">
                        <img src={blog?.avatar} alt={blog?.avatar} width={35} height={35} className="w-12 h-12 object-cover rounded-full"/>
                        <div className="bg-green-500x">
                            <div className="font-semibold text-lg tracking-tighter ">{blog?.author}</div>
                            <div className="text-sm">Published on <span>{moment(blog?.created_at).format('LL')}</span> - <span>{readingTime(blog?.content)} min read</span></div>
                        </div>
                    </div>
                    <img src={blog?.contentImage} alt={blog?.contentImage} className="mb-12 h-[30vh] md:h-[55vh] w-full"/>
                    <div className="text-xl leading-loose">{blog?.content}</div>
                </main>
            </div>
            <Footer/>
        </>
    )
}