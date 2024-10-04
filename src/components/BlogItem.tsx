import { Link } from "react-router-dom";
import moment from "moment/moment";
import {IBlog} from "../interfaces/Blog.ts";
import {readingTime, scrollToTop} from "../helpers/util.ts";



export default function BlogItem( {blog} : {blog:IBlog} ) {
    const { title, excerpt, avatar, author, content, contentImage} = blog;
    
    return(
        <section className="border-y border-b-gray-300 py-8 px-4">
            <Link to={`/blog/${blog.blogId}`} onClick={scrollToTop}>
                <div className="grid grid-cols-3 gap-3 items-start">
                    <div className="col-span-2">
                        <div className="text-2xl text-gray-750 font-semibold leading-tight tracking-tighter capitalize mb-2">{title}</div>
                        <p className="mb-4 text-gray-500">{excerpt}</p>
                        <div className="flex gap-4">
                            <img src={avatar} alt={avatar} width={55} height={55} className="w-8 h-8 object-cover rounded-full"/>
                            <div className="text-sm">
                                <div className="text-sm text-gray-900 capitalize font-semibold">{author}</div>
                                <p className="text-xs text-gray-400">
                                    <span className="text-gray-450">{moment(blog?.created_at).format('LL')}</span> - <span className="text-gray-400">{readingTime(content)} min read</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <img src={contentImage} alt={contentImage} width={700} height={40} className="w-28 h-24 object-fit"/>
                </div>
            </Link>
        </section>
    )
}