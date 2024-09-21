import {IPost} from "../types/Blog.ts";

export default function PostExcerpt({post}: {post:IPost}) {
    return (
        <div className="">
            <p>{post.excerpt}</p>
        </div>
    )
}