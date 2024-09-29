import {useForm} from "react-hook-form";
import {FormData, formDefaultValues, formSchema} from "../schemas/formSchemas.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function Form() {
    const {register, handleSubmit,  formState:{errors}} = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: formDefaultValues
    });

    function onSubmit() {
        console.log("something")
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

                <input {...register("image",)} type="text" placeholder="Image"/>
                {errors.image && (<div className="text-white py-1 bg-red-700">{errors.image.message}</div>)}

                <button type="submit" className="bg-black text-white">
                    Submit
                </button>
            </form>
            <Footer />
        </div>
    )

}