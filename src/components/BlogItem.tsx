export default function BlogItem() {
    return(
        <div className="bg-orange-800 dark:bg-blue-900 text-white px-4 py-6">
            <h1>Title</h1>
            <p>Excerpt</p>
            <img src="/images/bernard.jpg" alt="bernard-avatar" width={55} height={55}/>
            <h2>Author</h2>
            <p>3 min read</p>
            <img src="/images/light-fire.jpg" alt="light fire" width={300} height={35}/>
        </div>
    )
}