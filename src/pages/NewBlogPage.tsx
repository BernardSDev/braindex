import {SubmitHandler, useForm} from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import toast, { Toaster } from 'react-hot-toast';

const schema = z.object({
    author: z.string().min(1, "Input cannot be empty"),
    profession: z.string().min(1, "Input cannot be empty"),
    avatar: z.string().min(1, "Input cannot be empty"),
    title: z.string().min(1, "Input cannot be empty"),
    excerpt: z.string(),
    content: z.string().min(1, "Input cannot be empty"),
    image: z.string()
})

type FormFields = z.infer<typeof schema>;

export default function MyForm() {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting} }
        = useForm<FormFields>({
        defaultValues: {},
        resolver: zodResolver(schema),
        });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 500));

        try {
            toast.success('Form submitted successfully!');
            console.log('Submitted Data:', data);
        } catch (error) {
            toast.error(`Something went wrong!. Error: ${error}`);
        }
    }

    return (
        <>
            <Toaster position="top-center" />
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