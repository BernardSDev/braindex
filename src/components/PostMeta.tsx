import {IPost} from "../types/Blog.ts";

export default function PostMeta({post} : {post:IPost}) {
    return(
        <div>
            <p>{post.author}</p>
            <img src={post.avatar} alt={post.author} width={35} height={35} />
            <p>{post.profession}</p>
        </div>
    )
}