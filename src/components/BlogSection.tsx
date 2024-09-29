import BlogSummary from "./BlogSummary.tsx";

export default function BlogSection() {
    return (
        <section className="blog-section bg-violet-500 px-4 py-6">
            <div className="bg-amber-50 p-2 mb-4 mt-3">
                <h1 className="underline mb-2">view all blogs</h1>
                <h1 className="capitalize font-semibold mb-2">read wide to enrich your knowledge</h1>
            </div>
            <div className="featured-post">
                <div className="grid grid-cols-3 gap-4">
                    <BlogSummary />
                    <BlogSummary />
                    <BlogSummary />
                </div>
            </div>
            <div className="text-red-300 text-center py-6">see more...</div>
        </section>
    )
}