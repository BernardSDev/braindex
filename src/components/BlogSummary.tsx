export default function BlogSummary() {
    return(
        <div className="bg-gray-800 dark:bg-gray-900 text-white px-4 py-6">
            <img src="/images/light-fire.jpg"  alt="light fire" width={100}  height={55} />
            <h1>Title</h1>
            <img src="/images/bernard.jpg"  alt="bernard-avatar" width={55} height={55} />
            <h2>Author</h2>
            <p>3 min read</p>
        </div>
    )
}