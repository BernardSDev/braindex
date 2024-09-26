import {IBlog} from "../interfaces/Blog.ts";
import {blogPostsJason} from "../../Data.ts";

export const blogs: IBlog[] = JSON.parse(blogPostsJason);