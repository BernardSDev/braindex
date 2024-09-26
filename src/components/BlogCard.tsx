import { useRef } from 'react';
import { IBlog } from "../interfaces/Blog.ts";
import { Link } from "react-router-dom";
import {readingTime, scrollToTop} from "../helpers/util.ts";
import moment from 'moment';


export default function BlogCard({ blog }: { blog: IBlog }) {
  const timeOfRead = readingTime(blog.content)
  const elementRef = useRef<HTMLDivElement | null>(null);

  return (
    <div onClick={scrollToTop} ref={elementRef} className="p-4 bg-black">
        <Link to={`/blog/${blog.title}`}>
            <div className="grid grid-cols-2 gap-4 px-2 py-3 bg-blue-1009">
                <div>
                    <div className="bg-pink-401 pb-4">
                        <h1 className="font-bold pb-1 text-[#f1ece1]">{blog.title}</h1>
                        <p className="text-gray-601 text-sm text-gray-400">{blog.excerpt}</p>
                    </div>
                    <div className="bg-indigo-301 grid" style={{gridTemplateColumns: "50px 1fr"}}>
                        <img src={blog.avatar} alt={blog.title} height={35} width={35} className="rounded-full"/>
                        <div>
                            <p>
                                <span className="text-xs font-semibold  text-[#e2ab7f]">{blog.author}</span> . <span className="text-xs">{blog.profession}</span>
                            </p>
                            <p><span className="text-sm   text-[#e2ab7f]">{moment(blog.created_at).format('LL')}</span> - <span className="text-sm">{timeOfRead} min read</span></p>
                        </div>
                    </div>
                </div>
                <img src={blog.image} alt={blog.title} height={100} width={100}/>
            </div>
        </Link>
    </div>
  );
}