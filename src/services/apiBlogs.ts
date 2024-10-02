import {supabase, supabaseUrl} from "./supabase.ts";
import {IBlog} from "../interfaces/Blog.ts";
import {CreateBlogFormData} from "../schemas/formSchemas/CreateBlogFormSchema.ts";
import toast from "react-hot-toast";

const uploadImageToSupabase = async (image: File) => {
    const imagePath = `public/${Math.random()*1000}-${image.name}`;
    const { data:imageData, error } = await supabase.storage.from('avatars').upload(imagePath, image);
    if (error) { throw new Error(`Failed to upload image: ${error.message}`); }

    return imageData?.fullPath;
};

export async function createBlog(data: CreateBlogFormData) {
    const {avatar, contentImage} = data;
    const imageFullPath = await uploadImageToSupabase(avatar[0]);
    const contentImageFullPath = await uploadImageToSupabase(contentImage[0]);
    const imageFullPathUrl = `${supabaseUrl}/storage/v1/object/public/${imageFullPath}`
    const contentImagePathUrl = `${supabaseUrl}/storage/v1/object/public/${contentImageFullPath}`
    const { error } = await supabase.from('blogs').insert([{...data, avatar:imageFullPathUrl, contentImage:contentImagePathUrl }]).select();

    if (error) {
        console.error('Error inserting data:', error.message);
        toast.error('Error inserting blog data');
    }

    toast.success('Blog added successfully!');
}

export async function getBlogs(): Promise<IBlog[]> {
    const { data, error } = await supabase.from("blogs").select("*").order('blogId', { ascending: false });

    if (error) {
        console.error(error);
        throw new Error("Blogs could not be loaded");
    }

    return data;
}

export async function getBlogById(blogId: number): Promise<IBlog[] | null> {
    const { data, error } = await supabase.from('blogs').select('*').eq('blogId', blogId).single();

    if (error) {
        console.error('Error fetching blog post:', error.message);
        return null;
    }

    return data;
}