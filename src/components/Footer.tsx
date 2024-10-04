import {Link, NavLink} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-start">
                    <div className="logo text-3xl w-32 mb-4 font-bold tracking-tighter">
                        <NavLink to="/">Brain<span className="text-red-500">Dex</span></NavLink>
                    </div>
                    <p className="text-gray-400">Delivering excellence content since 1957.</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <ul>
                        <li className="mb-2">
                            <span className="text-gray-400">Phone:</span> +233 248 315 982
                        </li>
                        <li className="mb-2">
                            <span className="text-gray-400">Email:</span> info@braindex.com
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Our Location</h3>
                    <p className="text-gray-400">1234 Cowpea St. Klagon</p>
                    <p className="text-gray-400">Accra, Ghana</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Company Info</h3>
                    <ul>
                        <li className="mb-2">
                            <Link to="/" className="text-gray-400 hover:text-white">About Us</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/" className="text-gray-400 hover:text-white">Privacy Policy</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/" className="text-gray-400 hover:text-white">Terms of Service</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                <p className="text-gray-500">&copy; {new Date().getFullYear()} BrainDex. All Rights Reserved.</p>
            </div>
        </footer>
    );
}