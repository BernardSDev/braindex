import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {zodResolver} from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import {CreateBlogFormData, CreateBlogFormSchema} from "../schemas/formSchemas/CreateBlogFormSchema.ts";
import {CreateBlogDefaultValuesSchema} from "../schemas/defaultValuesSchema/CreateBlogDefaultValuesSchema.ts";
import {createBlog} from "../services/apiBlogs.ts";
import Header from "../components/Header.tsx";


export default function Form() {
    const navigate = useNavigate();

    const { register, reset, handleSubmit,  formState:{errors}} = useForm<CreateBlogFormData>({
        resolver: zodResolver(CreateBlogFormSchema),
        defaultValues: CreateBlogDefaultValuesSchema
    });

    const queryClient = useQueryClient();

    const { mutate, isPending:isCreating } = useMutation({
        mutationFn: createBlog,
        onSuccess: () => {
            toast.success("New blog successfully created");
            queryClient.invalidateQueries({ queryKey: ["blogs"] });
            reset();
            navigate("/");
        },
        onError: (err) => toast.error(err.message),
    });

    function onSubmit( data: CreateBlogFormData ) {
        mutate(data)
    }

    return (
        <div>
            <Header />
            <form className="bg-green-500x p-4 grid grid-cols-1 gap-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="md:w-1/3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">Author</label>
                    <input {...register("author",)} disabled={isCreating} id="author" type="text" placeholder="Author"
                           className={`${isCreating ? 'bg-gray-400' : 'bg-blue-50'} appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:border focus:outline-none focus:bg-white focus:border-purple-500`} />
                    {errors.author && (<div className="text-white py-1 bg-red-700">{errors.author.message}</div>)}
                </div>

                <div className="md:w-1/3">
                    <label className="block text-gray-700 text-sm font-bold mb-2"
                           htmlFor="profession">Profession</label>
                    <input {...register("profession",)} disabled={isCreating} id="profession" type="text" placeholder="Profession"
                           className={`${isCreating ? 'bg-gray-400' : 'bg-blue-50'} appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:border focus:outline-none focus:bg-white focus:border-purple-500`} />
                    {errors.profession && (
                        <div className="text-white py-1 bg-red-700">{errors.profession.message}</div>)}
                </div>

                <div className="md:w-1/3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
                    <input {...register("title",)} disabled={isCreating} id="title" type="text" placeholder="Title"
                           className={`${isCreating ? 'bg-gray-400' : 'bg-blue-50'} appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:border focus:outline-none focus:bg-white focus:border-purple-500`} />
                    {errors.title && (<div className="text-white py-1 bg-red-700">{errors.title.message}</div>)}
                </div>

                <div className="md:w-1/3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="excerpt">Excerpt</label>
                    <input {...register("excerpt",)} disabled={isCreating} id="excerpt" type="text" placeholder="Excerpt"
                           className={`${isCreating ? 'bg-gray-400' : 'bg-blue-50'} appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:border focus:outline-none focus:bg-white focus:border-purple-500`}/>
                    {errors.excerpt && (<div className="text-white py-1 bg-red-700">{errors.excerpt.message}</div>)}
                </div>

                <div className="md:w-1/3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">Content</label>
                    <input {...register("content",)} disabled={isCreating} id="content" type="text" placeholder="Content"
                           className={`${isCreating ? 'bg-gray-400' : 'bg-blue-50'} appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:border focus:outline-none focus:bg-white focus:border-purple-500`} />
                    {errors.content && (<div className="text-white py-1 bg-red-700">{errors.content.message}</div>)}
                </div>

                    <div className="md:w-1/3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="avatar">Avatar</label>
                        <input {...register("avatar",)} disabled={isCreating} id="avatar" accept="image/*" type="file" placeholder="Avatar"
                               className={`${isCreating ? 'bg-gray-400' : 'bg-blue-50'}  appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:border focus:outline-none focus:bg-white focus:border-purple-500`}/>
                        {errors.avatar && (<div className="text-white py-1 bg-red-700">{errors.avatar.message}</div>)}
                    </div>
                    <div className="md:w-1/3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contentImage">Content
                            image</label>
                        <input {...register("contentImage",)} disabled={isCreating} id="contentImage" accept="image/*" type="file"
                               placeholder="Content image" className={`${isCreating ? 'bg-gray-400' : 'bg-blue-50'} appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:border focus:outline-none focus:bg-white focus:border-purple-500`} />
                        {errors.contentImage && (<div className="text-white py-1 bg-red-700">{errors.contentImage.message}</div>)}
                    </div>

                    <div className="border-t-2 mt-6 mb-2 border-t-gray-300"></div>
                <button type="submit" disabled={isCreating} className={`py-3 text-white ${isCreating ? 'bg-gray-500' : 'bg-black' }`}>
                    {isCreating ? "Creating..." : "Create"}
                </button>
            </form>
        </div>
    )
}