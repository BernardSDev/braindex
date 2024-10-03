import { NavLink } from "react-router-dom";

export default function Header() {
    return(
        <header className="header flex items-center container py-6 px-4 mx-auto justify-between">
            <div className="logo text-3xl font-bold tracking-tighter">
                <NavLink to="/">BrainDex</NavLink>
            </div>
            <nav >
                <ul className="flex items-center justify-between gap-2 text-black">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/form">Add new</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
