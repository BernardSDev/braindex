import {z} from "zod";

export const BlogSchema = z.object({
    author: z.string().min(1, "Input cannot be empty"),
    profession: z.string(),
    avatar: z.instanceof(FileList).refine((files) => files.length === 1, 'Image is required'),
    title: z.string(),
    excerpt: z.string(),
    content: z.string(),
    image: z.string()
});
