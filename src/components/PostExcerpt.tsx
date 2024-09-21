import {IPost} from "../types/Blog.ts";

export default function PostExcerpt({post, className}: { post: IPost, className?: string }) {
    return (
        <div className={className}>
            <p>{post.excerpt}</p>
        </div>
    )
}