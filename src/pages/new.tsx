// src/services/blogService.ts
import { BlogSchema } from "../schemas/formSchemas";
import { supabase } from "../services/supabase";

// Function to upload an image to Supabase storage
export const uploadImageToSupabase = async (file: File) => {
  const fileName = `${Date.now()}_${file.name}`;
  const { data, error } = await supabase.storage.from("avatars").upload(fileName, file);

  if (error) throw error;
  return data?.Key || fileName;
};

// Function to insert a new blog post into the Supabase table
export const createBlogPost = async (blogData: BlogSchema) => {
  const { title, content, image } = blogData;

  // Upload image if it exists
  let imageUrl: string | null = null;
  if (image) {
    const imageKey = await uploadImageToSupabase(image);
    const { publicURL } = supabase.storage.from("avatars").getPublicUrl(imageKey);
    imageUrl = publicURL || null;
  }

  const { data, error } = await supabase.from("avatars") .insert([{ title, content, image_url: imageUrl }]);

  if (error) throw error;
  return data;
};
