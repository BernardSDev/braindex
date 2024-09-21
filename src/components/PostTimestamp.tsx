import {IPost} from "../types/Blog.ts";

export default function PostTimestamp({post} : {post:IPost} ) {
    return (
        <div className="">
            <h1>{post.date}</h1>
            <h1>3mins read</h1>
        </div>
    )
}