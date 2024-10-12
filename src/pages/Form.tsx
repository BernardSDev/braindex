import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {zodResolver} from "@hookform/resolvers/zod";
import toast, {Toaster} from "react-hot-toast";
import { Editor } from '@tinymce/tinymce-react';


import {CreateBlogFormData, CreateBlogFormSchema} from "../schemas/formSchemas/CreateBlogFormSchema.ts";
import {CreateBlogDefaultValuesSchema} from "../schemas/defaultValuesSchema/CreateBlogDefaultValuesSchema.ts";
import {createBlog} from "../services/apiBlogs.ts";
import Header from "../components/Header.tsx";

export default function Form() {
    const navigate = useNavigate();

    const { register, reset, setValue,  watch, handleSubmit,  formState:{errors}} = useForm<CreateBlogFormData>({
        resolver: zodResolver(CreateBlogFormSchema),
        defaultValues: CreateBlogDefaultValuesSchema
    });

    const queryClient = useQueryClient();

    const { mutate, isPending:isCreating } = useMutation({
        mutationFn: createBlog,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["blogs"] });
            reset();
            setTimeout(() => { navigate("/"); }, 2000);
        },
        onError: (err) => toast.error(err.message),
    });

    // Set initial value of TinyMCE content
  const content = watch('content', '');

    function onSubmit( data: CreateBlogFormData ) {
        mutate(data)
    }

    return (
        <>
            <Toaster position="top-right" />
            <Header />
            <section className="bg-orange-800x px-4 sm:bg-violet-600x  flex justify-center items-center">
                <form
                    className="bg-green-500x container mx-auto py-10 border-t-2 border-t-gray-350 px-4 grid grid-cols-1 gap-4"
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className="md:w-full mb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">Author</label>
                        <input {...register("author",)} disabled={isCreating} id="author" type="text"
                               placeholder="Author"
                               className={`${isCreating ? 'bg-gray-400' : 'bg-blue-50'} appearance-none rounded w-full py-6 px-4 text-gray-700 leading-tight focus:border focus:outline-none focus:bg-white focus:border-purple-500`}/>
                        {errors.author && (<div className="text-white py-1 bg-red-700">{errors.author.message}</div>)}
                    </div>

                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2"
                               htmlFor="profession">Profession</label>
                        <input {...register("profession",)} disabled={isCreating} id="profession" type="text"
                               placeholder="Profession"
                               className={`${isCreating ? 'bg-gray-400' : 'bg-blue-50'} appearance-none rounded w-full py-6 px-4 text-gray-700 leading-tight focus:border focus:outline-none focus:bg-white focus:border-purple-500`}/>
                        {errors.profession && (
                            <div className="text-white py-1 bg-red-700">{errors.profession.message}</div>)}
                    </div>

                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
                        <input {...register("title",)} disabled={isCreating} id="title" type="text" placeholder="Title"
                               className={`${isCreating ? 'bg-gray-400' : 'bg-blue-50'} appearance-none rounded w-full py-6 px-4 text-gray-700 leading-tight focus:border focus:outline-none focus:bg-white focus:border-purple-500`}/>
                        {errors.title && (<div className="text-white py-1 bg-red-700">{errors.title.message}</div>)}
                    </div>

                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="excerpt">Excerpt</label>
                        <input {...register("excerpt",)} disabled={isCreating} id="excerpt" type="text"
                               placeholder="Excerpt"
                               className={`${isCreating ? 'bg-gray-400' : 'bg-blue-50'} appearance-none rounded w-full py-6 px-4 text-gray-700 leading-tight focus:border focus:outline-none focus:bg-white focus:border-purple-500`}/>
                        {errors.excerpt && (<div className="text-white py-1 bg-red-700">{errors.excerpt.message}</div>)}
                    </div>

                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">Content</label>
                            <Editor apiKey = '3fyqjs703kexnagnbxmh419t483h7kn83gbrb2nqppt37jc7'
                                value={content}
                                onEditorChange={(newValue) => {
                                    // Update form value when TinyMCE content changes
                                    setValue('content', newValue, { shouldValidate: true });
                                }}
                                init={{
                                    placeholder: "Content",
                                    height: 300,
                                    menubar: false,
                                    plugins: [ 'advlist autolink lists link image charmap print preview anchor, searchreplace visualblocks code fullscreen, insertdatetime media table paste code help wordcount', ],
                                    toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                                }}
                                />        
                        {errors.content && (<div className="text-white py-1 bg-red-700">{errors.content.message}</div>)}
                    </div>

                    <div className={`${isCreating ? 'bg-gray-400' : 'bg-blue-50'} mb-5 rounded py-8 px-4 pl-8`}>
                        <label className="block text-gray-700 mb-4 text-sm font-bold" htmlFor="avatar">Avatar</label>
                        <input {...register("avatar",)} disabled={isCreating} id="avatar" accept="image/*" type="file"

                               className={`${isCreating ? 'bg-gray-400' : 'bg-blue-50'} block w-full
                                text-sm text-gray-500 file:w-1/2 file:h-20
                                 file:mr-4 file:py-2 file:px-4
                                 file:rounded-md file:border-0
                                 file:text-md file:font-semibold
                                 file:bg-blue-100
                                 hover:file:bg-blue-100 file:text-blue-700`}
                        />
                        {errors.avatar && (<div className="text-white py-1 bg-red-700">{errors.avatar.message}</div>)}
                    </div>

                    <div className={`${isCreating ? 'bg-gray-400' : 'bg-blue-50'} mb-5 rounded py-8 px-4 pl-8`} >
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contentImage">Content
                            image</label>
                        <input {...register("contentImage",)} disabled={isCreating} id="contentImage" accept="image/*"
                               type="file"
                               placeholder="Content image"
                               className={`${isCreating ? 'bg-gray-400' : 'bg-blue-50'} block w-full
                                text-sm text-gray-500 file:w-1/2 file:h-20
                                 file:mr-4 file:py-2 file:px-4
                                 file:rounded-md file:border-0
                                 file:text-md file:font-semibold
                                 file:bg-blue-100
                                 hover:file:bg-blue-100 file:text-blue-700`}
                        />
                        {errors.contentImage && (
                            <div className="text-white py-1 bg-red-700">{errors.contentImage.message}</div>)}
                    </div>

                    <div className="border-t-2 mt-6 mb-2 border-t-gray-300"></div>
                    <button type="submit" disabled={isCreating}
                            className={`${isCreating ? 'bg-gray-500' : 'bg-black'} py-6 text-white`}>
                        {isCreating ? "Creating..." : "Create"}
                    </button>

                </form>
            </section>
        </>
    )
}