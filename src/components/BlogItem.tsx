import { Link } from "react-router-dom";
import moment from "moment/moment";
import {IBlog} from "../interfaces/Blog.ts";
import {readingTime} from "../helpers/util.ts";

export default function BlogItem({blog} : {blog:IBlog}) {
    const {title, excerpt, avatar, author, content, contentImage } = blog;
    
    return(
        <section>
            <Link to={`/blogs/${blog.blogId}`}>
                <div className="bg-blue-500 dark:bg-blue-900 text-white mb-2 px-4 py-6">
                    <h1>{title}</h1>
                    <p>{excerpt}</p>
                    <img src={avatar} alt={avatar} width={55} height={55}/>
                    <h2>{author}</h2>
                    <p><span>{moment(blog?.created_at).format('LL')}</span> - <span>{readingTime(content)} min read</span></p>
                    <img src={contentImage} alt={contentImage} width={700} height={55}/>
                </div>
            </Link>
        </section>
    )
}