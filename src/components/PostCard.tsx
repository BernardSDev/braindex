import {IPost} from "../types/Blog.ts";
import PostTimestamp from "./PostTimestamp.tsx";
import PostExcerpt from "./PostExcerpt.tsx";
import PostMeta from "./PostMeta.tsx";
import PostContent from "./PostContent.tsx";

function PostCard({post} : {post:IPost}) {
    return (
            <div key={post.postId} className="bg-blue-200 my-10 mx-4 px-8 py-6">
                <PostExcerpt post={post} />
                <PostMeta post={post} />
                <PostTimestamp post={post} />
                <PostContent post={post} />
            </div>
    )
}

export default PostCard;
