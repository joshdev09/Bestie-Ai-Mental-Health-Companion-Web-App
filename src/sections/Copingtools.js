import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
function CopingTools() {
    return (_jsxs("div", { children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 w-[90%] mx-auto md:w-auto md:max-w-2xl", children: _jsx(Link, { to: "/vanta-birds", className: "p-5 bg-amber-200 rounded-lg transform transition-all ease-in-out duration-500 hover:-translate-y-2 hover:shadow-lg cursor-pointer", children: _jsx("p", { className: "font-medium text-xl", children: "Vanta Birds" }) }) }), _jsx("div", { className: "text-center mt-40", children: _jsx("p", { className: "text-gray-400 text-xl", children: "Still working on some other tools..." }) })] }));
}
export default CopingTools;
