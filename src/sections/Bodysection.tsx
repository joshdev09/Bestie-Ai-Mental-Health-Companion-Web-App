import Containers from '../components/Containers'
import { Link } from 'react-router-dom'

function Bodysection() {
    return (
        <body>
            <div className = "space-y-8">
                <div className = "flex justify-center">
                    <h1 className = "font-bold text-[#567CBD] text-4xl text-center w-90 mt-6">
                        Hi <span className = "inline-block transform -rotate-3 text-amber-200 animate-bounce">bestie</span> 🌿 How are you feeling <span className = "inline-block transform rotate-3 text-amber-200">lately?</span>
                    </h1>
                </div>

                <Link to = "bestie-Ai" className = "flex justify-center">
                    <button className = "flex justify-center p-3 w-45 text-gray-800 bg-[#C8D9E6] hover:bg-blue-100 cursor-pointer rounded-full font-semibold shadow-lg transform transition-all ease-in-out duration-500 hover:-translate-y-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className = "size-6 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                        Chat Bestie AI
                    </button>
                </Link>
            </div>
            
            <Containers />
        </body>
    )
}

export default Bodysection