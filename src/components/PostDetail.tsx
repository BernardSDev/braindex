import { useParams } from "react-router-dom";
import { posts } from "../features/blog/BlogPost";

export const PostDetail = () => {
  // destructure title from path in
  // <Route path="/article/:title" element={<PostDetail />} />

  const { title } = useParams();

  // get all posts and find post based on title from url useParams()
  const postDetail = posts.find(
    (post) => post.title.toLowerCase() === title?.toLowerCase()
  );
  console.log("postDetail", postDetail);

  return (
    <div>
      <h1 className="my-4 text-3xl font-bold">{postDetail?.title}</h1>
      <p>{postDetail?.content}</p>
    </div>
  );
};
