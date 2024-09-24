import PostCard from "../components/PostCard.tsx";
import {posts} from "../helpers/Posts.tsx";

export default function BlogsPage() {
    return (
        <>
            {posts.map((post) => (
                <PostCard  key={post.postId} post={post} />
            ))}
        </>
    );
}
