// FUNCTION TO FETCH DATA FROM DATABASE (SUPABASE)
import {supabase} from "./supabase.ts";
import {IBlog} from "../interfaces/Blog.ts";

////////////////////////////////////////////////////////////////////////////////////


export async function getBlogs(): Promise<IBlog[]> {
    const { data, error } = await supabase.from("blogs").select("*");

    if (error) {
        console.error(error);
        throw new Error("Blogs could not be loaded");
    }

    return data;
}

export async function getBlogById(blogId: number): Promise<IBlog[] | null> {
    const { data, error } = await supabase
        .from('blogs').select('*')
        .eq('blogId', blogId)
        .single();

    if (error) {
        console.error('Error fetching blog post:', error.message);
        return null;
    }

    return data;
}


////////////////////////////////////////////////////////////////////////////////////

export const fetchBlogs = async (): Promise<IBlog[]> => {
    const { data:blogs, error } = await supabase.from('blogs').select('*').order('blogId', { ascending: false });

    if (error) { throw new Error(error.message); }

    return blogs;
}



