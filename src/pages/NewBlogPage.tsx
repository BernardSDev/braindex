export default function NewBlogPage() {
    return(
        <div className="bg-red-200 p-4">
            <h1>Add new blog page</h1>
            <MyForm />
        </div>
    )
}

function MyForm() {
    return (
        <form className="flex flex-col p-4">
            <label className="px-4 py-2 m-2">Author
                <input type="text" placeholder="Author name..." />
            </label>
            <label className="px-4 py-2 m-2">Profession
                <input type="text" placeholder="Profession..." />
            </label>
            <label className="px-4 py-2 m-2">Avatar
                <input type="file" placeholder="Avatar..." />
            </label>
            <label className="px-4 py-2 m-2">Title
                <input type="text" placeholder="Title..." />
            </label>
            <label className="px-4 py-2 m-2">Content
                <input type="text" placeholder="Content..." />
            </label>
            <label className="px-4 py-2 m-2">Image
                <input type="file" placeholder="Image..." />
            </label>
        </form>
    )
}