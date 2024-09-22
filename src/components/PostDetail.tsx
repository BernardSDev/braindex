import { useParams } from "react-router-dom";
import { posts } from "../features/blog/BlogPost";
import {readingTime} from "../helpers/util.ts";

export const PostDetail = () => {

const { title } = useParams();

const postDetail = posts.find((post) => post.title.toLowerCase() === title?.toLowerCase());

console.log("postDetail", postDetail);

    const timeOfRead = readingTime(postDetail?.content)

  return (
      <div className="p-3">
          <h1 className="my-4 text-4xl leading-10 font-bold">{postDetail?.title}</h1>
          <p className="pb-8">{postDetail?.excerpt}</p>

          <img src={postDetail?.avatar} alt={postDetail?.title} width={35} height={55} className="rounded-full" />
          <p>
              <span className="text-xs font-semibold text-[#c05850] text-[#e2ab7f]">{postDetail?.author}</span> . <span
              className="text-xs">{postDetail?.profession}</span>
          </p>

          <p className="text-sm pb-12">Published on <span>{postDetail?.date}</span> - <span
              className="text-sm">{timeOfRead} min read</span></p>

          <img src={postDetail?.image} alt={postDetail?.title} height={55}/>
          <p className="pt-10 text-base leading-12 p-4">{postDetail?.content}</p>
      </div>
  );
};
