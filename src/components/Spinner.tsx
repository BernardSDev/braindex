export default function Spinner() {
    return (
            <div className="bg-gray-800 flex items-center justify-center h-screen w-full">
                <svg
                    className="animate-spin h-24 w-24 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                    ></circle>
                    <path
                        className="opacity-50"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM12 4a8 8 0 100 16v-4a4 4 0 110-8z"
                    ></path>
                </svg>
            </div>
    )
}