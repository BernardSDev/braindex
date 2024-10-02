import {IBlog} from "../interfaces/Blog.ts";
import {readingTime} from "../helpers/util.ts";

export default function BlogSummary({blog} : {blog:IBlog}) {
    const {contentImage, title, avatar, author, content } = blog;
    return(
        <div className="bg-gray-500 dark:bg-gray-900 text-white px-4 py-6">
            <img src={contentImage}  alt={title} width={100}  height={55} />
            <h1>{title}</h1>
            <img src={avatar}  alt={title} width={55} height={55} />
            <h2>{author}</h2>
            <p>{readingTime(content)} min read</p>
        </div>
    )
}