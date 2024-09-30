import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import toast, { Toaster } from 'react-hot-toast';
import {supabase, supabaseUrl} from "../services/supabase.ts";
import { useNavigate } from "react-router-dom";
import {CreateBlogFormData, CreateBlogFormSchema} from "../schemas/formschemas/CreateBlogFormSchema.ts";
import {CreateBlogDefaultValuesSchema} from "../schemas/defaultValuesSchema/CreateBlogDefaultValuesSchema.ts";

export default function InsertImageDemo() {
    const {register, reset, handleSubmit,  formState:{errors}} = useForm<CreateBlogFormData>({
        resolver: zodResolver(CreateBlogFormSchema),
        defaultValues: CreateBlogDefaultValuesSchema
    });

    const navigate = useNavigate();

    async function onSubmit(data: CreateBlogFormData) {
        const imageName = data.avatar[0]
        
        const { data:imageData } = await supabase.storage.from('avatars').upload(`${Math.random()*1000}-${imageName.name}`, imageName, {
            cacheControl: '3600',
            upsert: false
          })

        const imagePath = `${supabaseUrl}/storage/v1/object/public/${imageData?.fullPath}`
        
        const { error } = await supabase.from('blogs').insert([{...data, avatar:imagePath}]).select();

        if (error) {
            console.error('Error inserting data:', error.message);
            alert('Error inserting blog data');
        } else {
            toast.success('Blog added successfully!');
            navigate('/read-blogs');

        }
        reset()

    }
    
    return (
        <div>
            <Toaster position="top-center" />
            <h1 className="bg-black text-5xl leading-tight text-white px-4 py-6">Insert new blog page</h1>
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

                <button  type="submit" className="bg-black text-white">
                    Submit
                </button>
            </form>
        </div>
    );
}