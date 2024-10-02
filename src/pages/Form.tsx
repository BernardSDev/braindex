import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {CreateBlogFormData, CreateBlogFormSchema} from "../schemas/formSchemas/CreateBlogFormSchema.ts";
import {CreateBlogDefaultValuesSchema} from "../schemas/defaultValuesSchema/CreateBlogDefaultValuesSchema.ts";
import Header from "../components/Header.tsx";
import {createBlog} from "../services/apiBlogs.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

export default function Form() {
    const navigate = useNavigate();

    const {register, reset, handleSubmit,  formState:{errors}} = useForm<CreateBlogFormData>({
        resolver: zodResolver(CreateBlogFormSchema),
        defaultValues: CreateBlogDefaultValuesSchema
    });

    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationFn: createBlog,
        onSuccess: () => {
            toast.success("New blog successfully created");
            queryClient.invalidateQueries({ queryKey: ["blogs"] });
            reset();
            navigate("/blogs");

        },
        onError: (err) => toast.error(err.message),
    });

    function onSubmit(data: CreateBlogFormData) {
        mutate(data)
    }

    return (
        <div>
            <Header />
            <form className="flex flex-col p-10" onSubmit={handleSubmit(onSubmit)} >
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

                <input {...register("contentImage",)} accept="image/*" type="file" placeholder="Content Image"/>
                {errors.contentImage && (<div className="text-white py-1 bg-red-700">{errors.contentImage.message}</div>)}

                <button type="submit" className="bg-black text-white">
                    {isPending ? "Creating..." : "Create"}
                </button>
            </form>
        </div>
    )
}