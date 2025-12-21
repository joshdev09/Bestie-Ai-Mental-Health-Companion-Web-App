import { Link } from 'react-router-dom'

function CopingTools() {
    return (
        <div>
            <div className = "grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 w-[90%] mx-auto md:w-auto md:max-w-2xl">
                <Link 
                    to = "/vanta-birds"
                    className = "p-5 bg-amber-200 rounded-lg transform transition-all ease-in-out duration-500 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
                > 
                    <p className = "font-medium text-xl">Vanta Birds</p>
                </Link>
            </div>

            <div className = "text-center mt-40">
                <p className = "text-gray-400 text-xl">Still working on some other tools...</p>
            </div>
        </div>

    )
}

export default CopingTools