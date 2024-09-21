import { IPost } from "../types/Blog.ts";
import PostTimestamp from "./PostTimestamp.tsx";
import PostExcerpt from "./PostExcerpt.tsx";
import PostMeta from "./PostMeta.tsx";
import PostContent from "./PostContent.tsx";
import { Link } from "react-router-dom";

function PostCard({ post }: { post: IPost }) {
  return (
    <div key={post.postId} className="px-8 py-6 mx-4 my-10 bg-blue-200">
      <Link to={`/article/${post.title}`}>
        <PostExcerpt post={post} />
        <PostMeta post={post} />
        <PostTimestamp post={post} />
        <PostContent post={post} />
      </Link>
    </div>
  );
}

export default PostCard;
