import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Calendar, Lock } from 'lucide-react'; // Assuming lucide-react for icons
const TimeCapsuleCreator = () => {
    const [message, setMessage] = useState('');
    const [unlockDate, setUnlockDate] = useState('');
    const handleSealCapsule = () => {
        // Logic to send data to backend goes here
        console.log("Sealing capsule:", { message, unlockDate });
        alert("Capsule Sealed! See you in the future.");
    };
    return (_jsxs("div", { className: "max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl border border-gray-100", children: [_jsxs("div", { className: "text-center mb-6", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-800", children: "Time Capsule" }), _jsx("p", { className: "text-gray-500 text-sm", children: "Send a message to the future you." })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-gray-700 font-medium mb-2", children: "Your Message" }), _jsx("textarea", { className: "w-full p-4 h-40 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all resize-none", placeholder: "Dear future me, remember that...", value: message, onChange: (e) => setMessage(e.target.value) })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-gray-700 font-medium mb-2", children: "Unlock Date" }), _jsxs("div", { className: "relative", children: [_jsx("input", { type: "datetime-local", className: "w-full p-3 pl-10 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none", onChange: (e) => setUnlockDate(e.target.value) }), _jsx(Calendar, { className: "absolute left-3 top-3.5 text-gray-400 w-5 h-5" })] })] }), _jsxs("button", { onClick: handleSealCapsule, className: "w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-indigo-200 cursor-pointer", children: [_jsx(Lock, { className: "w-5 h-5" }), _jsx("span", { children: "Seal Time Capsule" })] })] }));
};
export default TimeCapsuleCreator;
