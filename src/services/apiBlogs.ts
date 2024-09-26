// FUNCTION TO FETCH DATA FROM DATABASE (SUPABASE)
import {supabase} from "./supabase.ts";
import {IBlog} from "../interfaces/Blog.ts";


export const fetchBlogs = async (): Promise<IBlog[]> => {
    const { data:blogs, error } = await supabase.from<IBlog>('blogs').select('*').order('blogId', { ascending: false }) ;
    console.log(blogs)
    if (error) { throw new Error(error.message); }

    return blogs;
}

