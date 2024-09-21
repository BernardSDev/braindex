import PostCard from "../../components/PostCard.tsx";
import {blogPostsJason} from "../../../Data.ts";
import {IPost} from "../../types/Blog.ts";

const posts:IPost[] = JSON.parse(blogPostsJason);
console.log(posts)

export default function BlogPost() {
    return (
        <div className="">
            {posts.map((post) => (
                <PostCard post={post} />
            ))}
        </div>
    )
}