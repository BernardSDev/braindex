import PostCard from "../../components/PostCard.tsx";
import { blogPostsJason } from "../../../Data.ts";
import { IPost } from "../../types/Blog.ts";

export const posts: IPost[] = JSON.parse(blogPostsJason);
console.log(posts);

export default function BlogPost() {
  return (
    <div className="">
      {posts.map((post) => (
        <PostCard key={post.postId} post={post} />
      ))}
    </div>
  );
}
