import {useForm} from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import toast, { Toaster } from 'react-hot-toast';
import {supabase} from "../services/supabase.ts";
import { useNavigate } from 'react-router-dom';


// ZOD VALIDATION SCHEMA
const blogSchema = z.object({
    author: z.string().min(1, "Input cannot be empty"),
    profession: z.string().min(1, "Input cannot be empty"),
    avatar: z.string().min(1, "Input cannot be empty"),
    title: z.string().min(1, "Input cannot be empty"),
    excerpt: z.string(),
    content: z.string().min(1, "Input cannot be empty"),
    image: z.string(),
})

type BlogSchema = z.infer<typeof blogSchema>;

export default function InsertBlog() {
    const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm<BlogSchema>({
        resolver: zodResolver(blogSchema),
    });

    const navigate = useNavigate(); // Initialize the useNavigate hook

    const onSubmit = async (data:BlogSchema):Promise<void> => {
        const { error } = await supabase.from('blogs').insert([data]).select();

        if (error) {
            console.error('Error inserting data:', error.message);
            alert('Error inserting blog data');
        } else {
            toast.success('Blog added successfully!');
            navigate('/read-blogs'); // Redirect to the success page

        }
    };

    return (
        <>
            <Toaster position="top-center" />
            <h1 className="bg-black text-5xl leading-tight text-white px-4 py-6">Insert new blog page</h1>
            <form className="flex flex-col p-10" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("author",)} type="text" placeholder="Author" className="mb-2"/>
                {errors.author && (<div className="text-white py-1 bg-red-700">{errors.author.message}</div>)}

                <input {...register("profession",)} type="text" placeholder="Profession"/>
                {errors.profession && (<div className="text-white py-1 bg-red-700">{errors.profession.message}</div>)}

                <input {...register("avatar",)} type="text" placeholder="Avatar"/>
                {errors.avatar && (<div className="text-white py-1 bg-red-700">{errors.avatar.message}</div>)}

                <input {...register("title",)} type="text" placeholder="Title"/>
                {errors.title && (<div className="text-white py-1 bg-red-700">{errors.title.message}</div>)}

                <input {...register("excerpt",)} type="text" placeholder="Excerpt"/>
                {errors.excerpt && (<div className="text-white py-1 bg-red-700">{errors.excerpt.message}</div>)}

                <input {...register("content",)} type="text" placeholder="Content"/>
                {errors.content && (<div className="text-white py-1 bg-red-700">{errors.content.message}</div>)}

                <input {...register("image",)} type="text" placeholder="Image"/>
                {errors.image && (<div className="text-white py-1 bg-red-700">{errors.image.message}</div>)}

                <button disabled={isSubmitting} type="submit" className="bg-black text-white">
                    {isSubmitting ? "Sending..." : "Submit"}
                </button>
            </form>
        </>
    )
}