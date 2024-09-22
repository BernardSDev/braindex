import PostCard from "../../components/PostCard.tsx";
import {posts} from "./Posts.tsx";

export default function BlogPost() {
  return (
    <div className="">
      {posts.map((post) => (
        <PostCard key={post.postId} post={post} />
      ))}
    </div>
  );
}
