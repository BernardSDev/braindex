export default function Header() {
    return(
        <header className="bg-indigo-700 text-white p-2 py-6 header flex items-center justify-between w-full">
            <div className="logo text-red-300">Braindex</div>
            <nav className="flex items-center gap-4 justify-between">
                <a href="">Blogs</a>
                <a href="">Add new</a>
                <a href="">Contact</a>
            </nav>
        </header>
    )
}
