import {IBlog} from "../interfaces/Blog.ts";

export default function BlogItem({blog} : {blog:IBlog}) {
    const {title, excerpt, avatar, author, image } = blog;
    return(
        <section>
            <div className="bg-blue-500 dark:bg-blue-900 text-white mb-2 px-4 py-6">
                <h1>{title}</h1>
                <p>{excerpt}</p>
                <img src={avatar} alt={avatar} width={55} height={55}/>
                <h2>{author}</h2>
                <p><span>September 29, 24</span> - <span>3 min read</span></p>
                <img src={image} alt={image} width={700} height={55}/>
            </div>
        </section>
    )
}