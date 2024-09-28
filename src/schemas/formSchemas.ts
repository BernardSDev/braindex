import {z} from 'zod';

export const formSchema = z.object({
    author: z.string().min(1, "Input cannot be empty"),
    profession: z.string(),
    avatar: z.instanceof(FileList).refine((files) => files.length === 1, 'Image is required'),
    title: z.string(),
    excerpt: z.string(),
    content: z.string(),
    image: z.string()
});

export const formDefaultValues = {
    author: "",
    profession: "",
    avatar: undefined,
    title: "",
    excerpt: "",
    content:"",
    image: "",
}


export type FormData = z.infer<typeof formSchema>;

//////////////////////////////////////////////


export const uploadSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  image: z.instanceof(FileList).refine((files) => files.length === 1, 'Image is required'),
});

export type UploadData = z.infer<typeof uploadSchema>;



// src/schemas/blogSchema.ts
export const blogSchema = z.object({
  author: z.string().min(1, "Input cannot be empty"),
    profession: z.string(),
    avatar: z.instanceof(FileList).refine((files) => files.length === 1, 'Image is required'),
    title: z.string(),
    excerpt: z.string(),
    content: z.string(),
    image: z.string()
});

export type BlogSchema = z.infer<typeof blogSchema>;
