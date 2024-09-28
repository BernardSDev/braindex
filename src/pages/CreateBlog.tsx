import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { supabase } from "../services/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  image: z
    .any()
    .refine((file) => file instanceof File, { message: "Image is required" })
    .optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;


// Function to upload an image to Supabase storage
export const uploadImageToSupabase = async (file: File) => {
    const fileName = `${Date.now()}_${file.name}`;
    const { data, error } = await supabase.storage.from("avatars").upload(fileName, file);
  
    if (error) throw error;
    return data
  };

  export const createBlogPost = async (blogData: BlogSchema) => {
    const { title, content, image } = blogData;
  
    // Upload image if it exists
    let imageUrl: string | null = null;
    if (image) {
      const imageKey = await uploadImageToSupabase(image);
      const { publicURL } = supabase.storage.from("blog-images").getPublicUrl(imageKey);
      imageUrl = publicURL || null;
    }
  
    const { data, error } = await supabase.from("blogs").insert([{ title, content, image_url: imageUrl }]);
  
    if (error) throw error;
    return data;
  };

export default function CreateBlog() {
    const queryClient = useQueryClient();
    const {register, handleSubmit, formState:{errors}} = useForm<FormData>({ resolver: zodResolver(blogSchema) });

    const { mutate, isLoading, isSuccess, isError, error } = useMutation((blogData: BlogSchema) => createBlogPost(blogData), {
        onSuccess: () => {
          // Invalidate and refetch the blog posts
          queryClient.invalidateQueries(["blogs"]);
        },
        onError: (error) => {
          console.error("Error creating blog post:", error);
        },
      });

    const onSubmit = (data: BlogSchema) => console.log(data);

    return(
        <div>
            <h1 className="bg-indigo-400">Create Blog</h1>

            <form className="flex flex-col p-10" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("author",)} type="text" placeholder="Author" className="mb-2"/>
                {errors.author && (<div className="text-white py-1 bg-red-700">{errors.author.message}</div>)}

                <input {...register("profession",)} type="text" placeholder="Profession"/>
                {errors.profession && (<div className="text-white py-1 bg-red-700">{errors.profession.message}</div>)}

                <input {...register("avatar",)} accept="image/*" type="file" placeholder="Avatar"/>
                {errors.avatar && (<div className="text-white py-1 bg-red-700">{errors.avatar.message}</div>)}

                <input {...register("title",)} type="text" placeholder="Title"/>
                {errors.title && (<div className="text-white py-1 bg-red-700">{errors.title.message}</div>)}

                <input {...register("excerpt",)} type="text" placeholder="Excerpt"/>
                {errors.excerpt && (<div className="text-white py-1 bg-red-700">{errors.excerpt.message}</div>)}

                <input {...register("content",)} type="text" placeholder="Content"/>
                {errors.content && (<div className="text-white py-1 bg-red-700">{errors.content.message}</div>)}

                <input {...register("image",)} type="text" placeholder="Image"/>
                {errors.image && (<div className="text-white py-1 bg-red-700">{errors.image.message}</div>)}

                {/* <img width={55} height={55} src="https://rmgltopxktqojlntsfls.supabase.co/storage/v1/object/public/avatars/portia.jpeg" /> */}

                <button  type="submit" className="bg-black text-white">
                    Submit
                </button>
            </form>
        </div>
    )
}