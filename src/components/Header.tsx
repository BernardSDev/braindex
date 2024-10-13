import { NavLink } from "react-router-dom";


export default function Header() {
    return(
        <header className="header bg-[#040B0B] text-white mb-16 flex items-center container py-10 px-4 mx-auto justify-between">
            <div className="logo text-3xl font-bold tracking-tighter">
                <NavLink to="/">Brain<span className="text-red-500">Dex</span></NavLink>
            </div>
            <nav>
                <ul className="flex items-center gap-8">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li className="flex">
                        <NavLink to="/form">
                        <span className="flex gap-0.5">
                            <img src="/images/write.svg" width={35} height={35} className="w-6 h-6 "  alt="write"/>write
                        </span>
                    </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
