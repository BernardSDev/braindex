import {IPost} from "../types/Blog.ts";

export default function PostContent({post} : {post:IPost}) {
    return (
        <div>
            <h1>{post.title}</h1>
            <img src={post.image} alt={post.title}  height={55}/>
            <p>{post.content}</p>
        </div>
    )
}