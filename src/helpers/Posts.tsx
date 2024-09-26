import {IPost} from "../interfaces/Blog.ts";
import {blogPostsJason} from "../../Data.ts";

export const posts: IPost[] = JSON.parse(blogPostsJason);