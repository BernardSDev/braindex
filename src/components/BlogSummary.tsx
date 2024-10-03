import {IBlog} from "../interfaces/Blog.ts";
import {readingTime} from "../helpers/util.ts";

export default function BlogSummary({blog} : {blog:IBlog}) {
    const {contentImage, title, avatar, author, content } = blog;
    return(
        <div className="max-w-sm overflow-hidden drop-shadow-md pb-2 pt-4">
            <img src={contentImage} alt={title} width={100} height={55} className="w-full mb-6 h-48 object-cover"/>
            <div className="font-normal tracking-tight capitalize leading-tight h-12 pl-5 pr-3 text-2xl mb-3">{title}</div>
            <div className="px-2 py-4 flex items-center gap-5 h-16">
                <img src={avatar} alt={title} width={35} height={35} className="w-12 h-12 object-cover rounded-full"/>
                <div className="text-sm">
                    <div className="capitalize font-bold text-lg mb-1">{author}</div>
                    <p className="text-gray-700 text-base tracking-tight">{readingTime(content)} min read</p>
                </div>
            </div>
        </div>
    )
}