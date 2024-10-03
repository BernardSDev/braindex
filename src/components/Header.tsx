import { NavLink } from "react-router-dom";

export default function Header() {
    return(
        <header className="bg-white text-white mb-2 border-amber-950 p-2 py-6 header flex items-center justify-between w-full">
            <div className="logo text-black">
                <NavLink to="/">BrainDex</NavLink>
            </div>
            <nav >
                <ul className="flex items-center gap-4 justify-between text-black">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                    <li><NavLink to="/form">Add new</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
