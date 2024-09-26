import { useRef } from 'react';
import { IBlog } from "../interfaces/Blog.ts";
import { Link } from "react-router-dom";
import {readingTime, scrollToTop} from "../helpers/util.ts";

export default function     PostCard({ post }: { post: IBlog }) {
  const timeOfRead = readingTime(post.content)
  const elementRef = useRef<HTMLDivElement | null>(null);

  return (
    <div onClick={scrollToTop} ref={elementRef} className="p-4 bg-black">
        <Link to={`/blog/${post.title}`}>
            <div className="grid grid-cols-2 gap-4 px-2 py-3 bg-blue-1009">
                <div>
                    <div className="bg-pink-401 pb-4">
                        <h1 className="font-bold pb-1 text-[#f1ece1]">{post.title}</h1>
                        <p className="text-gray-601 text-sm text-gray-400">{post.excerpt}</p>
                    </div>
                    <div className="bg-indigo-301 grid" style={{gridTemplateColumns: "50px 1fr"}}>
                        <img src={post.avatar} alt={post.title} height={35} width={35} className="rounded-full"/>
                        <div>
                            <p>
                                <span className="text-xs font-semibold  text-[#e2ab7f]">{post.author}</span> . <span className="text-xs">{post.profession}</span>
                            </p>
                            <p><span className="text-sm">{post.date}</span> - <span className="text-sm">{timeOfRead} min read</span></p>
                        </div>
                    </div>
                </div>
                <img src={post.image} alt={post.title} height={100} width={100}/>
            </div>
        </Link>
    </div>
  );
}