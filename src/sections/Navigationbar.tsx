import { Link } from 'react-router-dom'

function Navigationbar() {
    return (
        <nav className = "p-6 flex">
            <Link 
            to = "/"
            className = "font-medium text-2xl cursor-pointer"
            >
                Bestie
            </Link>

            <div className = "hidden md:block ml-auto space-x-4 items-center">
                <div className = "flex transition-all duration-500 ease-in-out opacity-100 md:opacity-0 lg:opacity-100 justify-center space-x-6 font-semibold text-lg">
                    <Link
                        to="/mood"
                        className="cursor-pointer transform transition-all ease-in-out duration-500 hover:rotate-5"
                    >
                        Mood
                    </Link>

                    <Link
                        to="/unsaid-thoughts"
                        className="cursor-pointer transform transition-all ease-in-out duration-500 hover:rotate-5"
                    >
                        Journal
                    </Link>

                    <Link
                        to=""
                        className="cursor-pointer bg-amber-200 transform transition-all ease-in-out duration-500 hover:-translate-y-2"
                    >
                        Bestie AI
                    </Link>

                    <Link
                        to="/coping-tools"
                        className="cursor-pointer transform transition-all ease-in-out duration-500 hover:rotate-5"
                    >
                        Coping Tools
                    </Link>

                    <Link
                        to="/time-capsule"
                        className="cursor-pointer transform transition-all ease-in-out duration-500 hover:rotate-5"
                    >
                        Time Capsule
                    </Link>
                </div>
            </div>

            <div className = "ml-auto flex items-center">
                <a href = "">
                    <button className = "p-2 w-20 rounded-full font-semibold bg-[#C8D9E6] hover:bg-blue-100 cursor-pointer justify-end">Login</button>
                </a>
            </div>
        </nav>
    )
}

export default Navigationbar