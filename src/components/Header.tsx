export default function Header() {
    return(
        <header className="header flex items-center pb-2 justify-between w-full">
            <h1 className="my-4 text-5xl font-bold text-black">Medium</h1>
            <nav className="flex items-center gap-6">
                <li className="list-none">blog</li>
                <li className="list-none">about-us</li>
                <li className="list-none">contact-us</li>
            </nav>
        </header>
    )
}
