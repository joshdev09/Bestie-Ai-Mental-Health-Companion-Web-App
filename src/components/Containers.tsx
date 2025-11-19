import { Link } from 'react-router-dom'

function Containers() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 w-[90%] mx-auto md:w-auto md:max-w-2xl">

            <Link 
                to="/mood" 
                className="p-5 bg-amber-200 rounded-lg transform transition-all ease-in-out duration-500 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
            >
                <p className="font-medium text-xl">⭐ Mood</p>
            </Link>

            <Link 
                to="/coping-tools"
                className="p-5 bg-amber-200 rounded-lg transform transition-all ease-in-out duration-500 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
            >
                <p className="font-medium text-xl cursor-pointer">🔧 Coping Tools</p>
            </Link>

            <Link 
                to="/unsaid-thoughts"
                className="p-5 bg-amber-200 rounded-lg transform transition-all ease-in-out duration-500 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
            >
                <p className="font-medium text-xl">✍🏼 Unsaid Thoughts</p>
            </Link>

            <Link 
                to="/time-capsule"
                className="p-5 bg-amber-200 rounded-lg transform transition-all ease-in-out duration-500 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
            >
                <p className="font-medium text-xl">⏰ Time Capsule</p>
            </Link>

        </div>


        /* old code masyadong messy e

        <div className = "flex flex-col items-center md:flex-row gap-2 justify-center mt-10 ">

            <div className = "flex flex-col gap-2 w-[90%] md:w-90">
                <div className = "p-5 bg-amber-200 rounded-lg transform transition-all ease-in-out duration-500 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
                    <p className = "font-medium text-xl">⭐ Rate what you feel today!</p>
                </div>

                <div className = "p-5 bg-amber-200 rounded-lg transform transition-all ease-in-out duration-500 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
                    <p className = "font-medium text-xl">✍🏼 Unsaid Thoughts</p>
                </div>
            </div>

            <div className = "flex flex-col gap-2 w-[90%] md:w-90">
                <div className = "p-5 bg-amber-200 rounded-lg transform transition-all ease-in-out duration-500 hover:-translate-y-2 hover:shadow-lg cursor-pointer ">
                    <p className = "font-medium text-xl">🔧 Coping Tools</p>
                </div>

                <div className = "p-5 bg-amber-200 rounded-lg transform transition-all ease-in-out duration-500 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
                    <p className = "font-medium text-xl">⏰ Time Capsule</p>
                </div>
            </div>
        </div>
        */
    )
}

export default Containers